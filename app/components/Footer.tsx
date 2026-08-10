import Link from "next/link";
import { Phone, Users, ShieldCheck } from "lucide-react";

const footerLinks = [
  { href: "#reservation", label: "Réservation" },
  { href: "#engagements", label: "Engagements" },
  { href: "#fleet", label: "Flotte" },
  { href: "#services", label: "Services" },
  { href: "#avis", label: "Avis" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-semibold">Dakar Mobility</p>
                <p className="text-sm text-slate-400">VTC & Livraison premium au Sénégal</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Des trajets fiables, une flotte maîtrisée et un service haut de gamme pour les passagers et les professionnels.
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-amber-300" />
                +221 77 000 00 00
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Users className="h-4 w-4 text-amber-300" />
                WhatsApp / Mobile Money disponible
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Liens rapides</p>
              <div className="mt-4 space-y-3 text-sm">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Accès</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href="/auth/login" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-amber-300 hover:text-amber-300">
                  Espace Client
                </Link>
                <Link href="/driver" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-amber-300 hover:text-amber-300">
                  Devenir Chauffeur
                </Link>
              </div>
              <div className="mt-6 space-y-3 rounded-[28px] border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sélecteur de rôle</p>
                <div className="flex flex-wrap gap-3">
                  <button type="button" className="rounded-full bg-amber-400/10 px-4 py-2 text-sm text-amber-200 transition hover:bg-amber-400/15">
                    Client
                  </button>
                  <button type="button" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-300 hover:text-amber-300">
                    Chauffeur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Dakar Mobility. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
