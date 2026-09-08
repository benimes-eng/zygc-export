import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import goatImage from "@/assets/real/goat.jpg.asset.json";
import cattleImage from "@/assets/real/cattle.jpg.asset.json";
import uSheep1 from "@/assets/u-sheep1.jpg.asset.json";
import camel from "@/assets/products/camel.jpg.asset.json";
import uFlock from "@/assets/u-flock.jpg.asset.json";
import uFlock2 from "@/assets/u-flock2.jpg.asset.json";

export const Route = createFileRoute("/livestock-export")({
  head: () => ({
    meta: [
      { title: "Livestock Export — ZYGC Global Trade" },
      { name: "description", content: "Ethiopian livestock export: cattle, sheep, goats and camels sourced through trusted farmer networks with veterinary inspection and shipment coordination." },
      { property: "og:title", content: "Livestock Export — ZYGC Global Trade" },
      { property: "og:description", content: "Cattle, sheep, goats and camels prepared for global buyers with veterinary certification and export documentation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LivestockPage,
});

function LivestockPage() {
  return (
    <ProductPage
      eyebrow="Livestock Export"
      heroImg={[uFlock2.url, uFlock.url, cattleImage.url, camel.url]}
      title="From Ethiopian highlands to the world's markets."
      intro="Healthy cattle, sheep, goats and camels sourced through trusted farmer networks, inspected for quality, supported with veterinary documentation and prepared for global buyers."
      highlights={[
        { title: "Available Livestock", desc: "Cattle, sheep, goats and camels prepared for importers, processors and regional livestock buyers." },
        { title: "Quality Standards", desc: "Selection, quarantine coordination, veterinary inspection and buyer-specific checks." },
        { title: "Documentation", desc: "Veterinary certificates, export documents, packing details and shipment communication." },
      ]}
      itemsHeading="Livestock available for export"
      itemsSubheading="Browse the current livestock categories prepared for sourcing, inspection, documentation, and shipment coordination."
      items={[
        { img: cattleImage.url, title: "Cattle (cows, bulls, oxen)", desc: "Healthy cows, bulls and oxen sourced from pastoral networks for commercial meat and livestock buyers.", note: "Health certification, veterinary inspection, and export quarantine coordination." },
        { img: uSheep1.url, title: "Sheep", desc: "Premium Ethiopian highland and lowland sheep supplied for meat and breeding markets.", note: "Batch sorting, quarantine support, and international documentation." },
        { img: goatImage.url, title: "Goats", desc: "Hardy, healthy live goats selected from trusted pastoralist supply networks.", note: "Buyer-specific weight grades, veterinary checks, and export preparation." },
        { img: camel.url, title: "Camel", desc: "Desert-adapted camels selected for trade, transport, and commercial meat markets across the Middle East and Africa.", note: "Quarantine management, veterinary certification, and transport logistics." },
      ]}
      supportHeading="Livestock export support from selection to shipment."
      support={[
        { eyebrow: "Handling", title: "Animal welfare", desc: "Coordinated handling, holding and buyer-specific preparation before shipment." },
        { eyebrow: "Vet Checks", title: "Certification", desc: "Veterinary inspection support and health documentation for export buyers." },
        { eyebrow: "Shipping", title: "Logistics", desc: "Road, port and destination coordination through trusted export partners." },
        { eyebrow: "Inquiry", title: "Buyer specs", desc: "Share destination, volume, breed requirements and delivery timeline." },
      ]}
      ctaHeading="Need livestock export availability, documentation and pricing?"
      ctaButtonText="Request Livestock Quote"
    />
  );
}
