import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy,#1b2255)] text-xs text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h4 className="mb-2 text-sm font-bold text-white">Nobs Auto Spares</h4>
          <p className="max-w-xs">Quality, affordable auto spares. Straight talk, no nonsense.</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-bold text-white">Quick links</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/select-vehicle">Select Vehicle</Link></li>
            <li><Link href="/catalog">Catalog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-bold text-white">Get in touch</h4>
          <p>Your town address, Pretoria</p>
          <p>000 000 0000</p>
          <p>info@nobsautospares.com</p>
          <p className="mt-2">Monday - Friday: 08:00 - 17:00</p>
          <p>Saturday: 08:00 - 13:00</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-[10px] text-white/60">
        © 2026 Nobs Auto Spares · nobsautospares.com
      </div>
    </footer>
  );
}