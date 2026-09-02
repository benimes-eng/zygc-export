import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-oilseeds.jpg";
import pSesame from "@/assets/p-sesame.jpg";
import pNiger from "@/assets/p-niger.jpg";
import pSunflower from "@/assets/p-sunflower.jpg";

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
      heroImg={heroImg}
      title="Export-grade oil seeds, cleaned, sorted and shipment-ready."
      intro="Sesame, Niger seed, soybean, linseed and sunflower handled through careful sourcing, cleaning, sorting, packaging and export documentation."
      highlights={[
        { title: "Available Varieties", desc: "Sesame, Niger seed, soybean, linseed and sunflower for global commodity buyers." },
        { title: "Packaging Options", desc: "Buyer-aligned packing, bagging and shipment preparation for container export." },
        { title: "Shipping Methods", desc: "Road-to-port coordination and container logistics for international delivery." },
      ]}
      itemsHeading="Oil seeds available for export"
      itemsSubheading="Key oil seed items listed with images so buyers can review the category before requesting a quote."
      items={[
        { img: pSesame, title: "Sesame Seeds", desc: "Export-grade sesame seeds for food processors and traders.", note: "Cleaning, grading, packing, and shipment documentation support." },
        { img: pNiger, title: "Niger Seed", desc: "Niger seed sourced for oil extraction and bird feed supply chains.", note: "Volume sourcing with quality checks before dispatch." },
        { img: pSunflower, title: "Sunflower Seed", desc: "Sunflower seed supply for edible oil and processing customers.", note: "Flexible packing options and export-ready dispatch coordination." },
        { img: pSesame, title: "Flaxseed", desc: "Cleaned flaxseed supplied for food and oil processing markets.", note: "Grading, bagging, and container loading coordination." },
        { img: pNiger, title: "Castor Seed", desc: "Castor seed sourced for industrial oil and processing buyers.", note: "Quality checks and export packing arranged by order volume." },
        { img: pSunflower, title: "Groundnuts", desc: "Groundnuts supplied for edible oil, snack, and trading markets.", note: "Sorted supply with buyer-aligned packing and dispatch support." },
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
