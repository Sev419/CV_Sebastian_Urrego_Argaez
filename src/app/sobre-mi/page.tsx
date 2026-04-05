import { AboutSection } from "@/components/about-section";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { portfolioContent } from "@/content/portfolio";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mi"
        title="Una vista mas profunda del perfil, la propuesta de valor y la forma en que trabajo."
        description={portfolioContent.about.description}
        actions={[
          { label: "Ver tecnologias", href: "/tecnologias" },
          { label: "Ver proyectos", href: "/proyectos" },
        ]}
        facts={portfolioContent.about.facts}
      />
      <AboutSection />
      <PageCta
        eyebrow="Siguiente vista"
        title="Conoce el stack con el que convierto ideas y procesos en soluciones funcionales."
        description="La pagina de tecnologias organiza el stack por categorias para que sea mas facil leer fortalezas y areas de trabajo."
        primary={{ label: "Ver tecnologias", href: "/tecnologias" }}
        secondary={{ label: "Ver proyectos", href: "/proyectos" }}
      />
    </>
  );
}
