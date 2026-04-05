import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function ProcessSection() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Proceso"
            title="Una forma de trabajar pensada para proyectos serios."
            description="La pagina refuerza que no eres solo alguien que ejecuta tareas: eres un perfil que entiende problemas, disena soluciones y construye con criterio."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioContent.process.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="glass-panel accent-grid relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                  {step.eyebrow}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink-200">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
