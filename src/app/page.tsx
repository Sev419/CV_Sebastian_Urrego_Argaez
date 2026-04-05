import { HeroSection } from "@/components/hero-section";
import { HomeExploreGrid } from "@/components/home-explore-grid";
import { PageCta } from "@/components/page-cta";
import { ProcessSection } from "@/components/process-section";
import { TrustStrip } from "@/components/trust-strip";
import { portfolioContent } from "@/content/portfolio";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <HomeExploreGrid />
      <ProcessSection />
      <PageCta
        eyebrow="Siguiente paso"
        title="Explora el portafolio por vistas dedicadas y encuentra rapido lo que quieres revisar."
        description={portfolioContent.profile.summary}
        primary={{ label: "Ir a proyectos", href: "/proyectos" }}
        secondary={{ label: "Contactar", href: "/contacto" }}
      />
    </>
  );
}
