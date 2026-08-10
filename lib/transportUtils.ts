import type { TransportSegment } from "./pricing";

export const TRANSPORT_OPTIONS = [
  { code: "CAR_RAPIDE", name: "Car Rapide", icon: "🚌" },
  { code: "NDIAGA_NDIAYE", name: "Ndiaga Ndiaye", icon: "🚐" },
  { code: "BRT", name: "BRT", icon: "🚎" },
  { code: "TER", name: "TER", icon: "🚆" },
  { code: "DDD", name: "Dakar Dem Dikk", icon: "🚍" },
  { code: "TAXI_BOKO", name: "Taxi Collectif", icon: "🚕" },
  { code: "CLANDO", name: "Clando", icon: "🚗" },
  { code: "TATA", name: "Tata Bus", icon: "🚌" },
  { code: "CARS_BV", name: "Cars Blancs-Verts", icon: "🚐" },
  { code: "VTC", name: "VTC Privé", icon: "🚙" },
];

export function generateMockItineraries(origin: string, destination: string) {
  return [
    {
      id: "1",
      label: "Recommandé",
      total_duration_min: 35,
      total_price_fcfa: 850,
      nb_correspondances: 1,
      segments: [
        { transport: "BRT", from: origin, to: "Liberté 6", price_fcfa: 500, duration_min: 20 },
        { transport: "Car Rapide", from: "Liberté 6", to: destination, price_fcfa: 350, duration_min: 15 },
      ],
    },
    {
      id: "2",
      label: "Le plus rapide",
      total_duration_min: 25,
      total_price_fcfa: 1500,
      nb_correspondances: 0,
      segments: [
        { transport: "VTC", from: origin, to: destination, price_fcfa: 1500, duration_min: 25 },
      ],
    },
    {
      id: "3",
      label: "Le moins cher",
      total_duration_min: 55,
      total_price_fcfa: 650,
      nb_correspondances: 2,
      segments: [
        { transport: "Car Rapide", from: origin, to: "Petersen", price_fcfa: 250, duration_min: 25 },
        { transport: "Dakar Dem Dikk", from: "Petersen", to: "Gare Routière", price_fcfa: 150, duration_min: 20 },
        { transport: "Car Rapide", from: "Gare Routière", to: destination, price_fcfa: 250, duration_min: 10 },
      ],
    },
  ] as Array<{
    id: string;
    label: string;
    total_duration_min: number;
    total_price_fcfa: number;
    nb_correspondances: number;
    segments: TransportSegment[];
  }>;
}

export function getTransportIcon(code: string): string {
  const option = TRANSPORT_OPTIONS.find((item) => item.code === code);
  return option?.icon ?? "🚌";
}
