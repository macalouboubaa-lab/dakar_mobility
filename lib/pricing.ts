export interface TransportSegment {
  transport: string;
  from: string;
  to: string;
  price_fcfa: number;
  duration_min: number;
}

export const TRANSPORT_BASE_PRICES: Record<string, number> = {
  CAR_RAPIDE: 200,
  NDIAGA_NDIAYE: 250,
  BRT: 300,
  TER: 500,
  DDD: 200,
  TAXI_BOKO: 500,
  CLANDO: 800,
  TATA: 200,
  CARS_BV: 250,
  VTC: 1000,
};

export function calculateTotalPrice(segments: TransportSegment[]): number {
  return segments.reduce((total, seg) => total + seg.price_fcfa, 0);
}

export function calculateTotalDuration(segments: TransportSegment[]): number {
  return segments.reduce((total, seg) => total + seg.duration_min, 0);
}

export function formatFCFA(amount: number): string {
  return new Intl.NumberFormat("fr-SN", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
  }).format(amount);
}

export const SUBSCRIPTION_PLANS = [
  {
    id: "daily",
    name: "Forfait Journée",
    price_fcfa: 1500,
    description: "Trajets illimités pendant 24h",
    icon: "☀️",
  },
  {
    id: "weekly",
    name: "Forfait Semaine",
    price_fcfa: 7500,
    description: "Trajets illimités pendant 7 jours",
    icon: "📅",
  },
  {
    id: "monthly",
    name: "Forfait Mensuel",
    price_fcfa: 25000,
    description: "Trajets illimités pendant 30 jours",
    icon: "🗓️",
  },
];
