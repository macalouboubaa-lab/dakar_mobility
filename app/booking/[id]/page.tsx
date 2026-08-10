"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { formatFCFA } from "@/lib/pricing";
import { generateMockItineraries } from "@/lib/transportUtils";

const methods = [
  { id: "wave", label: "Wave" },
  { id: "orange_money", label: "Orange Money" },
  { id: "cash", label: "Espèces" },
];

export default function BookingPage() {
  const params = useParams();
  const [paymentMethod, setPaymentMethod] = useState("wave");

  const itinerary = useMemo(() => {
    const selected = generateMockItineraries("Votre position", "Destination").find((item) => item.id === params.id);
    return selected ?? generateMockItineraries("Votre position", "Destination")[0];
  }, [params.id]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Réservation</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Confirmation de trajet</h1>
        <p className="mt-2 text-slate-400">Sélectionnez votre mode de paiement pour valider votre itinéraire.</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-lg font-semibold text-white">Votre itinéraire</h2>
            <p className="mt-2 text-sm text-slate-400">{itinerary.label}</p>
            <p className="mt-4 text-3xl font-bold text-emerald-400">{formatFCFA(itinerary.total_price_fcfa)}</p>
            <p className="mt-2 text-slate-300">Durée : {itinerary.total_duration_min} min</p>
            <div className="mt-4 space-y-2">
              {itinerary.segments.map((segment, index) => (
                <div key={`${segment.transport}-${index}`} className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
                  <p className="font-medium text-white">{segment.transport}</p>
                  <p>{segment.from} → {segment.to}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-lg font-semibold text-white">Paiement</h2>
            <div className="mt-4 space-y-2">
              {methods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full rounded-xl border px-3 py-3 text-left ${paymentMethod === method.id ? "border-emerald-500 bg-emerald-500/10 text-emerald-300" : "border-slate-800 bg-slate-900 text-slate-200"}`}
                >
                  {method.label}
                </button>
              ))}
            </div>
            <button className="mt-6 w-full rounded-xl bg-blue-600 px-3 py-3 font-semibold text-white transition hover:bg-blue-500">
              Confirmer le paiement
            </button>
            <Link href="/profile" className="mt-3 block text-center text-sm text-slate-400">
              Voir mon profil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
