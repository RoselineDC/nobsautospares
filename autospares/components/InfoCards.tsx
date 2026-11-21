const items = [
  { title: "Nationwide delivery", text: "We deliver anywhere in South Africa." },
  { title: "Quote on request", text: "Contact us for the best prices on any part." },
  { title: "Fast answers", text: "WhatsApp us or email and we respond quickly." },
];

export default function InfoCards() {
  return (
    <section className="relative z-10 -mt-8 px-4">
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-bold text-[var(--navy,#1b2255)]">{i.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}