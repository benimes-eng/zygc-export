import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Truck, Filter, Scale, BadgeCheck, Package, FileText, Ship, Globe, ShieldCheck, Stethoscope, Leaf, FileCheck2, Search, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";
import { PageLoader } from "@/components/site/PageLoader";
import { Particles } from "@/components/site/Particles";
import { Reveal, SplitReveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/MagneticButton";
import { useParallax } from "@/hooks/use-parallax";

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
  head: () => ({
    meta: [
      { title: "ZYGC Construction PLC — Construction, Export & Import Ethiopia" },
      { name: "description", content: "ZYGC Construction PLC is a multi-sector Ethiopian enterprise: construction and engineering, agricultural and livestock exports, machinery imports and pharmaceutical supply." },
      { property: "og:title", content: "ZYGC Construction PLC — Construction, Export & Import" },
      { property: "og:description", content: "Engineering, global trade and medical supply from Addis Ababa. Established 2017." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const categoryLinks = {
  Livestock: "/livestock-export",
  "Oil Seeds": "/oil-seeds-export",
  Pulses: "/pulses-export",
  Machinery: "/machinery-imports",
  Pharmaceuticals: "/pharmaceutical-imports",
} as const;


function Home() {
  // Hero scroll-driven zoom + fade via GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: any;
    (async () => {
      const [gsapMod, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Hero zoom
        gsap.to("[data-hero-bg]", {
          scale: 1.25,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        gsap.to("[data-hero-content]", {
          y: -80,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom 30%",
            scrub: 1.2,
          },
        });

        // Categories cards stagger rise on scroll
        gsap.utils.toArray<HTMLElement>("[data-cat-card]").forEach((el, i) => {
          gsap.from(el, {
            y: 80,
            opacity: 0,
            rotateX: 8,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });

        // Process horizontal-ish scale
        gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((el, i) => {
          gsap.from(el, {
            scale: 0.85,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 3) * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });
      });
    })();
    return () => ctx?.revert?.();
  }, []);

  // Mouse-parallax for hero foreground
  const heroWrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = heroWrapRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-mouse-parallax]");
    let raf = 0;
    let tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width);
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height);
    };
    const loop = () => {
      targets.forEach((t) => {
        const depth = Number(t.dataset.depth || "10");
        t.style.transform = `translate3d(${(tx * depth).toFixed(2)}px, ${(ty * depth).toFixed(2)}px, 0)`;
      });
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener("mousemove", onMove);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <PageLoader />
      <Nav />
      <div ref={heroWrapRef}>
        <Hero />
      </div>
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
    <section data-hero className="pt-20 sm:pt-24">
      <div className="relative overflow-hidden min-h-[640px] sm:min-h-[720px] flex flex-col justify-between">
        <div
          data-hero-bg
          className="absolute inset-x-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-forest-deep/85" />
        <Particles className="absolute inset-0 w-full h-full" count={45} />

        {/* Floating light beam */}
        <div
          data-mouse-parallax
          data-depth="-20"
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        />
        <div
          data-mouse-parallax
          data-depth="15"
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-forest/40 blur-3xl pointer-events-none"
        />

        <div data-hero-content className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-4xl w-full rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 sm:p-10 md:p-16 text-center">
            <Reveal>
              <div className="eyebrow mb-6">Construction • Global Trade • Medical Supply</div>
            </Reveal>
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
              <SplitReveal text="Building Ethiopia And Connecting It To Global Markets" />
            </h1>
            <Reveal delay={400}>
              <p className="mt-6 sm:mt-8 text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                ZYGC Construction PLC combines engineering foundations with a diversified
                import-export division: premium Ethiopian agricultural and livestock exports,
                heavy machinery imports and essential pharmaceutical supply.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Magnetic>
                  <a href="#categories" className="btn-forest">Explore Divisions <ArrowRight className="w-4 h-4" /></a>
                </Magnetic>
                <Magnetic>
                  <Link to="/contact" className="btn-gold-outline">Contact Sales <ArrowRight className="w-4 h-4" /></Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative px-4 sm:px-6 pb-6 sm:pb-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            ["2017", "Established"],
            ["4", "Business Divisions"],
            ["EFDA", "Compliant Imports"],
            ["100%", "Quality First"],
          ].map(([k, v], i) => (
            <Reveal key={v} delay={700 + i * 80}>
              <div className="card-forest px-4 sm:px-6 py-4 sm:py-6">
                <div className="text-gold text-2xl sm:text-4xl font-serif">{k}</div>
                <div className="text-cream/70 text-xs sm:text-sm mt-1 sm:mt-2">{v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-start">
      <Reveal>
        <img src={aboutImg} alt="Ethiopian highland farmland" loading="lazy" width={1000} height={1200}
             className="rounded-3xl w-full h-auto object-cover float-slow" />
      </Reveal>
      <div>
        <Reveal>
          <div className="eyebrow mb-4">About ZYGC Construction PLC</div>
        </Reveal>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink">
          <SplitReveal text="A multi-sector enterprise engineering infrastructure and driving global trade." />
        </h2>
        <Reveal delay={200}>
          <p className="mt-6 text-muted-ink leading-relaxed">
            Established on November 23, 2017 and based in Bole, Addis Ababa, Z Y G C Construction PLC
            operates as a multi-sector enterprise in Ethiopia. We combine our core engineering
            foundations with a robust Import-Export division, leveraging global trade networks to
            import heavy industrial goods and pharmaceuticals while exporting highly valuable
            Ethiopian agricultural and livestock commodities.
          </p>
        </Reveal>

        <div className="mt-8 space-y-4">
          {[
            ["Vision", "To be a leading, multi-sector enterprise in East Africa, recognized for engineering world-class infrastructure and driving global trade that fosters sustainable economic growth, food security and advanced healthcare solutions."],
            ["Mission", "To deliver high-quality construction, engineering and project management services while operating an agile import-export network that supplies essential industrial machinery, advanced medical goods and premium agricultural products to the global market."],
            ["Core Values", "Quality First. Synergy. Reliability. National Impact — contributing to Ethiopia's industrialization, foreign currency generation and healthcare accessibility."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="card-soft p-6">
                <div className="font-semibold text-forest">{t}</div>
                <p className="text-muted-ink text-sm mt-2 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    { img: catLivestock, tag: "Available Livestock • Vet Inspected", title: "Livestock" as const, desc: "Healthy cattle prepared through veterinary inspection, quality control and export documentation." },
    { img: catOilseeds, tag: "Sesame • Niger • Soybean", title: "Oil Seeds" as const, desc: "Sesame, Niger seed, soybean, linseed and sunflower with cleaning, sorting and shipment support." },
    { img: catPulses, tag: "Chickpeas • Mung • Beans", title: "Pulses" as const, desc: "Chickpeas, green mung, white pea beans, kidney beans and lentils for wholesalers and importers." },
  ];
  return (
    <section id="categories" className="sm:px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto sm:rounded-3xl bg-forest-deep text-cream px-5 sm:px-6 md:px-14 py-16 sm:py-20 relative overflow-hidden">

        <Particles className="absolute inset-0 w-full h-full" count={35} />
        <div className="relative text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="eyebrow mb-4">Export Categories</div>
          </Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            <SplitReveal text="Premium agricultural products prepared for international markets." />
          </h2>
        </div>
        <div className="relative mt-10 sm:mt-14 grid md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {items.map((c) => (
            <div data-cat-card key={c.title} className="rounded-2xl border border-gold/20 bg-forest p-4 flex flex-col group overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-52 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-gold text-[0.68rem] tracking-[0.16em] uppercase font-semibold">{c.tag}</div>
                <h3 className="font-serif text-3xl mt-3 text-cream">{c.title}</h3>
                <p className="text-cream/70 text-sm mt-3 leading-relaxed flex-1">{c.desc}</p>
                <Magnetic>
                  <Link to={categoryLinks[c.title]} className="text-gold text-sm mt-6 inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
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
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <div className="eyebrow mb-4">Product Catalog</div>
        </Reveal>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink">
          <SplitReveal text="Export-ready varieties, packaging and documentation across every category." />
        </h2>
      </div>
      <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <Reveal key={p.t} delay={(i % 3) * 100}>
            <div className="card-soft p-4 group overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="h-52 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-2xl text-forest">{p.t}</h3>
                <p className="text-muted-ink text-sm mt-2 leading-relaxed">{p.d}</p>
              </div>
            </div>
          </Reveal>
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
    <section id="process" className="max-w-6xl mx-auto px-6 py-20 sm:py-28 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <div className="eyebrow mb-4">Export Process</div>
        </Reveal>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink">
          <SplitReveal text="A disciplined nine-stage path from farmer network to global delivery." />
        </h2>
      </div>
      <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
        {steps.map((s, idx) => {
          const Icon = s.i;
          return (
            <div data-process-step key={s.t} className="card-soft p-4 flex flex-col items-center text-center hover-scale group">
              <Icon className="w-6 h-6 text-forest transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
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
    <section id="quality" className="max-w-6xl mx-auto px-6 py-20 sm:py-28 scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <div className="eyebrow mb-4">Quality Assurance</div>
        </Reveal>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink">
          <SplitReveal text="Certified export confidence for demanding international buyers." />
        </h2>
      </div>
      <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((q, i) => {
          const Icon = q.i;
          return (
            <Reveal key={q.t} delay={(i % 3) * 100}>
              <div className="card-soft p-8 hover-scale group h-full">
                <div className="w-11 h-11 rounded-xl bg-cream border border-hairline flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6">
                  <Icon className="w-5 h-5 text-forest" />
                </div>
                <h3 className="mt-6 font-semibold text-forest">{q.t}</h3>
                <p className="mt-3 text-muted-ink text-sm leading-relaxed">{q.d}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        {[["1000+", "Farmers"], ["80+", "Global Partners"], ["25+", "Countries"], ["99%", "Client Satisfaction"], ["15+", "Years Experience"]].map(([k, v], i) => (
          <Reveal key={v} delay={i * 80}>
            <div className="card-forest px-6 py-6">
              <div className="text-gold text-3xl font-serif">{k}</div>
              <div className="text-cream/70 text-sm mt-1">{v}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const bgRef = useParallax<HTMLDivElement>(0.25);
  return (
    <section className="sm:px-4 pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto relative sm:rounded-3xl overflow-hidden px-5 sm:px-6 py-20 sm:py-24 text-center">

        <div
          ref={bgRef}
          className="absolute inset-x-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="absolute inset-0 bg-forest-deep/85" />
        <Particles className="absolute inset-0 w-full h-full" count={40} />
        <div className="relative">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-cream leading-tight max-w-3xl mx-auto">
            <SplitReveal text="Ready To Source Ethiopia's Finest Agricultural Products?" />
          </h2>
          <Reveal delay={300}>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Magnetic>
                <Link to="/contact" className="btn-forest bg-gold text-forest-deep hover:!bg-gold-soft">
                  Get A Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="btn-gold-outline">
                  Talk To Export Team <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
