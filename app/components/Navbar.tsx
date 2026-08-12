import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/search", label: "Rechercher" },
  { href: "/results", label: "Résultats" },
  { href: "/profile", label: "Profil" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-green-400">
          <Image src="/logo.png" alt="Niu Deim logo" width={36} height={36} />
          <span>NIU DEIM</span>
        </Link>

        <nav className="flex items-center gap-3 text-sm text-gray-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-gray-700 px-3 py-2 transition hover:border-green-500 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="rounded-full bg-green-500 px-3 py-2 font-semibold text-black transition hover:bg-green-400"
          >
            Connexion
          </Link>
        </nav>
      </div>
    </header>
  );
}