import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Truck, Filter, Scale, BadgeCheck, Package, FileText, Ship, Globe, ShieldCheck, Stethoscope, Leaf, FileCheck2, Search, MapPin } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";

import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about.jpg";
import catLivestock from "@/assets/cat-livestock.jpg";
import catOilseeds from "@/assets/cat-oilseeds.jpg";
import catPulses from "@/assets/cat-pulses.jpg";
import pGoats from "@/assets/p-goats.jpg";
import pSheep from "@/assets/p-sheep.jpg";
import pCattle from "@/assets/p-cattle.jpg";
import pSesame from "@/assets/p-sesame.jpg";
import pNiger from "@/assets/p-niger.jpg";
import pSunflower from "@/assets/p-sunflower.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <About />
      <Categories />
      <Catalog />
      <Process />
      <Quality />
      <CTA />
      <Footer />
      <WhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-24 px-4">
      <div
        className="relative rounded-3xl overflow-hidden min-h-[720px] flex flex-col justify-between"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,61,46,0.35) 0%, rgba(10,43,32,0.85) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl w-full rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm p-10 md:p-16 text-center">
            <div className="eyebrow mb-6">Ethiopia's Trusted Global Agricultural Export Partner</div>
            <h1 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Exporting Ethiopia's<br />
              Finest Agricultural<br />
              Products To The World
            </h1>
            <p className="mt-8 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Premium livestock, oil seeds and pulses exported globally with quality,
              integrity and international standards.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="#categories" className="btn-forest">Explore Products <ArrowRight className="w-4 h-4" /></a>
              <Link to="/contact" className="btn-gold-outline">Contact Sales <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["15+", "Years Experience"],
            ["60+", "Countries Served"],
            ["500+", "Farmers"],
            ["100%", "Export Quality"],
          ].map(([k, v]) => (
            <div key={v} className="card-forest px-6 py-6">
              <div className="text-gold text-4xl font-serif">{k}</div>
              <div className="text-cream/70 text-sm mt-2">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-start">
      <img src={aboutImg} alt="Ethiopian highland farmland" loading="lazy" width={1000} height={1200}
           className="rounded-3xl w-full h-auto object-cover" />
      <div>
        <div className="eyebrow mb-4">About ZYGC Export PLC</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          A premium export house connecting Ethiopia's agricultural strength with global demand.
        </h2>
        <p className="mt-6 text-muted-ink leading-relaxed">
          ZYGC Export PLC specializes in livestock, oil seeds and pulses for international
          buyers who require reliable supply, disciplined documentation and export-grade
          quality control. Our work begins with trusted farmer networks and ends with
          shipment-ready products prepared for global standards.
        </p>

        <div className="mt-8 space-y-4">
          {[
            ["Mission", "Export Ethiopia's finest agricultural products with integrity, traceability and disciplined service."],
            ["Vision", "Become a trusted African export partner recognized for premium sourcing and dependable delivery."],
            ["Core Values", "Quality. Partnership. Compliance. Reliability. Respect for the farmers and communities behind every shipment."],
          ].map(([t, d]) => (
            <div key={t} className="card-soft p-6">
              <div className="font-semibold text-forest">{t}</div>
              <p className="text-muted-ink text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    { img: catLivestock, tag: "Available Livestock • Vet Inspected", title: "Livestock", desc: "Healthy cattle prepared through veterinary inspection, quality control and export documentation." },
    { img: catOilseeds, tag: "Sesame • Niger • Soybean", title: "Oil Seeds", desc: "Sesame, Niger seed, soybean, linseed and sunflower with cleaning, sorting and shipment support." },
    { img: catPulses, tag: "Chickpeas • Mung • Beans", title: "Pulses", desc: "Chickpeas, green mung, white pea beans, kidney beans and lentils for wholesalers and importers." },
  ];
  return (
    <section id="categories" className="px-4">
      <div className="max-w-6xl mx-auto rounded-3xl bg-forest-deep text-cream px-6 md:px-14 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-4">Export Categories</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Premium agricultural products prepared for international markets.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-gold/20 bg-forest p-4 flex flex-col">
              <img src={c.img} alt={c.title} loading="lazy" className="rounded-xl h-52 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-gold text-[0.68rem] tracking-[0.16em] uppercase font-semibold">{c.tag}</div>
                <h3 className="font-serif text-3xl mt-3 text-cream">{c.title}</h3>
                <p className="text-cream/70 text-sm mt-3 leading-relaxed flex-1">{c.desc}</p>
                <a href="#" className="text-gold text-sm mt-6 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const items = [
    { img: pGoats, t: "Live Goats", d: "Hardy live goats selected from trusted supply networks." },
    { img: pSheep, t: "Live Sheep", d: "Healthy sheep supplied for meat and breeding markets." },
    { img: pCattle, t: "Cattle", d: "Cattle sourcing for commercial buyers and livestock traders." },
    { img: pSesame, t: "Sesame Seeds", d: "Export-grade sesame seeds for food processors and traders." },
    { img: pNiger, t: "Niger Seed", d: "Niger seed sourced for oil extraction and bird feed supply chains." },
    { img: pSunflower, t: "Sunflower Seed", d: "Sunflower seed supply for edible oil and processing customers." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center max-w-2xl mx-auto">
        <div className="eyebrow mb-4">Product Catalog</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          Export-ready varieties, packaging and documentation across every category.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.t} className="card-soft p-4">
            <img src={p.img} alt={p.t} loading="lazy" className="rounded-xl h-52 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-serif text-2xl text-forest">{p.t}</h3>
              <p className="text-muted-ink text-sm mt-2 leading-relaxed">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { i: Users, t: "Farmer Network" },
    { i: Truck, t: "Collection" },
    { i: Filter, t: "Cleaning" },
    { i: Scale, t: "Sorting" },
    { i: BadgeCheck, t: "Quality Inspection" },
    { i: Package, t: "Packaging" },
    { i: FileText, t: "Documentation" },
    { i: Ship, t: "Shipping" },
    { i: Globe, t: "Global Delivery" },
  ];
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center max-w-2xl mx-auto">
        <div className="eyebrow mb-4">Export Process</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          A disciplined nine-stage path from farmer network to global delivery.
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
        {steps.map((s, idx) => {
          const Icon = s.i;
          return (
            <div key={s.t} className="card-soft p-4 flex flex-col items-center text-center">
              <Icon className="w-6 h-6 text-forest" />
              <div className="mt-3 text-xs text-muted-ink">{String(idx + 1).padStart(2, "0")}</div>
              <div className="text-forest text-sm font-medium mt-1 leading-tight">{s.t}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Quality() {
  const items = [
    { i: ShieldCheck, t: "ISO Standards", d: "Structured processes for inspection discipline, documentation and shipment readiness." },
    { i: Stethoscope, t: "Veterinary Certification", d: "Livestock exports supported by veterinary checks and required export documentation." },
    { i: Leaf, t: "Organic Standards", d: "Oil seeds and pulses handled with careful sourcing, cleaning and traceability practices." },
    { i: FileCheck2, t: "Export Compliance", d: "Buyer-ready paperwork, origin support and professional communication at each stage." },
    { i: Search, t: "International Inspection", d: "Products prepared for inspection standards across destination markets and trade routes." },
    { i: MapPin, t: "Traceability", d: "Clear sourcing and shipment visibility from farmer network to export documentation." },
  ];
  return (
    <section id="quality" className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center max-w-2xl mx-auto">
        <div className="eyebrow mb-4">Quality Assurance</div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">
          Certified export confidence for demanding international buyers.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {items.map((q) => {
          const Icon = q.i;
          return (
            <div key={q.t} className="card-soft p-8">
              <div className="w-11 h-11 rounded-xl bg-cream border border-hairline flex items-center justify-center">
                <Icon className="w-5 h-5 text-forest" />
              </div>
              <h3 className="mt-6 font-semibold text-forest">{q.t}</h3>
              <p className="mt-3 text-muted-ink text-sm leading-relaxed">{q.d}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        {[["1000+", "Farmers"], ["80+", "Global Partners"], ["25+", "Countries"], ["99%", "Client Satisfaction"], ["15+", "Years Experience"]].map(([k, v]) => (
          <div key={v} className="card-forest px-6 py-6">
            <div className="text-gold text-3xl font-serif">{k}</div>
            <div className="text-cream/70 text-sm mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-24">
      <div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden px-6 py-24 text-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,43,32,0.85), rgba(10,43,32,0.85)), url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight max-w-3xl mx-auto">
          Ready To Source Ethiopia's Finest Agricultural Products?
        </h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-forest bg-gold text-forest-deep hover:!bg-gold-soft">
            Get A Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-gold-outline">
            Talk To Export Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
