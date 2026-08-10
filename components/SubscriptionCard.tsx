"use client";

type SubscriptionPlan = {
  id: string;
  name: string;
  price_fcfa: number;
  description: string;
  icon: string;
};

type SubscriptionCardProps = {
  plan: SubscriptionPlan;
};

export default function SubscriptionCard({ plan }: SubscriptionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
      <p className="text-3xl">{plan.icon}</p>
      <h3 className="mt-3 text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
      <p className="mt-4 text-2xl font-bold text-emerald-400">{plan.price_fcfa.toLocaleString("fr-SN")} FCFA</p>
    </div>
  );
}
