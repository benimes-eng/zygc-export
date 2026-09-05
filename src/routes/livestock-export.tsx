import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import pGoats from "@/assets/p-goats.jpg";
import pCattle from "@/assets/p-cattle.jpg";
import uSheep1 from "@/assets/u-sheep1.jpg.asset.json";
import uSheep2 from "@/assets/u-sheep2.jpg.asset.json";
import uFlock from "@/assets/u-flock.jpg.asset.json";
import uFlock2 from "@/assets/u-flock2.jpg.asset.json";
import uFeed from "@/assets/u-feed.jpg.asset.json";

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
      heroImg={[uFlock2.url, uFlock.url, uSheep1.url, pCattle]}
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
        { img: pGoats, title: "Live Goats", desc: "Hardy live goats selected from trusted supply networks.", note: "Buyer-specific sourcing, health checks, and export preparation available." },
        { img: uSheep1.url, title: "Live Sheep", desc: "Healthy sheep supplied for meat and breeding markets.", note: "Batch coordination, quarantine support, and documentation workflow." },
        { img: pCattle, title: "Cattle", desc: "Cows, bulls and oxen sourced for commercial buyers and livestock traders.", note: "Inspection-led procurement with shipment coordination." },
        { img: uFlock.url, title: "Export Flocks", desc: "Large-volume sheep and goat flocks coordinated for regional buyers.", note: "Holding facilities, batching and health certification support." },
        { img: uSheep2.url, title: "Breeding Stock", desc: "Breeding heifers and rams coordinated for herd development programs.", note: "Selection support, documentation, and shipment coordination available." },
        { img: uFeed.url, title: "Feed & Nutrition", desc: "Balanced feed programs that keep export livestock in top condition.", note: "Quality feed sourcing and holding-period nutrition management." },
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
