export type RideType = "standard" | "premium" | "multimodal";
export type TransportMode = "car_rapide" | "brt" | "taxi_boko" | "vtc";
export type TransportSegment = {
  transport: string;
  from: string;
  to: string;
  price_fcfa: number;
  duration_min: number;
};

const MULTIMODAL_TARIFFS: Record<TransportMode, { base: number; perKm: number; min: number }> = {
  car_rapide: { base: 400, perKm: 250, min: 700 },
  brt: { base: 300, perKm: 200, min: 600 },
  taxi_boko: { base: 350, perKm: 220, min: 650 },
  vtc: { base: 800, perKm: 500, min: 1400 },
};

export function calculatePrice(distanceKm: number, rideType: RideType = "standard", mode: TransportMode = "car_rapide"): number {
  if (rideType === "premium") {
    const base = 900;
    const perKm = 450;
    const min = 1400;
    const total = base + distanceKm * perKm;
    return Math.max(Math.round(total / 50) * 50, min);
  }

  if (rideType === "multimodal") {
    const tariff = MULTIMODAL_TARIFFS[mode];
    const total = tariff.base + distanceKm * tariff.perKm;
    return Math.max(Math.round(total / 50) * 50, tariff.min);
  }

  const base = 500;
  const perKm = 350;
  const min = 1000;
  const total = base + distanceKm * perKm;
  return Math.max(Math.round(total / 50) * 50, min);
}

export function calculateMultiModalPrice(distanceKm: number, mode: TransportMode = "car_rapide"): number {
  return calculatePrice(distanceKm, "multimodal", mode);
}

export function formatFCFA(amount: number): string {
  return new Intl.NumberFormat("fr-SN", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
  }).format(amount);
}
