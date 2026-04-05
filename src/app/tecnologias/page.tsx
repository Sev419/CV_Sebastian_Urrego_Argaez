import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { TechnologiesSection } from "@/components/technologies-section";
import { portfolioContent } from "@/content/portfolio";

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnologias"
        title="Un stack organizado para construir interfaces, servicios, datos y automatizacion."
        description={portfolioContent.technologies.description}
        actions={[
          { label: "Ver proyectos", href: "/proyectos" },
          { label: "Volver a inicio", href: "/" },
        ]}
        facts={[
          { label: "Frontend", value: "React, Next.js, TypeScript, Tailwind CSS" },
          { label: "Backend", value: "Node.js, NestJS, Python, FastAPI" },
          { label: "Data & AI", value: "Pandas, NumPy, Scikit-learn" },
          { label: "Infra", value: "Docker, Jenkins, Git, Linux/Bash" },
        ]}
      />
      <TechnologiesSection />
      <PageCta
        eyebrow="Siguiente vista"
        title="El stack cobra sentido cuando se traduce en proyectos concretos y resultados visibles."
        description="La seccion de proyectos da mas contexto sobre como aplico estas tecnologias en sistemas, dashboards y experiencias de analitica."
        primary={{ label: "Ver proyectos", href: "/proyectos" }}
        secondary={{ label: "Ver capacidades", href: "/capacidades" }}
      />
    </>
  );
}
