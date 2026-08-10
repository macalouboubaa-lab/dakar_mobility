"use client";

import AuthGate from "@/app/components/AuthGate";

export default function AdminHomePage() {
  return (
    <AuthGate expectedRole="admin">
      <main className="min-h-screen bg-gray-950 p-6 text-white">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl shadow-black/30">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-400">Administration TERANGA</h1>
            <p className="mt-2 text-gray-400">Tableau de bord administrateur pour gérer les utilisateurs et les courses.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-white">Utilisateurs</h2>
              <p className="mt-2 text-gray-400">Voir et gérer les clients, chauffeurs et administrateurs.</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-white">Courses</h2>
              <p className="mt-2 text-gray-400">Surveiller l’activité des courses et l’état des réservations.</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-white">Paramètres</h2>
              <p className="mt-2 text-gray-400">Configurer les paramètres de l’application et le modèle métier.</p>
            </div>
          </div>
        </div>
      </main>
    </AuthGate>
  );
}
