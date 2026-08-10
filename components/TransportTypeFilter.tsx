"use client";

import { TRANSPORT_OPTIONS } from "@/lib/transportUtils";

type TransportTypeFilterProps = {
  selectedCodes: string[];
  onToggle: (code: string) => void;
};

export default function TransportTypeFilter({ selectedCodes, onToggle }: TransportTypeFilterProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <p className="text-sm font-semibold text-slate-200">Filtres de transport</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {TRANSPORT_OPTIONS.map((option) => {
          const isActive = selectedCodes.includes(option.code);
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => onToggle(option.code)}
              className={`rounded-full px-3 py-2 text-sm transition ${
                isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-200"
              }`}
            >
              {option.icon} {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
