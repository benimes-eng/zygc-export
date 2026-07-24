export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl mb-3">ZYGC Export PLC</div>
          <p className="text-cream/70 text-sm leading-relaxed">
            Ethiopia's trusted global agricultural export partner.
          </p>
        </div>
        <FooterCol title="Products" items={["Livestock Export", "Oil Seeds Export", "Pulses Export"]} />
        <FooterCol title="Company" items={["Quality Assurance", "Export Process", "Sustainability"]} />
        <div>
          <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-cream/80 text-sm">
            <li>Addis Ababa, Ethiopia</li>
            <li>export@zygc.example</li>
            <li>WhatsApp available</li>
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

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-4">{title}</div>
      <ul className="space-y-2 text-cream/80 text-sm">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-gold">{i}</a></li>)}
      </ul>
    </div>
  );
}
