import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl mb-3">ZYGC Export PLC</div>
          <p className="text-cream/70 text-sm leading-relaxed">
            Ethiopia's trusted global agricultural export partner.
          </p>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Products</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><a href="/#categories" className="hover:text-gold">Livestock Export</a></li>
            <li><a href="/#categories" className="hover:text-gold">Oil Seeds Export</a></li>
            <li><a href="/#categories" className="hover:text-gold">Pulses Export</a></li>
          </ul>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><a href="/#quality" className="hover:text-gold">Quality Assurance</a></li>
            <li><a href="/#process" className="hover:text-gold">Export Process</a></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li>Addis Ababa, Ethiopia</li>
            <li><a href="mailto:export@zygc.example" className="hover:text-gold">export@zygc.example</a></li>
            <li><a href="https://wa.me/251900000000" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp available</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-cream/50 text-xs">
          © {new Date().getFullYear()} ZYGC Export PLC. Built for global agricultural trade.
        </div>
      </div>
    </footer>
  );
}
