import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import heroImg from "@/assets/cat-machinery.jpg";
import constructionImg from "@/assets/cat-construction.jpg";
import uLoader from "@/assets/u-loader.jpg.asset.json";
import uExcavator from "@/assets/u-excavator.jpg.asset.json";
import uHitachi from "@/assets/u-hitachi.jpg.asset.json";
import uDevelon from "@/assets/u-develon.jpg.asset.json";

export const Route = createFileRoute("/machinery-imports")({
  head: () => ({
    meta: [
      { title: "Construction Machines & Spare Parts — ZYGC Global Trade" },
      { name: "description", content: "ZYGC Global Trade imports excavators, bulldozers, wheel loaders, tower cranes, industrial plants, farming equipment and genuine spare parts into Ethiopia." },
      { property: "og:title", content: "Construction Machines & Spare Parts — ZYGC Global Trade" },
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
      eyebrow="Construction Machines & Spare Parts"
      heroImg={[uLoader.url, uExcavator.url, uHitachi.url, uDevelon.url]}
      title="The heavy iron that builds a nation."
      intro="We import heavy-duty construction machinery, genuine spare parts and technical assets to fuel local infrastructure development and supply the Ethiopian market."
      highlights={[
        { title: "Construction Machinery", desc: "Excavators, bulldozers, wheel loaders and tower cranes for large-scale works." },
        { title: "Genuine Spare Parts", desc: "Specialized spare parts and technical tools that keep project fleets running." },
        { title: "Project Logistics", desc: "Customs clearance, inland transport and site delivery across Ethiopia." },
      ]}
      itemsHeading="Machines & parts we import"
      itemsSubheading="Sourced from established international manufacturers and delivered with customs clearance and project logistics support."
      items={[
        { img: uExcavator.url, title: "Excavators", desc: "Tracked and wheeled excavators for earthworks and civil projects.", note: "Sourcing, shipping, customs clearance and site delivery handled end to end." },
        { img: uDevelon.url, title: "Bulldozers", desc: "Dozers for site preparation, road works and bulk earthmoving.", note: "Model selection matched to project scope and ground conditions." },
        { img: uLoader.url, title: "Wheel Loaders", desc: "Loaders for material handling on construction and quarry sites.", note: "New and certified equipment with spare parts availability." },
        { img: constructionImg, title: "Tower Cranes", desc: "Tower cranes for vertical construction and high-rise developments.", note: "Import permits, transport and erection coordination supported." },
        { img: uHitachi.url, title: "Spare Parts", desc: "Genuine spare parts and technical tools for heavy machinery fleets.", note: "Fast sourcing to minimize downtime on active project sites." },
        { img: heroImg, title: "Farming Equipment", desc: "Tractors and mechanized farming equipment for agricultural operations.", note: "Sourced to strengthen local agricultural productivity." },
      ]}
      supportHeading="Import support from manufacturer to project site."
      support={[
        { eyebrow: "Sourcing", title: "Certified suppliers", desc: "Equipment procured from established international manufacturers." },
        { eyebrow: "Customs", title: "Clearance", desc: "Import permits, duty handling and port clearance managed in-house." },
        { eyebrow: "Logistics", title: "Site delivery", desc: "Inland transport and delivery to project sites across Ethiopia." },
        { eyebrow: "Aftercare", title: "Spare parts", desc: "Supply of specialized spare parts and technical tools after delivery." },
      ]}
      ctaHeading="Need construction machines or spare parts imported into Ethiopia?"
      ctaButtonText="Request Equipment Quote"
    />
  );
}
