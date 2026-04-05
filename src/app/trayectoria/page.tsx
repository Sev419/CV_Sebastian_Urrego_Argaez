import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { TimelineSection } from "@/components/timeline-section";

export default function TimelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Trayectoria"
        title="Una narrativa mas editorial para mostrar evolucion, formacion y experiencia aplicada."
        description="La trayectoria resume como se conectan formacion academica, practica, proyectos y exploracion tecnica en una misma linea de crecimiento."
        actions={[
          { label: "Ir a contacto", href: "/contacto" },
          { label: "Volver a inicio", href: "/" },
        ]}
        facts={[
          { label: "Etapa", value: "Ultimos semestres de Ingenieria Informatica" },
          { label: "Experiencia", value: "Web, APIs, dashboards y gestion tecnologica" },
          { label: "Intereses", value: "Data, ML, automatizacion y vision artificial" },
          { label: "Direccion", value: "Perfil tecnico con foco aplicado" },
        ]}
      />
      <TimelineSection />
      <PageCta
        eyebrow="Siguiente vista"
        title="Si quieres hablar sobre oportunidades, practicas o proyectos, el siguiente paso es muy simple."
        description="La pagina de contacto centraliza correo, placeholders de telefono y enlaces profesionales para facilitar una conversacion directa."
        primary={{ label: "Ir a contacto", href: "/contacto" }}
        secondary={{ label: "Volver al inicio", href: "/" }}
      />
    </>
  );
}
