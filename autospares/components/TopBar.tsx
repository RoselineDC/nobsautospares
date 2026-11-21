export default function TopBar() {
  return (
    <div className="bg-[var(--navy,#1b2255)] text-[11px] text-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
        <a href="mailto:info@nobsautospares.com" className="hover:text-white">
          info@nobsautospares.com
        </a>
        <span className="hidden sm:inline">Your town address, Pretoria</span>
      </div>
    </div>
  );
}