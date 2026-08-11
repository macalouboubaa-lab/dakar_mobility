import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aïssatou D.",
    city: "Dakar",
    comment: "Service impeccable, chauffeur ponctuel et voiture très propre. Je recommande NIU DEIM pour tous mes transferts.",
  },
  {
    name: "Mamadou S.",
    city: "Saly",
    comment: "Transfert vers l'aéroport parfait, accueil très professionnel et tarif clair dès la réservation.",
  },
  {
    name: "Marie L.",
    city: "Mbour",
    comment: "Je voyage souvent pour le travail, et leur service daily est fiable et confortable.",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="grid gap-8">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Avis clients</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Une expérience validée par Dakar et ses voyageurs</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-900/70 px-4 py-3 text-slate-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-amber-400/15 text-amber-300">⭐</span>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Note globale</p>
                <p className="text-3xl font-semibold text-white">4.9 / 5</p>
              </div>
            </div>
            <p className="text-base leading-7 text-slate-300">
              Plus de 1 200 clients satisfaits, des trajets réguliers à travers Dakar et la Petite Côte, avec un service qui combine confort haut de gamme et simplicité d’utilisation.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Accueil VIP</p>
                <p className="mt-3 text-lg font-semibold text-white">AIBD & hôtels</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Confiance</p>
                <p className="mt-3 text-lg font-semibold text-white">4.9 / 5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.city}</p>
                </div>
                <div className="inline-flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-300">“{item.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
