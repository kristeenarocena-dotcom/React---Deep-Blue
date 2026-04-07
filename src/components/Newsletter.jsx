function Newsletter() {
  return (
    <section id="newsletter" className="bg-gradient-to-br from-[#165f73] to-[#1b6884] px-4 py-14 text-white">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2 className="font-serif text-[2.35rem]">Dive Deeper</h2>
        <p className="mx-auto mt-3 w-full max-w-2xl text-[0.95rem] leading-7 text-white/80">
          Join 15,000+ ocean enthusiasts. Get the latest marine biology discoveries and
          conservation news delivered to your inbox weekly.
        </p>
        <form className="mx-auto mt-6 flex w-full max-w-[520px] flex-col items-center justify-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-4 text-sm text-white outline-none placeholder:text-white/60"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#12445b] transition hover:bg-slate-100"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-white/45">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default Newsletter
