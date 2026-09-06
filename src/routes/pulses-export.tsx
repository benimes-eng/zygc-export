import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import chickpeas from "@/assets/products/chickpeas.jpg.asset.json";
import kidney from "@/assets/products/kidney.jpg.asset.json";
import mung from "@/assets/products/mung.jpg.asset.json";
import whiteBeans from "@/assets/products/whitebeans.jpg.asset.json";
import favaBeans from "@/assets/products/favabeans.jpg.asset.json";
import lentils from "@/assets/products/lentils.jpg.asset.json";

export const Route = createFileRoute("/pulses-export")({
  head: () => ({
    meta: [
      { title: "Pulses Export — ZYGC Global Trade" },
      { name: "description", content: "Ethiopian pulses export: chickpeas, green mung, white pea beans, kidney beans, horse beans and lentils for wholesalers and importers." },
      { property: "og:title", content: "Pulses Export — ZYGC Global Trade" },
      { property: "og:description", content: "Chickpeas, mung beans, kidney beans, white pea beans, horse beans and lentils prepared for wholesalers, importers and food distributors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PulsesPage,
});

function PulsesPage() {
  return (
    <ProductPage
      eyebrow="Pulses Export"
      heroImg={[chickpeas.url, kidney.url, mung.url, lentils.url]}
      title="Ethiopia's finest pulses, graded for the world's tables."
      intro="Chickpeas, green mung, white pea beans, kidney beans and lentils prepared for wholesalers, importers and food distributors."
      highlights={[
        { title: "Available Varieties", desc: "Chickpeas, green mung, white pea beans, kidney beans and lentils." },
        { title: "Quality Standards", desc: "Cleaning, sorting, grading, inspection and buyer-specific shipment preparation." },
        { title: "Related Products", desc: "Oil seeds and livestock export programs available through the same trade team." },
      ]}
      itemsHeading="Pulses available for export"
      itemsSubheading="A fuller list of pulse items with product images, sourcing notes, and export-ready preparation details."
      items={[
        { img: chickpeas.url, title: "Chickpeas", desc: "Chickpeas sorted for wholesale and export buyers.", note: "Graded and packed for shipment." },
        { img: kidney.url, title: "Red Kidney Beans", desc: "Red kidney beans for regional and international markets.", note: "Checked for moisture and cleanliness." },
        { img: mung.url, title: "Green Mung Beans", desc: "Green mung beans for wholesale and food processing.", note: "Packed to buyer requirements." },
        { img: whiteBeans.url, title: "White Pea Beans", desc: "White pea beans selected for wholesale and export.", note: "Checked and packed before shipment." },
        { img: favaBeans.url, title: "Horse Beans", desc: "Dried horse beans sourced for bulk export.", note: "Sorted and packed for shipment." },
        { img: lentils.url, title: "Lentils", desc: "Lentils for food processors, wholesalers and traders.", note: "Grade and packing selected by order." },
      ]}
      supportHeading="Pulses supply programs for wholesalers and distributors."
      support={[
        { eyebrow: "Cleaning", title: "Grade prep", desc: "Cleaning and sorting programs for buyer-specific pulse requirements." },
        { eyebrow: "Packaging", title: "Wholesale", desc: "Packaging options for importers, processors and food distributors." },
        { eyebrow: "Documents", title: "Compliant", desc: "Export paperwork, origin support and inspection coordination." },
        { eyebrow: "Related", title: "Oil seeds", desc: "Pair pulses with sesame, Niger seed and soybean sourcing programs." },
      ]}
      ctaHeading="Build a reliable Ethiopian pulses sourcing program with ZYGC."
      ctaButtonText="Request Pulses Quote"
    />
  );
}
