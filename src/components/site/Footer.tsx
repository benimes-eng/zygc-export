import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl mb-3">ZYGC Global Trade</div>
          <p className="text-cream/70 text-sm leading-relaxed">
            A multi-sector Ethiopian enterprise in construction, agricultural exports,
            industrial machinery imports and pharmaceutical supply. Established November 23, 2017.
          </p>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Exports</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><Link to="/livestock-export" className="hover:text-gold">Livestock Export</Link></li>
            <li><Link to="/oil-seeds-export" className="hover:text-gold">Oil Seeds Export</Link></li>
            <li><Link to="/pulses-export" className="hover:text-gold">Pulses Export</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Imports & Company</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li><Link to="/machinery-imports" className="hover:text-gold">Machinery Imports</Link></li>
            <li><Link to="/pharmaceutical-imports" className="hover:text-gold">Pharmaceutical Imports</Link></li>
            <li><a href="/#quality" className="hover:text-gold">Quality & Compliance</a></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li>Bole, Addis Ababa, Ethiopia</li>
            <li><a href="tel:+251911247873" className="hover:text-gold">+251 911 247 873</a></li>
            <li><a href="mailto:Kzeluel@gmail.com" className="hover:text-gold">Kzeluel@gmail.com</a></li>
            <li><a href="https://wa.me/251911247873" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp: +251 911 247 873</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-cream/50 text-xs">
          © {new Date().getFullYear()} ZYGC Global Trade. Construction, global trade and medical supply.
        </div>
      </div>
    </footer>
  );
}
