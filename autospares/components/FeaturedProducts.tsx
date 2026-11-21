import Link from "next/link";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  { id: "1", meta: "Audi · A3 · 2013", title: "Audi A3 / S3 LHS Headlight (sample)", alt: "Headlight" },
  { id: "2", meta: "Audi · A3 · 2013", title: "Audi A3 / S3 LHS Headlight (sample)", alt: "Headlight" },
  { id: "3", meta: "Nissan · Almera", title: "Nissan Almera LHS Headlight (sample)", alt: "Headlight" },
  { id: "4", meta: "Toyota · Hilux", title: "Toyota Hilux LHS Taillight (sample)", alt: "Taillight" },
  { id: "5", meta: "Toyota · Hilux", title: "Toyota Hilux RHS Taillight (sample)", alt: "Taillight" },
  { id: "6", meta: "VW · Polo", title: "VW Polo Front Bumper (sample)", alt: "Front Bumper" },
  { id: "7", meta: "VW · Golf", title: "VW Golf Front Grill (sample)", alt: "Grill" },
  { id: "8", meta: "Ford · Ranger", title: "Ford Ranger Radiator (sample)", alt: "Radiator" },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <h2 className="text-lg font-extrabold text-[var(--navy,#1b2255)]">Featured</h2>
      <div className="mt-1 h-0.5 w-10 bg-[var(--accent,#b5484a)]" />
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href="/catalog" className="rounded bg-[var(--accent,#b5484a)] px-4 py-2 text-xs font-bold text-white hover:opacity-90">
          View full catalog
        </Link>
        <Link href="/select-vehicle" className="rounded border border-[var(--navy,#1b2255)] px-4 py-2 text-xs font-bold text-[var(--navy,#1b2255)] hover:bg-slate-100">
          Select your vehicle
        </Link>
      </div>
    </section>
  );
}