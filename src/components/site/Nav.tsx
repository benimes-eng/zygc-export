import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = "px-4 py-2 rounded-full hover:text-forest transition-colors";

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-1rem))]">
      <nav
        className={`flex items-center justify-between pl-4 pr-2 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-cream/60 border-white/40 shadow-[0_10px_40px_-12px_rgba(15,61,46,0.35)]"
            : "bg-cream/40 border-white/30 shadow-[0_8px_30px_-16px_rgba(15,61,46,0.25)]"
        } backdrop-blur-xl backdrop-saturate-150`}
      >
        <Link to="/" className="font-serif text-base sm:text-xl text-forest tracking-tight pl-2">
          ZYGC Global Trade
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm text-ink/80">
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={`${linkCls} flex items-center gap-1`}>
              Divisions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 pt-2 animate-fade-in">
                <div className="min-w-[260px] rounded-2xl bg-cream/90 backdrop-blur-xl border border-white/40 shadow-xl p-2">
                  <Link to="/livestock-export" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Livestock Export</Link>
                  <Link to="/oil-seeds-export" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Oil Seeds Export</Link>
                  <Link to="/pulses-export" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Pulses Export</Link>
                  <Link to="/machinery-imports" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Machinery Imports</Link>
                  <Link to="/pharmaceutical-imports" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Pharmaceutical Imports</Link>
                </div>
              </div>
            )}
          </li>
          <li><a href="/#process" className={linkCls}>Process</a></li>
          <li><a href="/#quality" className={linkCls}>Quality</a></li>
          <li><Link to="/gallery" className={linkCls}>Gallery</Link></li>
          <li><Link to="/contact" className={linkCls}>Contact</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-forest text-sm">Get a Quote</Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-forest text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-3xl bg-cream/90 backdrop-blur-xl border border-white/40 shadow-xl p-4 animate-fade-in">
          <ul className="flex flex-col text-ink">
            <li className="px-3 py-2 text-xs uppercase tracking-[0.18em] text-gold">Divisions</li>
            <li><Link onClick={() => setOpen(false)} to="/livestock-export" className="block px-3 py-2 rounded-xl hover:bg-forest/5">Livestock Export</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/oil-seeds-export" className="block px-3 py-2 rounded-xl hover:bg-forest/5">Oil Seeds Export</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/pulses-export" className="block px-3 py-2 rounded-xl hover:bg-forest/5">Pulses Export</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/machinery-imports" className="block px-3 py-2 rounded-xl hover:bg-forest/5">Machinery Imports</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/pharmaceutical-imports" className="block px-3 py-2 rounded-xl hover:bg-forest/5">Pharmaceutical Imports</Link></li>
            <li className="border-t border-hairline my-2" />
            <li><a onClick={() => setOpen(false)} href="/#process" className="block px-3 py-3 rounded-xl hover:bg-forest/5">Process</a></li>
            <li><a onClick={() => setOpen(false)} href="/#quality" className="block px-3 py-3 rounded-xl hover:bg-forest/5">Quality</a></li>
            <li><Link onClick={() => setOpen(false)} to="/gallery" className="block px-3 py-3 rounded-xl hover:bg-forest/5">Gallery</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact" className="block px-3 py-3 rounded-xl hover:bg-forest/5">Contact</Link></li>
          </ul>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-forest w-full justify-center mt-3">Get a Quote</Link>
        </div>
      )}
    </div>
  );
}
