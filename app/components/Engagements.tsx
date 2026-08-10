import { ShieldCheck, CheckCircle, Clock, CreditCard } from "lucide-react";

const engagements = [
  {
    icon: CheckCircle,
    title: "Prix Fixe & Transparent",
    description: "Pas de mauvaise surprise à l’arrivée, le montant est défini dès la réservation.",
  },
  {
    icon: ShieldCheck,
    title: "Chauffeurs Certifiés & Professionnels",
    description: "Service courtois, ponctuel et adapté à vos besoins business ou privés.",
  },
  {
    icon: Clock,
    title: "Suivi en Temps Réel",
    description: "Votre chauffeur est localisé et vous recevez le détail du trajet en direct.",
  },
  {
    icon: CreditCard,
    title: "Paiement Flexible",
    description: "Cash, Mobile Money, Wave ou Orange Money selon votre préférence.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="grid gap-8">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Pourquoi nous choisir</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Nos engagements pour un VTC d’exception</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
          Dakar Mobility allie confort, sécurité et simplicité pour tous vos trajets urbains, professionnels et touristiques au Sénégal.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {engagements.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-amber-400/20">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
