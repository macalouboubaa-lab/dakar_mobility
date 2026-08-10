"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Profil</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Bienvenue à bord</h1>
          </div>
          <Link href="/search" className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-950">
            Rechercher un trajet
          </Link>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-lg font-semibold text-white">Informations du compte</h2>
            <p className="mt-2 text-slate-400">Passager • Abonnements actifs • Historique de trajets</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-lg font-semibold text-white">Historique récent</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Plateau → Parcelles Assainies • 15 min</li>
              <li>Hann → Gare Routière • 20 min</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
