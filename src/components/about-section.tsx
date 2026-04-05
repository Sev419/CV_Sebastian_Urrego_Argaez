import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function AboutSection() {
  const { about } = portfolioContent;

  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="glass-panel accent-grid relative overflow-hidden p-7">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-300/70 via-white/0 to-white/0" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                Enfoque profesional
              </p>
              <p className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Desarrollo software y analisis con una mirada orientada a utilidad, claridad y evolucion.
              </p>
              <div className="mt-6 grid gap-4">
                {about.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="glass-tile px-5 py-4 text-base leading-7 text-ink-200"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-panel relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent-400/10 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                Datos clave
              </p>
              <div className="mt-6 grid gap-4">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 transition hover:border-accent-300/20"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-white">{fact.value}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
