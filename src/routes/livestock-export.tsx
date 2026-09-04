import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-livestock.jpg";
import pGoats from "@/assets/p-goats.jpg";
import pSheep from "@/assets/p-sheep.jpg";
import pCattle from "@/assets/p-cattle.jpg";

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
      heroImg={[heroImg, pCattle, pSheep, pGoats]}
      title="From Ethiopian highlands to the world's markets."
      intro="Healthy cattle sourced through trusted farmer networks, inspected for quality, supported with veterinary documentation and prepared for global buyers."
      highlights={[
        { title: "Available Livestock", desc: "Cattle prepared for importers, processors and regional livestock buyers." },
        { title: "Quality Standards", desc: "Selection, quarantine coordination, veterinary inspection and buyer-specific checks." },
        { title: "Documentation", desc: "Veterinary certificates, export documents, packing details and shipment communication." },
      ]}
      itemsHeading="Livestock available for export"
      itemsSubheading="Browse the current livestock categories prepared for sourcing, inspection, documentation, and shipment coordination."
      items={[
        { img: pGoats, title: "Live Goats", desc: "Hardy live goats selected from trusted supply networks.", note: "Buyer-specific sourcing, health checks, and export preparation available." },
        { img: pSheep, title: "Live Sheep", desc: "Healthy sheep supplied for meat and breeding markets.", note: "Batch coordination, quarantine support, and documentation workflow." },
        { img: pCattle, title: "Cattle", desc: "Cattle sourcing for commercial buyers and livestock traders.", note: "Inspection-led procurement with shipment coordination." },
        { img: pCattle, title: "Live Camels", desc: "Desert-adapted camels sourced for regional livestock buyers.", note: "Health screening, holding coordination, and export paperwork support." },
        { img: pCattle, title: "Feeder Bulls", desc: "Strong feeder bulls selected for commercial livestock programs.", note: "Procurement, inspection, and buyer-specific lot preparation." },
        { img: pGoats, title: "Breeding Heifers", desc: "Breeding heifers coordinated for buyers seeking herd development.", note: "Selection support, documentation, and shipment coordination available." },
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
