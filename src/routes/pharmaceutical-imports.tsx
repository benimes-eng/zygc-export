import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-pharma.jpg";
import pharmaImg from "@/assets/cat-pharma.jpg";

export const Route = createFileRoute("/pharmaceutical-imports")({
  head: () => ({
    meta: [
      { title: "Pharmaceutical Imports — ZYGC Global Trade" },
      { name: "description", content: "ZYGC Global Trade imports prescription and OTC pharmaceuticals into Ethiopia in cooperation with EFDA, supplying hospitals, pharmacies and NGOs." },
      { property: "og:title", content: "Pharmaceutical Imports — ZYGC Global Trade" },
      { property: "og:description", content: "Essential medicines sourced from certified international manufacturers, EFDA-compliant, distributed to hospitals, pharmacies and NGOs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PharmaPage,
});

function PharmaPage() {
  return (
    <ProductPage
      eyebrow="Pharmaceutical Imports"
      heroImg={[heroImg, pharmaImg]}
      title="Medicine that reaches every corner of Ethiopia."
      intro="Our medical supply wing procures prescription and over-the-counter pharmaceuticals from globally certified manufacturers, clears them through EFDA and distributes them to healthcare networks nationwide."
      highlights={[
        { title: "Sourcing Essential Medicines", desc: "Prescription and OTC pharmaceuticals procured from globally certified international manufacturers." },
        { title: "Regulatory Compliance", desc: "Close cooperation with the Ethiopian Food and Drug Authority (EFDA) for registration, quality clearance and import permits." },
        { title: "B2B Distribution", desc: "Supply to public and private hospitals, retail pharmacies and NGOs in Addis Ababa and regional states." },
      ]}
      itemsHeading="Medical supply capabilities"
      itemsSubheading="A regulated import channel built around product registration, quality clearance and dependable B2B distribution."
      items={[
        { img: pharmaImg, title: "Prescription Medicines", desc: "Registered prescription pharmaceuticals from certified manufacturers.", note: "Product registration and EFDA quality clearance handled before import." },
        { img: pharmaImg, title: "OTC Products", desc: "Over-the-counter medicines for retail pharmacy networks.", note: "Supplied in line with local labelling and regulatory requirements." },
        { img: pharmaImg, title: "Hospital Supply", desc: "Bulk supply for public and private hospitals.", note: "Tender support, scheduled deliveries and documentation provided." },
        { img: pharmaImg, title: "Pharmacy Distribution", desc: "Distribution to retail pharmacies across Addis Ababa and regional states.", note: "Consistent restocking with traceable batch records." },
        { img: pharmaImg, title: "NGO Programs", desc: "Supply to non-governmental health programs and donor projects.", note: "Compliance paperwork and delivery coordination included." },
        { img: pharmaImg, title: "Import Permits", desc: "Customs import permits and clearance for medical goods.", note: "Managed directly with EFDA and customs authorities." },
      ]}
      supportHeading="A compliant, traceable pharmaceutical import channel."
      support={[
        { eyebrow: "Sourcing", title: "Certified makers", desc: "Only globally certified international manufacturers are used." },
        { eyebrow: "EFDA", title: "Registered", desc: "Registrations, quality clearances and import permits secured before shipment." },
        { eyebrow: "Storage", title: "Safe handling", desc: "Products handled and stored to preserve quality until delivery." },
        { eyebrow: "Delivery", title: "B2B network", desc: "Hospitals, pharmacies and NGOs served across Addis Ababa and the regions." },
      ]}
      ctaHeading="Partner with ZYGC for compliant pharmaceutical supply in Ethiopia."
      ctaButtonText="Request Medical Supply Quote"
    />
  );
}
