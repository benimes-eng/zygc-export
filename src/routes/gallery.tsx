import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";

import a from "@/assets/cat-livestock.jpg";
import b from "@/assets/cat-oilseeds.jpg";
import c from "@/assets/cat-pulses.jpg";
import d from "@/assets/p-goats.jpg";
import e from "@/assets/p-sheep.jpg";
import f from "@/assets/p-cattle.jpg";
import g from "@/assets/p-sesame.jpg";
import h from "@/assets/p-niger.jpg";
import i from "@/assets/p-sunflower.jpg";
import j from "@/assets/about.jpg";
import k from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ZYGC Export PLC" },
      { name: "description", content: "A visual overview of livestock, oil seeds, pulses and export handling across ZYGC's supply categories." },
      { property: "og:title", content: "Gallery — ZYGC Export PLC" },
      { property: "og:description", content: "Visual overview of ZYGC's export categories and supply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const imgs = [a, b, c, d, e, f, g, h, i, j, k];
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <section className="pt-36 pb-12 px-6 max-w-4xl mx-auto text-center">
        <div className="eyebrow mb-4">Export Gallery</div>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-ink">
          Products, sourcing, and shipment-ready supply
        </h1>
        <p className="mt-6 text-muted-ink max-w-2xl mx-auto">
          A visual overview of livestock, oil seeds, pulses, and export handling across
          the company's supply categories.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {imgs.map((src, idx) => (
          <img key={idx} src={src} alt="" loading="lazy" className="mb-4 w-full rounded-2xl break-inside-avoid" />
        ))}
      </section>
      <Footer />
      <WhatsApp />
    </div>
  );
}
