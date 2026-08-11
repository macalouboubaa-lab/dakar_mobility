import ReservationWidget from "./ReservationWidget";
import { Car } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/dakar-bg.jpg')] bg-cover bg-center opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-black/10 backdrop-blur-md">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
              VTC & Livraison Dakar
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/90">NIU DEIM</p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Le VTC qui pense comme une app, qui roule comme un service privé.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Réservez votre trajet en quelques clics à Dakar et ses régions. Chauffeurs professionnels, tarifs transparents et confort garantis 24/7.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#reservation"
                className="inline-flex max-w-fit items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Estimer & Réserver mon Trajet
              </a>
              <a
                href="#fleet"
                className="inline-flex max-w-fit items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                Découvrir la flotte
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:max-w-md">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/15 text-amber-300">
                  <Car className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Service premium</p>
                  <p className="text-lg font-semibold text-white">Voitures haut de gamme</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>Prise en charge aéroport, transferts, trajets professionnels et déplacements sur mesure.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Durée moyenne</p>
                    <p className="mt-2 text-lg font-semibold text-white">24/7</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Satisfaction</p>
                    <p className="mt-2 text-lg font-semibold text-white">4.9/5 ⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="reservation" className="relative rounded-[36px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl lg:p-8">
          <ReservationWidget />
        </div>
      </div>
    </section>
  );
}
