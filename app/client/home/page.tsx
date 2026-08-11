
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicleType, setVehicleType] = useState<"standard" | "comfort" | "delivery">("standard");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && dropoff) {
      // Simulation calcul selon le type de véhicule
      const basePrice = vehicleType === "comfort" ? 3500 : vehicleType === "delivery" ? 1500 : 2500;
      setEstimatedPrice(basePrice);
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* BACKGROUND IMAGE AVEC OVERLAY SOMBRE                         */}
      {/* ============================================================ */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-500 scale-105"
        style={{
          // Remplace par le lien de ton image finale ou locale (ex: /images/dakar-bg.jpg)
          backgroundImage: `url('public/dakar-bg1.png')`,
        }}
      >
        {/* Calque de dégradé sombre pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      {/* ============================================================ */}
      {/* HEADER / NAVIGATION                                          */}
      {/* ============================================================ */}
      <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl px-6 py-4 shadow-xl">
          
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest text-yellow-400">
              🚌 NIU DEIM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-zinc-300">
            <Link href="/" className="text-yellow-400">ACCUEIL</Link>
            <Link href="#vtc" className="hover:text-yellow-400 transition-colors">COURSES VTC</Link>
            <Link href="#livraison" className="hover:text-yellow-400 transition-colors">LIVRAISON</Link>
            <Link href="#tarifs" className="hover:text-yellow-400 transition-colors">TARIFS</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white px-3 py-2 transition-colors"
            >
              CONNEXION
            </Link>
            <Link
              href="/auth/register"
              className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              S'INSCRIRE
            </Link>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Formulaire de réservation flottant (Gauche) */}
        <div className="lg:col-span-6 bg-zinc-900/85 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
          
          <div className="flex items-center justify-between mb-6">
            <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 text-xs font-bold px-3 py-1 rounded-full">
              🇸🇳 Dakar & Régions
            </span>
            <span className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Chauffeurs disponibles
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Déplacez-vous à Dakar <br />
            <span className="text-yellow-400">en toute sérénité</span>
          </h1>
          <p className="text-zinc-400 text-sm mb-6">
            Commandez votre course VTC ou planifiez une livraison instantanée au meilleur prix.
          </p>

          {/* Choix du service */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-950/80 rounded-xl border border-zinc-800 mb-6">
            <button
              onClick={() => setVehicleType("standard")}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                vehicleType === "standard"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🚗 VTC Standard
            </button>
            <button
              onClick={() => setVehicleType("comfort")}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                vehicleType === "comfort"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🚘 Confort
            </button>
            <button
              onClick={() => setVehicleType("delivery")}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                vehicleType === "delivery"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              📦 Livraison
            </button>
          </div>

          {/* Formulaire */}
          <form onSubmit={calculateEstimate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">
                Lieu de départ
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-yellow-400">📍</span>
                <input
                  type="text"
                  placeholder="Ex: Nord Foire, Mermoz, Plateau..."
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">
                Destination
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-red-500">🏁</span>
                <input
                  type="text"
                  placeholder="Ex: Aéroport AIBD, Almadies..."
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Affichage de l'estimation */}
            {estimatedPrice !== null && (
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-400 block">Prix estimé de la course</span>
                  <span className="text-2xl font-black text-yellow-400">{estimatedPrice} FCFA</span>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-semibold">
                  Tarif Fixe
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-yellow-400 font-semibold py-3.5 px-4 rounded-xl border border-yellow-400/30 transition-all text-sm"
              >
                Calculer le tarif
              </button>
              
              <button
                type="button"
                onClick={() => router.push("/auth/login")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all text-sm"
              >
                RÉSERVER MAINTENANT
              </button>
            </div>
          </form>

          {/* Badges de paiements */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
            <span>Paiement sécurisé :</span>
            <div className="flex gap-2 font-bold text-zinc-400">
              <span className="bg-zinc-950 px-2 py-1 rounded border border-zinc-800 text-blue-400">Wave</span>
              <span className="bg-zinc-950 px-2 py-1 rounded border border-zinc-800 text-orange-400">Orange Money</span>
              <span className="bg-zinc-950 px-2 py-1 rounded border border-zinc-800 text-emerald-400">Espèces</span>
            </div>
          </div>
        </div>

        {/* Textes de mise en valeur (Droite) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>⚡</span> Trajets rapides & chauffeurs pros
            </h3>
            <p className="text-zinc-400 text-sm">
              Tous nos chauffeurs sont rigoureusement contrôlés pour vous offrir une expérience sécurisée, climatisée et ponctuelle sur Dakar et ses environs.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 p-6 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>📦</span> Service de Livraison Express
            </h3>
            <p className="text-zinc-400 text-sm">
              Envoyez vos colis et plis importants en temps réel avec un suivi GPS en direct jusqu'à destination.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}