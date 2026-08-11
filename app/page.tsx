import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Trajets rapides à Dakar et partout au Sénégal",
  "Tarification claire et multi-modale avant chaque course",
  "Chauffeurs, bus, taxis collectifs et VTC disponibles en temps réel",
];

const transportTypes = ["BRT", "Car Rapide", "Taxi Collectif", "VTC Privé", "TER", "Dakar Dem Dikk"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),_transparent_45%)] px-6 py-16 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <Image src="/niu-deim-logo.svg" alt="Niu Deim logo" width={56} height={56} />
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-green-300">Niu Deim</p>
              <p className="text-lg font-semibold text-white/90">Mobilité & transport urbain</p>
            </div>
          </div>
          <p className="mb-4 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-300">
            Nouvelle mobilité locale
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            NIU DEIM relie tous les transports de Dakar dans une seule app.
          </h1>
          <p className="mt-5 text-lg text-gray-300">
            Comparez les itinéraires, réservez rapidement et voyagez avec les meilleurs modes de transport disponibles dans la capitale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/auth/register"
              className="rounded-full bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Créer un compte
            </Link>
            <Link
              href="/auth/login"
              className="rounded-full border border-gray-700 px-5 py-3 font-semibold text-white transition hover:border-green-500"
            >
              Se connecter
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-2xl shadow-black/30">
          <h2 className="text-xl font-semibold text-green-400">Pourquoi NIU DEIM ?</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-green-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
            <p className="text-sm font-semibold text-gray-300">Transports disponibles</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {transportTypes.map((item) => (
                <span key={item} className="rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}