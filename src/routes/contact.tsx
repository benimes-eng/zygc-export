import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";
import { MessageCircle, FileText, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ZYGC Global Trade" },
      { name: "description", content: "Start an export inquiry for Ethiopian livestock, oil seeds and pulses. Our export team will follow up with next steps." },
      { property: "og:title", content: "Contact — ZYGC Global Trade" },
      { property: "og:description", content: "Start an export inquiry for Ethiopian livestock, oil seeds and pulses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <section className="pt-36 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="eyebrow mb-4">Contact</div>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-ink">
          Start an export inquiry with ZYGC Global Trade.
        </h1>
        <p className="mt-6 text-muted-ink max-w-2xl mx-auto">
          Tell us what you need to source, your destination market, expected volume and required documentation.
          Our export team will follow up with next steps.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        <form className="card-soft p-8 space-y-5">
          <h2 className="font-serif text-2xl text-forest">Export Inquiry</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Full name" />
            <Input label="Company" />
            <Input label="Email" type="email" />
            <Input label="Country" />
          </div>
          <div>
            <label className="text-xs text-muted-ink uppercase tracking-wider">Product Category</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Livestock", "Oil Seeds", "Pulses"].map((p) => (
                <label key={p} className="inline-flex items-center gap-2 border border-hairline rounded-full px-4 py-2 text-sm cursor-pointer hover:border-forest">
                  <input type="checkbox" className="accent-forest" /> {p}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-ink uppercase tracking-wider">Message</label>
            <textarea rows={5} className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-sm focus:outline-none focus:border-forest" />
          </div>
          <button type="button" className="btn-forest w-full justify-center">Send Inquiry <Send className="w-4 h-4" /></button>
        </form>

        <div className="space-y-6">
          <div className="card-soft p-8">
            <h3 className="font-serif text-2xl text-forest">Company Details</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-ink">
              <li><span className="text-forest font-medium">Addis Ababa,</span> Ethiopia</li>
              <li>export@zygc.example</li>
              <li>WhatsApp: available on request</li>
              <li>Products: Livestock, Oil Seeds, Pulses</li>
              <li>Markets: Europe, Middle East, Asia, North America and Africa</li>
            </ul>
          </div>
          <div className="rounded-2xl h-64 bg-forest-deep text-cream/60 flex items-center justify-center border border-hairline">
            Interactive office map
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-5">
        {[
          { i: Send, t: "Contact Sales", d: "Send a product inquiry for livestock, oil seeds or pulses." },
          { i: MessageCircle, t: "WhatsApp", d: "Use WhatsApp for fast export team coordination and follow-up." },
          { i: FileText, t: "Documentation", d: "Ask about certificates, inspection support and shipment paperwork." },
        ].map((c) => {
          const Icon = c.i;
          return (
            <div key={c.t} className="card-soft p-8">
              <div className="w-11 h-11 rounded-xl bg-cream border border-hairline flex items-center justify-center">
                <Icon className="w-5 h-5 text-forest" />
              </div>
              <h3 className="mt-6 font-semibold text-forest">{c.t}</h3>
              <p className="mt-2 text-muted-ink text-sm">{c.d}</p>
            </div>
          );
        })}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-28">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">Frequently asked export questions</h2>
        <div className="space-y-3">
          {[
            "What should I include in an export inquiry?",
            "Do you supply documentation for export?",
            "Can I request multiple product categories together?",
          ].map((q) => (
            <details key={q} className="card-soft p-6 group">
              <summary className="cursor-pointer font-medium text-forest flex justify-between items-center">
                {q}
                <span className="text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-ink text-sm leading-relaxed">
                Include product category, destination market, expected volume, packaging preferences and
                the documentation required at arrival. Our team will follow up with next steps.
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsApp />
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-ink uppercase tracking-wider">{label}</label>
      <input type={type} className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-sm focus:outline-none focus:border-forest" />
    </div>
  );
}
