import Navbar from "./Navbar";

function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#050a1f] px-4 pt-9 text-slate-300">
      <div className="mx-auto grid w-full max-w-5xl gap-10 pb-7 md:grid-cols-[1.7fr_1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white shadow-sm">
              <Navbar.WaveIcon className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold text-white">DeepBlue</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Dedicated to exploring and preserving the wonders of our oceans.
            Educate, inspire, protect.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Explore</h3>
          <button
            className="mt-4 block text-sm text-slate-400 transition hover:text-cyan-400"
            onClick={() => onNavigate("marine-life")}
          >
            Marine Life
          </button>
          <button
            className="mt-3 block text-sm text-slate-400 transition hover:text-cyan-400"
            onClick={() => onNavigate("conservation")}
          >
            Conservation
          </button>
          <button
            className="mt-3 block text-sm text-slate-400 transition hover:text-cyan-400"
            onClick={() => onNavigate("expeditions")}
          >
            Expeditions
          </button>
          <button
            className="mt-3 block text-sm text-slate-400 transition hover:text-cyan-400"
            onClick={() => onNavigate("about")}
          >
            About Us
          </button>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Connect</h3>
          <p className="mt-4 text-sm text-slate-400">Contact</p>
          <p className="mt-3 text-sm text-slate-400">Write for Us</p>
          <p className="mt-3 text-sm text-slate-400">Privacy Policy</p>
          <p className="mt-3 text-sm text-slate-400">Terms of Service</p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-3 border-t border-white/10 py-4 text-xs text-slate-500 sm:flex-row">
        <span>&copy; 2026 DeepBlue Blog. All rights reserved.</span>
        <span>Made with heart for the Ocean</span>
      </div>
    </footer>
  );
}

export default Footer;
