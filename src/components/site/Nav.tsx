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
        <Link to="/" className="font-serif text-lg sm:text-xl text-forest tracking-tight pl-2">
          ZYGC Export PLC
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm text-ink/80">
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a href="/#categories" className={`${linkCls} flex items-center gap-1`}>
              Products <ChevronDown className="w-3.5 h-3.5" />
            </a>
            {productsOpen && (
              <div className="absolute top-full left-0 pt-2 animate-fade-in">
                <div className="min-w-[200px] rounded-2xl bg-cream/90 backdrop-blur-xl border border-white/40 shadow-xl p-2">
                  <a href="/#categories" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Livestock</a>
                  <a href="/#categories" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Oil Seeds</a>
                  <a href="/#categories" className="block px-3 py-2 rounded-lg text-sm hover:bg-forest/5 hover:text-forest">Pulses</a>
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
            <li><a onClick={() => setOpen(false)} href="/#categories" className="block px-3 py-3 rounded-xl hover:bg-forest/5">Products</a></li>
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
