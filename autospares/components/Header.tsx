import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/select-vehicle", label: "Select Vehicle" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-12 place-items-center rounded bg-[var(--navy,#1b2255)] text-[10px] font-bold text-white">
            NOBS
          </span>
          <span className="text-sm font-extrabold leading-tight text-[var(--navy,#1b2255)]">
            NOBS
            <span className="block text-[9px] font-medium uppercase tracking-wide text-slate-500">
              Auto Spares
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-semibold text-[var(--navy,#1b2255)] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--accent,#b5484a)]">
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/27000000000"
          className="rounded bg-[var(--accent,#b5484a)] px-3 py-2 text-xs font-bold text-white hover:opacity-90"
        >
          WhatsApp us
        </a>
      </div>
    </header>
  );
}