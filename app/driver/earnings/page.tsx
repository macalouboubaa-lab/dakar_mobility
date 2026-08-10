"use client";

export default function DriverEarningsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Conducteur</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Revenus et performances</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm text-slate-400">Revenus du jour</p>
            <p className="mt-2 text-2xl font-bold text-emerald-400">18 500 FCFA</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm text-slate-400">Trajets validés</p>
            <p className="mt-2 text-2xl font-bold text-white">12</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm text-slate-400">Note moyenne</p>
            <p className="mt-2 text-2xl font-bold text-blue-400">4.8/5</p>
          </div>
        </div>
      </div>
    </main>
  );
}
