import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";
import { PageLoader } from "@/components/site/PageLoader";
import { Particles } from "@/components/site/Particles";
import { Reveal, SplitReveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/MagneticButton";
import { useParallax } from "@/hooks/use-parallax";

export interface ProductItem {
  img: string;
  title: string;
  desc: string;
  note: string;
}

export interface SupportItem {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface ProductPageProps {
  eyebrow: string;
  heroImg: string;
  title: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  itemsHeading: string;
  itemsSubheading: string;
  items: ProductItem[];
  supportHeading: string;
  support: SupportItem[];
  ctaHeading: string;
  ctaButtonText: string;
}

export function ProductPage(p: ProductPageProps) {
  const bgRef = useParallax<HTMLDivElement>(0.3);
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <PageLoader />
      <Nav />

      {/* Hero */}
      <section className="pt-20 sm:pt-24">
        <div className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] flex items-end">
          <div
            ref={bgRef}
            className="absolute inset-x-0 -top-24 -bottom-24 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${p.heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-forest-deep/60 to-forest-deep/90" />
          <Particles className="absolute inset-0 w-full h-full" count={35} />

          <div className="relative w-full px-6 sm:px-12 pb-14 sm:pb-20">
            <div className="max-w-4xl">
              <Reveal>
                <div className="eyebrow mb-5">{p.eyebrow}</div>
              </Reveal>
              <h1 className="font-serif text-white text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
                <SplitReveal text={p.title} />
              </h1>
              <Reveal delay={200}>
                <p className="mt-6 text-white/80 max-w-2xl text-base sm:text-lg leading-relaxed">
                  {p.intro}
                </p>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Magnetic>
                    <Link to="/contact" className="btn-forest bg-gold text-forest-deep hover:!bg-gold-soft">
                      {p.ctaButtonText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="https://wa.me/251900000000"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold-outline"
                    >
                      WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid md:grid-cols-3 gap-5">
        {p.highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 100}>
            <div className="card-soft p-8 h-full">
              <div className="text-gold text-xs tracking-[0.18em] uppercase font-semibold">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-2xl text-forest">{h.title}</h3>
              <p className="mt-3 text-muted-ink text-sm leading-relaxed">{h.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Items grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="eyebrow mb-4">Catalog</div>
          </Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ink">
            <SplitReveal text={p.itemsHeading} />
          </h2>
          <Reveal delay={200}>
            <p className="mt-5 text-muted-ink leading-relaxed">{p.itemsSubheading}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {p.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 100}>
              <div className="card-soft overflow-hidden group h-full flex flex-col hover-scale">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl text-forest">{it.title}</h3>
                  <p className="text-muted-ink text-sm mt-2 leading-relaxed">{it.desc}</p>
                  <p className="text-forest/70 text-xs mt-4 pt-4 border-t border-hairline leading-relaxed">
                    {it.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Support pillars */}
      <section className="px-3 sm:px-4">
        <div className="max-w-6xl mx-auto rounded-3xl bg-forest-deep text-cream px-6 md:px-14 py-16 sm:py-20 relative overflow-hidden">
          <Particles className="absolute inset-0 w-full h-full" count={30} />
          <div className="relative text-center max-w-3xl mx-auto">
            <Reveal>
              <div className="eyebrow mb-4">Support</div>
            </Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              <SplitReveal text={p.supportHeading} />
            </h2>
          </div>
          <div className="relative mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {p.support.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="rounded-2xl border border-gold/20 bg-forest p-6 h-full">
                  <div className="text-gold text-[0.68rem] tracking-[0.16em] uppercase font-semibold">
                    {s.eyebrow}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-cream">
                    <Check className="w-4 h-4 text-gold" />
                    <h3 className="font-serif text-xl">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-cream/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            <SplitReveal text={p.ctaHeading} />
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Magnetic>
              <Link to="/contact" className="btn-forest">
                {p.ctaButtonText} <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="https://wa.me/251900000000" target="_blank" rel="noreferrer" className="btn-gold-outline">
                WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <Footer />
      <WhatsApp />
    </div>
  );
}
