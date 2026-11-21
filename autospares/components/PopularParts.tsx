import Link from "next/link";

const parts = [
  "Headlight", "Taillight", "Fog Light / Spot Light", "Indicator", "Front Bumper",
  "Rear Bumper", "Grill", "Bonnet", "Fender", "Tailgate / Boot Lid", "Door",
  "Side Mirror", "Mirror Glass", "Radiator",
];

export default function PopularParts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-lg font-extrabold text-[var(--navy,#1b2255)]">Popular parts</h2>
      <div className="mt-1 h-0.5 w-10 bg-[var(--accent,#b5484a)]" />
      <div className="mt-4 flex flex-wrap gap-2">
        {parts.map((p) => (
          <Link
            key={p}
            href={`/catalog?part=${encodeURIComponent(p)}`}
            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 hover:border-[var(--accent,#b5484a)] hover:text-[var(--accent,#b5484a)]"
          >
            {p}
          </Link>
        ))}
      </div>
    </section>
  );
}