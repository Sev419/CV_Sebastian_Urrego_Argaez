import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectsSection } from "@/components/projects-section";
import { portfolioContent } from "@/content/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Casos con mas protagonismo, mejor lectura y espacio real para crecer como case studies."
        description="Desde sistemas administrativos hasta dashboards, ML y vision artificial, esta vista presenta mejor el problema, la solucion, el rol asumido y el valor profesional de cada proyecto."
        actions={[
          { label: "Contactar", href: "/contacto" },
          { label: "Ver capacidades", href: "/capacidades" },
        ]}
        facts={[
          { label: "Casos", value: `${portfolioContent.projects.length} proyectos destacados` },
          { label: "Cobertura", value: "Full stack, data, dashboards e IA" },
          { label: "Enfoque", value: "Problema, rol, solucion e impacto" },
          { label: "Listo para", value: "Demo y repositorio por proyecto" },
        ]}
      />
      <ProjectsSection />
      <PageCta
        eyebrow="Siguiente vista"
        title="Si te interesa como abordo problemas reales, la pagina de capacidades resume mi forma de aportar."
        description="Alli organizo fortalezas tecnicas y analiticas de forma mas estrategica, conectando desarrollo, datos e inteligencia artificial aplicada."
        primary={{ label: "Ver capacidades", href: "/capacidades" }}
        secondary={{ label: "Contactar", href: "/contacto" }}
      />
    </>
  );
}
