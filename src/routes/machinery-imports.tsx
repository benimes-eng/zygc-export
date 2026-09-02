import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-machinery.jpg";
import machineryImg from "@/assets/cat-machinery.jpg";
import constructionImg from "@/assets/cat-construction.jpg";

export const Route = createFileRoute("/machinery-imports")({
  head: () => ({
    meta: [
      { title: "Machinery Imports — ZYGC Global Trade" },
      { name: "description", content: "ZYGC Global Trade imports excavators, bulldozers, wheel loaders, tower cranes, industrial plants and mechanized farming equipment into Ethiopia." },
      { property: "og:title", content: "Machinery Imports — ZYGC Global Trade" },
      { property: "og:description", content: "Heavy construction machinery, industrial plants, farming equipment and project spare parts imported for the Ethiopian market." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MachineryPage,
});

function MachineryPage() {
  return (
    <ProductPage
      eyebrow="Industrial & Machinery Imports"
      heroImg={heroImg}
      title="Heavy machinery and industrial equipment imported for Ethiopian projects."
      intro="We import heavy-duty machinery, industrial plants and technical assets to fuel local infrastructure development and supply the Ethiopian market."
      highlights={[
        { title: "Construction Machinery", desc: "Excavators, bulldozers, wheel loaders and tower cranes for large-scale works." },
        { title: "Industrial & Agricultural Equipment", desc: "Industrial manufacturing plants, processing machinery and mechanized farming equipment." },
        { title: "Project Logistics", desc: "Specialized spare parts and technical tools required for large engineering projects." },
      ]}
      itemsHeading="Equipment we import"
      itemsSubheading="Sourced from established international manufacturers and delivered with customs clearance and project logistics support."
      items={[
        { img: machineryImg, title: "Excavators", desc: "Tracked and wheeled excavators for earthworks and civil projects.", note: "Sourcing, shipping, customs clearance and site delivery handled end to end." },
        { img: machineryImg, title: "Bulldozers", desc: "Dozers for site preparation, road works and bulk earthmoving.", note: "Model selection matched to project scope and ground conditions." },
        { img: machineryImg, title: "Wheel Loaders", desc: "Loaders for material handling on construction and quarry sites.", note: "New and certified equipment with spare parts availability." },
        { img: constructionImg, title: "Tower Cranes", desc: "Tower cranes for vertical construction and high-rise developments.", note: "Import permits, transport and erection coordination supported." },
        { img: machineryImg, title: "Industrial Plants", desc: "Manufacturing and processing plants for industrial investors.", note: "Full plant sourcing including installation and commissioning support." },
        { img: machineryImg, title: "Farming Equipment", desc: "Tractors and mechanized farming equipment for agricultural operations.", note: "Sourced to strengthen local agricultural productivity." },
      ]}
      supportHeading="Import support from manufacturer to project site."
      support={[
        { eyebrow: "Sourcing", title: "Certified suppliers", desc: "Equipment procured from established international manufacturers." },
        { eyebrow: "Customs", title: "Clearance", desc: "Import permits, duty handling and port clearance managed in-house." },
        { eyebrow: "Logistics", title: "Site delivery", desc: "Inland transport and delivery to project sites across Ethiopia." },
        { eyebrow: "Aftercare", title: "Spare parts", desc: "Supply of specialized spare parts and technical tools after delivery." },
      ]}
      ctaHeading="Need machinery or industrial equipment imported into Ethiopia?"
      ctaButtonText="Request Equipment Quote"
    />
  );
}
