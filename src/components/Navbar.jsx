function WaveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M2 14c2.2 0 2.8-4 5-4s2.8 4 5 4 2.8-4 5-4 2.8 4 5 4" />
      <path d="M2 18c2.2 0 2.8-4 5-4s2.8 4 5 4 2.8-4 5-4 2.8 4 5 4" />
    </svg>
  )
}

function Navbar({ isOpen, navItems, onToggle, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex min-h-[68px] w-[min(1120px,calc(100%-2.5rem))] items-center justify-between">
        <button
          className="inline-flex items-center gap-2 text-slate-900"
          onClick={() => onNavigate('hero')}
          aria-label="Go to top"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-white shadow-sm">
            <WaveIcon className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold">DeepBlue</span>
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-sm text-slate-600 transition hover:text-cyan-600"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
            onClick={() => onNavigate('newsletter')}
          >
            Subscribe
          </button>
        </div>

        <button
          className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden"
          onClick={onToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`absolute left-[0.55rem] h-0.5 w-[0.85rem] bg-slate-900 transition-all ${isOpen ? 'top-[0.94rem] rotate-45' : 'top-[0.62rem]'}`} />
          <span className={`absolute left-[0.55rem] h-0.5 w-[0.85rem] bg-slate-900 transition-all ${isOpen ? 'opacity-0' : 'top-[0.94rem]'}`} />
          <span className={`absolute left-[0.55rem] h-0.5 w-[0.85rem] bg-slate-900 transition-all ${isOpen ? 'top-[0.94rem] -rotate-45' : 'top-[1.26rem]'}`} />
        </button>
      </nav>

      <div className={`${isOpen ? 'grid' : 'hidden'} mx-auto mb-3 w-[min(1120px,calc(100%-2.5rem))] gap-2 md:hidden`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-600"
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-600"
          onClick={() => onNavigate('newsletter')}
        >
          Subscribe
        </button>
      </div>
    </header>
  )
}

Navbar.WaveIcon = WaveIcon

export default Navbar
