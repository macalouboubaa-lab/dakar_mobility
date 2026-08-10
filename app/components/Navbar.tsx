import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

const navLinks = [
  { href: "#reservation", label: "Réservation" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Flotte" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#avis", label: "Avis" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold uppercase tracking-[0.18em] text-white transition hover:text-amber-300">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
            <MapPin className="h-5 w-5" />
          </span>
          Dakar Mobility
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/auth/login"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300"
          >
            Espace Client
          </Link>
          <Link
            href="/driver"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
          >
            Devenir Chauffeur
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
