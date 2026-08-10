import { Briefcase, Globe, Plane, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Transfert Aéroport AIBD",
    description: "Accueil personnalisé, assistance bagages et trajet direct vers Dakar ou la Petite Côte.",
    icon: Plane,
  },
  {
    title: "Déplacements Professionnels",
    description: "Mobilité entreprise avec facturation dédiée, chauffeurs ponctuels et véhicule de standing.",
    icon: Briefcase,
  },
  {
    title: "Trajets Longue Distance & Régions",
    description: "Saly, Mbour, Saint-Louis et au-delà avec confort, organisation et transparence.",
    icon: Globe,
  },
  {
    title: "Mise à disposition à la journée",
    description: "Réservez votre chauffeur pour une journée complète, déplacements flexibles et service premium.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="grid gap-8">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Services dédiés</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Des services sur mesure pour chaque besoin</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
          Que vous voyagiez seul, en groupe, pour affaires ou en famille, Dakar Mobility adapte votre trajet à vos exigences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-amber-400/20">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
