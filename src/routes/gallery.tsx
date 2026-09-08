import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";


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
  // camel.jpg is intentionally omitted: no legitimate binary exists in the repository, its history, or the supplied asset package.
  const imgs = ["/images/u-flock2.jpg", "/images/u-sheep1.jpg", "/images/cattle.jpg", "/images/sesame.jpg", "/images/u-loader.jpg", "/images/u-sheep2.jpg", "/images/chickpeas.jpg", "/images/u-excavator.jpg", "/images/goat.jpg", "/images/niger.jpg", "/images/u-flock.jpg", "/images/sunflower.jpg", "/images/u-hitachi.jpg", "/images/lentils.jpg", "/images/u-feed.jpg", "/images/hero.jpg", "/images/u-develon.jpg", "/images/rxmedicine.jpg", "/images/about.jpg", "/images/cta.jpg"];
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
