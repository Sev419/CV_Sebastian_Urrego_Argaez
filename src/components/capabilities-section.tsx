import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function CapabilitiesSection() {
  return (
    <section id="capacidades" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Capacidades"
            title="Capacidades alineadas con desarrollo, datos y resolucion de problemas."
            description="La propuesta de valor de Sebastian combina implementacion tecnica, interes por la analitica y una mirada practica para construir soluciones completas."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioContent.capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.08}>
              <article className="glass-panel accent-grid relative flex h-full flex-col overflow-hidden p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-sm font-semibold text-accent-100">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{capability.title}</h3>
                <p className="mt-4 text-base leading-8 text-ink-200">{capability.description}</p>
                <div className="mt-8 space-y-3">
                  {capability.points.map((point) => (
                    <div
                      key={point}
                      className="glass-tile px-4 py-3 text-sm text-ink-200"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
