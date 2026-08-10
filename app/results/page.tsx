"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { generateMockItineraries } from "@/lib/transportUtils";
import ItineraryCard from "@/components/ItineraryCard";

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchId = searchParams.get("search_id") ?? "demo-search";
  const itineraries = generateMockItineraries("Votre position", "Destination");

  function handleSelect(id: string) {
    router.push(`/booking/${id}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Recherche</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Itinéraires comparés</h1>
          <p className="mt-2 text-slate-400">ID de recherche : {searchId}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 px-4 py-8 text-white">Chargement des résultats…</div>}>
      <ResultsContent />
    </Suspense>
  );
}
