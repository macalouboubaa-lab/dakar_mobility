import Link from "next/link";

export default function DriverLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300">Espace Chauffeur</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Rejoignez la flotte NIU DEIM
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Gagnez avec des missions régulières, un support dédié et un réseau de clients premium à Dakar et ses alentours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/register" className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Créer mon compte chauffeur
            </Link>
            <Link href="/driver/home" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300">
              Voir mon tableau de bord
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
