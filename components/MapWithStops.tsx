"use client";

import { useMemo } from "react";

type Stop = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zone?: string | null;
};

type MapWithStopsProps = {
  stops: Stop[];
  center: [number, number];
};

export default function MapWithStops({ stops, center }: MapWithStopsProps) {
  const mapStyle = useMemo(
    () => ({
      backgroundImage:
        "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
    }),
    []
  );

  return (
    <div className="relative h-[420px] w-full" style={mapStyle}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_35%)]" />
      <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-2 text-sm text-slate-200">
        Dakar • {stops.length} arrêts
      </div>
      <div className="absolute bottom-4 right-4 rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-300">
        Centre : {center[0].toFixed(4)}, {center[1].toFixed(4)}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid w-full max-w-xl grid-cols-2 gap-3 p-4">
          {stops.slice(0, 6).map((stop) => (
            <div key={stop.id} className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-200">
              <p className="font-semibold text-white">{stop.name}</p>
              <p className="text-slate-400">{stop.zone ?? "Arrêt majeur"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
