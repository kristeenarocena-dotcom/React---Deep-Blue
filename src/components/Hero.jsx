function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section id="hero" className="bg-[#0d1b2e] px-4 py-28 text-center">
      <div className="mx-auto w-full max-w-2xl">
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-transparent px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-300">
          Ocean Conservation Blog
        </span>

        <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
          Discover the Secrets of the{" "}
          <span className="text-cyan-400">Deep</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
          Exploring the mysteries of marine life, from the coral reefs to the
          abyssal plains. Join us in protecting our blue planet.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            onClick={onPrimaryClick}
          >
            Start Reading →
          </button>
          <button
            className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={onSecondaryClick}
          >
            Latest Issue
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
