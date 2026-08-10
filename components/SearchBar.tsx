"use client";

type SearchBarProps = {
  origin: string;
  setOrigin: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  onSearch: () => void;
  loading?: boolean;
};

export default function SearchBar({
  origin,
  setOrigin,
  destination,
  setDestination,
  onSearch,
  loading = false,
}: SearchBarProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-2xl shadow-black/30">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <label className="text-sm text-slate-300">
          <span className="mb-2 block font-medium">D’où partez-vous ?</span>
          <input
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            placeholder="Plateau, Mermoz, Liberté 6"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-blue-500"
          />
        </label>
        <label className="text-sm text-slate-300">
          <span className="mb-2 block font-medium">Où allez-vous ?</span>
          <input
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="Parcelles Assainies, Hann, Guédiawaye"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
          />
        </label>
        <button
          type="button"
          onClick={onSearch}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Recherche..." : "Rechercher"}
        </button>
      </div>
    </div>
  );
}
