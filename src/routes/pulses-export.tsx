import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-pulses.jpg";
import pSesame from "@/assets/p-sesame.jpg";
import pNiger from "@/assets/p-niger.jpg";
import pSunflower from "@/assets/p-sunflower.jpg";

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
      heroImg={[heroImg, pSesame, pNiger, pSunflower]}
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
        { img: pSesame, title: "Chickpeas", desc: "Chickpeas sorted for wholesale and export buyers.", note: "Grade selection, packing, and loading coordination." },
        { img: pNiger, title: "Red Kidney Beans", desc: "Red kidney beans for regional and international pulse markets.", note: "Reliable sourcing with moisture and cleanliness checks." },
        { img: pSunflower, title: "Green Mung Beans", desc: "Green mung beans supplied for wholesale and food processing.", note: "Packed to buyer requirements with export documentation support." },
        { img: pSesame, title: "White Pea Beans", desc: "White pea beans selected for wholesale and export channels.", note: "Moisture, cleanliness, and packing checks before shipment." },
        { img: pNiger, title: "Horse Beans", desc: "Horse beans sourced from dependable Ethiopian growing regions.", note: "Bulk supply with sorting, packing, and export documentation support." },
        { img: pSunflower, title: "Lentils", desc: "Lentils supplied for food processors, wholesalers, and traders.", note: "Grade selection and shipping coordination based on buyer requirements." },
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
