import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";

import cattleImage from "@/assets/real/cattle.jpg.asset.json";
import goatImage from "@/assets/real/goat.jpg.asset.json";
import heroImage from "@/assets/real/hero.jpg.asset.json";
import aboutImage from "@/assets/real/about.jpg.asset.json";
import ctaImage from "@/assets/real/cta.jpg.asset.json";
import uSheep1 from "@/assets/u-sheep1.jpg.asset.json";
import uSheep2 from "@/assets/u-sheep2.jpg.asset.json";
import uFlock from "@/assets/u-flock.jpg.asset.json";
import uFlock2 from "@/assets/u-flock2.jpg.asset.json";
import uFeed from "@/assets/u-feed.jpg.asset.json";
import uLoader from "@/assets/u-loader.jpg.asset.json";
import uExcavator from "@/assets/u-excavator.jpg.asset.json";
import uHitachi from "@/assets/u-hitachi.jpg.asset.json";
import uDevelon from "@/assets/u-develon.jpg.asset.json";
import sesame from "@/assets/products/sesame.jpg.asset.json";
import niger from "@/assets/products/niger.jpg.asset.json";
import sunflower from "@/assets/products/sunflower.jpg.asset.json";
import chickpeas from "@/assets/products/chickpeas.jpg.asset.json";
import lentils from "@/assets/products/lentils.jpg.asset.json";
import camel from "@/assets/products/camel.jpg.asset.json";
import rxMedicine from "@/assets/products/rxmedicine.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ZYGC Global Trade" },
      { name: "description", content: "A visual overview of livestock, oil seeds, pulses and export handling across ZYGC's supply categories." },
      { property: "og:title", content: "Gallery — ZYGC Global Trade" },
      { property: "og:description", content: "Visual overview of ZYGC's export categories and supply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const imgs = [uFlock2, uSheep1, cattleImage, sesame, uLoader, uSheep2, chickpeas, uExcavator, goatImage, niger, uFlock, camel, sunflower, uHitachi, lentils, uFeed, heroImage, uDevelon, rxMedicine, aboutImage, ctaImage].map((m) => m.url);
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
