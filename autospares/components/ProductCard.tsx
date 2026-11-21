import Image from "next/image";

export type Product = {
  id: string;
  title: string;
  meta: string;
  image?: string;
  alt?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-slate-200 bg-white">
      <div className="relative aspect-[4/3] bg-slate-100">
        {product.image ? (
          <Image src={product.image} alt={product.alt ?? product.title} fill className="object-contain p-2" />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-[10px] text-slate-400">
            {product.alt ?? "No image"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <p className="text-[9px] uppercase tracking-wide text-slate-400">{product.meta}</p>
        <h3 className="text-xs font-bold text-[var(--navy,#1b2255)]">{product.title}</h3>
        <p className="text-[11px] text-slate-500">Contact for more info</p>
        <button
          type="button"
          className="mt-auto rounded bg-[var(--accent,#b5484a)] py-1.5 text-xs font-bold text-white hover:opacity-90"
        >
          Enquire
        </button>
      </div>
    </article>
  );
}