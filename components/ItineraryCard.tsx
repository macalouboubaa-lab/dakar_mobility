"use client";

import { formatFCFA } from "@/lib/pricing";

type ItineraryCardProps = {
  itinerary: {
    id: string;
    label: string;
    total_duration_min: number;
    total_price_fcfa: number;
    nb_correspondances: number;
    segments: Array<{
      transport: string;
      from: string;
      to: string;
      price_fcfa: number;
      duration_min: number;
    }>;
  };
  onSelect: (id: string) => void;
};

export default function ItineraryCard({ itinerary, onSelect }: ItineraryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-lg shadow-black/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-emerald-400">{itinerary.label}</p>
          <h3 className="mt-1 text-xl font-semibold text-white">{formatFCFA(itinerary.total_price_fcfa)}</h3>
        </div>
        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
          {itinerary.total_duration_min} min
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-300">
        <p>Correspondances : {itinerary.nb_correspondances}</p>
        {itinerary.segments.map((segment, index) => (
          <div key={`${segment.transport}-${index}`} className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
            <p className="font-medium text-white">{segment.transport}</p>
            <p>
              {segment.from} → {segment.to}
            </p>
            <p className="text-slate-400">
              {formatFCFA(segment.price_fcfa)} • {segment.duration_min} min
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onSelect(itinerary.id)}
        className="mt-5 w-full rounded-xl bg-emerald-500 px-3 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Choisir cet itinéraire
      </button>
    </div>
  );
}
