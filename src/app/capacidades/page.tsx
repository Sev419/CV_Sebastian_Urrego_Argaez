import { CapabilitiesSection } from "@/components/capabilities-section";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { ProcessSection } from "@/components/process-section";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacidades"
        title="Fortalezas presentadas con mas claridad estrategica y mejor lectura visual."
        description="Esta vista organiza como aporto desde desarrollo full stack, analitica, automatizacion e inteligencia artificial aplicada a contextos reales."
        actions={[
          { label: "Ver trayectoria", href: "/trayectoria" },
          { label: "Ver contacto", href: "/contacto" },
        ]}
        facts={[
          { label: "Full Stack", value: "Frontend, backend, APIs y bases de datos" },
          { label: "Analitica", value: "Dashboards, lectura de informacion y ML" },
          { label: "Operacion", value: "Automatizacion y mejora de procesos" },
          { label: "Criterio", value: "Claridad, utilidad y escalabilidad" },
        ]}
      />
      <CapabilitiesSection />
      <ProcessSection />
      <PageCta
        eyebrow="Siguiente vista"
        title="La trayectoria muestra como estas capacidades se han ido construyendo en proyectos, formacion y experiencia aplicada."
        description="Desde formacion academica hasta trabajos practicos en desarrollo, integraciones y analitica, la idea es mostrar evolucion real y consistencia."
        primary={{ label: "Ver trayectoria", href: "/trayectoria" }}
        secondary={{ label: "Ver contacto", href: "/contacto" }}
      />
    </>
  );
}
