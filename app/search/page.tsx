"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import TransportTypeFilter from "@/components/TransportTypeFilter";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { generateMockItineraries } from "@/lib/transportUtils";

const MapWithStops = dynamic(() => import("@/components/MapWithStops"), { ssr: false });

type Stop = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zone?: string | null;
};

export default function SearchPage() {
  const router = useRouter();
  const [origin, setOrigin] = useState("Plateau");
  const [destination, setDestination] = useState("Parcelles Assainies");
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const [stops, setStops] = useState<Stop[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStops() {
      try {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase.from("stops").select("id, name, lat, lng, zone").limit(20);
        if (!error && data) {
          setStops(data as Stop[]);
        }
      } catch {
        setStops([
          { id: "1", name: "Petersen", lat: 14.697, lng: -17.462 },
          { id: "2", name: "Liberté 6", lat: 14.726, lng: -17.46 },
          { id: "3", name: "Gare Routière Pompiers", lat: 14.694, lng: -17.444 },
        ]);
      }
    }

    void loadStops();
  }, []);

  const filteredStops = useMemo(() => {
    if (selectedCodes.length === 0) return stops;
    return stops.filter((stop) => selectedCodes.some((code) => stop.name.toLowerCase().includes(code.toLowerCase())));
  }, [selectedCodes, stops]);

  async function handleSearch() {
    setLoading(true);
    try {
      const supabase = getSupabaseClient();
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user?.id ?? null;

      const { data: searchData, error: searchError } = await supabase
        .from("trip_searches")
        .insert({
          user_id: userId,
          origin_address: origin,
          destination_address: destination,
        })
        .select("id")
        .single();

      if (searchError) {
        console.error(searchError);
      }

      const searchId = searchData?.id ?? "demo-search";
      const itineraries = generateMockItineraries(origin, destination);
      console.info(itineraries);
      router.push(`/results?search_id=${searchId}`);
    } catch (error) {
      console.error(error);
      router.push(`/results?search_id=demo-search`);
    } finally {
      setLoading(false);
    }
  }

  function toggleTransport(code: string) {
    setSelectedCodes((current) => (current.includes(code) ? current.filter((item) => item !== code) : [...current, code]));
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-black/30">
          <SearchBar
            origin={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            onSearch={handleSearch}
            loading={loading}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <MapWithStops stops={filteredStops} center={[14.6937, -17.4441]} />
          </div>
          <div className="space-y-4">
            <TransportTypeFilter selectedCodes={selectedCodes} onToggle={toggleTransport} />
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <h2 className="text-lg font-semibold text-white">Arrêts majeurs</h2>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                {filteredStops.map((stop) => (
                  <div key={stop.id} className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <p className="font-medium text-white">{stop.name}</p>
                    <p className="text-slate-400">{stop.zone ?? "Zone urbaine"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
