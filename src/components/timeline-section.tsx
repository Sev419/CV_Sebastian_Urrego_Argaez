import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function TimelineSection() {
  return (
    <section id="trayectoria" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Trayectoria"
            title="Trayectoria en formacion, con experiencia aplicada y foco en crecimiento tecnico."
            description="Esta narrativa conecta formacion academica, proyectos practicos y experiencias relacionadas con desarrollo, analisis y gestion tecnologica."
          />
        </Reveal>

        <div className="relative grid gap-6">
          <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-gradient-to-b from-accent-300/60 via-white/10 to-transparent lg:block" />
          {portfolioContent.timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-panel accent-grid relative grid gap-6 overflow-hidden p-7 lg:grid-cols-[220px_1fr]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent-400/10 blur-3xl" />
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-accent-400" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                      Bloque 0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-sand">{item.subtitle}</p>
                  <p className="text-base leading-8 text-ink-200">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
