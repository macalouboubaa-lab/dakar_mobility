"use client";

import { useState } from "react";
import { Calendar, CheckCircle, ChevronRight, Clock, MapPin, Navigation2, Car } from "lucide-react";

const vehicleOptions = [
  { id: "eco", label: "Berline Eco" },
  { id: "business", label: "Business Class" },
  { id: "suv", label: "SUV / Van" },
];

const tabs = ["Trajet Simple", "Mise à disposition"];

export default function ReservationWidget() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [vehicle, setVehicle] = useState(vehicleOptions[0].id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-amber-400/15 bg-white/5 p-3 text-sm text-slate-200">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 transition ${
                activeTab === tab
                  ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 text-slate-300">
          <CheckCircle className="h-4 w-4 text-amber-400" />
          Instantané & sécurisé
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="group block rounded-3xl border border-white/10 bg-slate-950/80 p-4 transition hover:border-amber-400/30">
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-amber-300" />
            Lieu de départ
          </span>
          <input
            type="text"
            placeholder="Ex: Aéroport Blaise Diagne"
            className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </label>

        <label className="group block rounded-3xl border border-white/10 bg-slate-950/80 p-4 transition hover:border-amber-400/30">
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <Navigation2 className="h-4 w-4 text-amber-300" />
            Destination
          </span>
          <input
            type="text"
            placeholder="Ex: Plateau / Almadies"
            className="mt-3 w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <label className="group block rounded-3xl border border-white/10 bg-slate-950/80 p-4 transition hover:border-amber-400/30">
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="h-4 w-4 text-amber-300" />
            Date
          </span>
          <input type="date" className="mt-3 w-full bg-transparent text-white outline-none" />
        </label>

        <label className="group block rounded-3xl border border-white/10 bg-slate-950/80 p-4 transition hover:border-amber-400/30">
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <Clock className="h-4 w-4 text-amber-300" />
            Heure
          </span>
          <input type="time" className="mt-3 w-full bg-transparent text-white outline-none" />
        </label>

        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 transition hover:border-amber-400/30">
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <Car className="h-4 w-4 text-amber-300" />
            Véhicule
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {vehicleOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setVehicle(option.id)}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  vehicle === option.id
                    ? "bg-amber-400 text-slate-950"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-black/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Estimation rapide</p>
            <p className="text-2xl font-semibold text-white">18 500 CFA</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Estimer & Réserver mon Trajet
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-3 text-sm text-slate-500">Choisissez votre véhicule, entrez votre destination et réservez en toute sérénité.</p>
      </div>
    </div>
  );
}
