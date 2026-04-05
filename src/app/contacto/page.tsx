import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { portfolioContent } from "@/content/portfolio";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Una vista clara y profesional para convertir interes en conversacion."
        description={portfolioContent.contact.description}
        actions={[
          { label: "Volver a inicio", href: "/" },
          { label: "Ver proyectos", href: "/proyectos" },
        ]}
        facts={[
          { label: "Correo", value: "surrego@correo.iue.edu.co" },
          { label: "Ubicacion", value: portfolioContent.profile.location },
          { label: "Disponibilidad", value: portfolioContent.profile.availability },
          { label: "Enfoque", value: "Oportunidades, practicas y proyectos" },
        ]}
      />
      <ContactSection />
    </>
  );
}
