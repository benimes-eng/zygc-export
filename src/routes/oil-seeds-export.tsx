import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import sesame from "@/assets/products/sesame.jpg.asset.json";
import niger from "@/assets/products/niger.jpg.asset.json";
import sunflower from "@/assets/products/sunflower.jpg.asset.json";
import flax from "@/assets/products/flax.jpg.asset.json";
import castor from "@/assets/products/castor.jpg.asset.json";
import groundnuts from "@/assets/products/groundnuts.jpg.asset.json";

export const Route = createFileRoute("/oil-seeds-export")({
  head: () => ({
    meta: [
      { title: "Oil Seeds Export — ZYGC Global Trade" },
      { name: "description", content: "Ethiopian oil seeds export: sesame, Niger seed, soybean, linseed, sunflower and groundnuts prepared for bulk international trade." },
      { property: "og:title", content: "Oil Seeds Export — ZYGC Global Trade" },
      { property: "og:description", content: "Sesame, Niger seed, sunflower, flaxseed, castor seed and groundnuts handled through careful sourcing, cleaning and shipment documentation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OilSeedsPage,
});

function OilSeedsPage() {
  return (
    <ProductPage
      eyebrow="Oil Seeds Export"
      heroImg={[sesame.url, niger.url, sunflower.url]}
      title="The golden harvest the world keeps coming back for."
      intro="Sesame, Niger seed, soybean, linseed and sunflower handled through careful sourcing, cleaning, sorting, packaging and export documentation."
      highlights={[
        { title: "Available Varieties", desc: "Sesame, Niger seed, soybean, linseed and sunflower for global commodity buyers." },
        { title: "Packaging Options", desc: "Buyer-aligned packing, bagging and shipment preparation for container export." },
        { title: "Shipping Methods", desc: "Road-to-port coordination and container logistics for international delivery." },
      ]}
      itemsHeading="Oil seeds available for export"
      itemsSubheading="Key oil seed items listed with images so buyers can review the category before requesting a quote."
      items={[
        { img: sesame.url, title: "Sesame Seeds", desc: "Export-grade sesame seeds for food processors and traders.", note: "Cleaned, graded and packed for shipment." },
        { img: niger.url, title: "Niger Seed", desc: "Niger seed for oil extraction and bird feed supply chains.", note: "Quality checked before dispatch." },
        { img: sunflower.url, title: "Sunflower Seed", desc: "Sunflower seed for edible oil and processing customers.", note: "Flexible packing for export orders." },
        { img: flax.url, title: "Flaxseed", desc: "Cleaned flaxseed for food and oil processing markets.", note: "Graded and bagged for shipment." },
        { img: castor.url, title: "Castor Seed", desc: "Castor seed for industrial oil and processing buyers.", note: "Packed according to order volume." },
        { img: groundnuts.url, title: "Groundnuts", desc: "Groundnuts for edible oil, snack and trading markets.", note: "Sorted and prepared for export." },
      ]}
      supportHeading="Oil seed varieties prepared for bulk international trade."
      support={[
        { eyebrow: "Cleaning", title: "Preparation", desc: "Cleaning and sorting workflows for export-ready oil seed supply." },
        { eyebrow: "Packaging", title: "Bulk bags", desc: "Buyer-aligned packaging options for containerized shipment." },
        { eyebrow: "Documents", title: "Export ready", desc: "Origin, invoice, packing and inspection paperwork coordination." },
        { eyebrow: "Related", title: "Pulses supply", desc: "Combine oil seeds and pulses into broader sourcing programs." },
      ]}
      ctaHeading="Request current oil seed availability, packing and shipment support."
      ctaButtonText="Request Oil Seeds Quote"
    />
  );
}
