import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export function Nav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]">
      <nav className="pill-nav flex items-center justify-between pl-6 pr-2 py-2">
        <Link to="/" className="font-serif text-xl text-forest tracking-tight">
          ZYGC Export PLC
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm text-ink/80">
          <li className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 rounded-full hover:text-forest">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </li>
          <li><a href="/#process" className="px-4 py-2 rounded-full hover:text-forest">Process</a></li>
          <li><a href="/#quality" className="px-4 py-2 rounded-full hover:text-forest">Quality</a></li>
          <li><Link to="/gallery" className="px-4 py-2 rounded-full hover:text-forest">Gallery</Link></li>
          <li><Link to="/contact" className="px-4 py-2 rounded-full hover:text-forest">Contact</Link></li>
        </ul>
        <Link to="/contact" className="btn-forest text-sm">Get a Quote</Link>
      </nav>
    </div>
  );
}
