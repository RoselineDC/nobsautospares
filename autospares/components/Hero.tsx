const selectCls =
  "h-10 rounded border border-slate-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent,#b5484a)]";

export default function Hero() {
  return (
    <section className="bg-[var(--navy,#1b2255)] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Auto spares.{" "}
          <span className="text-[var(--pink,#f4a6a0)]">No nonsense.</span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/80">
          Body parts, lights, suspension, brakes and engine components for most
          makes. Tell us what you need and we will quote you.
        </p>

        <form action="/catalog" method="get" className="mt-6 flex flex-wrap gap-2">
          <select name="make" defaultValue="" className={selectCls}>
            <option value="">Any make</option>
          </select>
          <select name="part" defaultValue="" className={selectCls}>
            <option value="">Any part</option>
          </select>
          <input
            name="q"
            placeholder="Brand, e.g. Polo"
            className={`${selectCls} min-w-[160px] flex-1 sm:max-w-xs`}
          />
          <button
            type="submit"
            className="h-10 rounded bg-[var(--accent,#b5484a)] px-5 text-sm font-bold hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}