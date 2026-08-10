import { Car, Users, Briefcase, ShieldCheck } from "lucide-react";

const fleet = [
  {
    title: "Berline Standard / Éco",
    model: "Hyundai Elantra / Toyota Corolla",
    price: "À partir de 14 000 CFA",
    features: ["4 passagers", "2 bagages", "Climatisation"],
  },
  {
    title: "Berline Business / Luxe",
    model: "Mercedes Classe E / Toyota Camry",
    price: "À partir de 24 000 CFA",
    features: ["4 passagers", "3 bagages", "Wi-Fi à bord"],
  },
  {
    title: "SUV & Van VIP",
    model: "Prado / Hyundai H1",
    price: "À partir de 34 000 CFA",
    features: ["6 à 8 passagers", "6 valises", "Espace groupe"],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="grid gap-10">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Flotte premium</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Un véhicule pour chaque trajet</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
          Choisissez entre confort, luxe ou capacité groupe avec des véhicules contrôlés et préparés pour chaque voyage.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {fleet.map((vehicle) => (
          <article key={vehicle.title} className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30 transition hover:-translate-y-1">
            <div className="relative overflow-hidden bg-slate-900/90 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-300">{vehicle.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{vehicle.model}</h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
                  <Car className="h-6 w-6" />
                </div>
              </div>
              <div className="grid gap-3 rounded-[28px] bg-slate-950/80 p-5">
                {vehicle.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/5 text-amber-300">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    {feature}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-5 bg-slate-950/90 p-6">
              <p className="text-lg font-semibold text-white">{vehicle.price}</p>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                Sélectionner
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
