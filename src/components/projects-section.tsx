import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title="Proyectos que muestran construccion full stack, analitica y exploracion en IA."
            description="Cada caso esta redactado para dejar claro el problema, el enfoque tecnico y el tipo de valor que Sebastian busca construir con software y datos."
          />
        </Reveal>

        <div className="grid gap-8">
          {portfolioContent.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="glass-panel accent-grid relative overflow-hidden">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-accent-400/10 blur-3xl" />
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="border-b border-white/8 bg-gradient-to-br from-accent-400/16 via-white/[0.02] to-transparent p-8 lg:border-b-0 lg:border-r">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                        {project.category}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ink-200">
                        Caso 0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-base leading-8 text-ink-200">{project.summary}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="glass-tile px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                          Rol
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white">{project.role}</p>
                      </div>
                      <div className="glass-tile px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                          Estado
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white">{project.status}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="glass-tile p-4">
                          <p className="font-display text-xl font-semibold text-white">{metric.value}</p>
                          <p className="mt-2 text-sm text-ink-300">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.length > 0 ? (
                        project.links.map((link) => (
                          <a
                            key={link.label + link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={
                              link.kind === "demo"
                                ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-sand"
                                : "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                            }
                          >
                            {link.label}
                          </a>
                        ))
                      ) : (
                        <>
                          <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-ink-300">
                            Espacio listo para demo
                          </div>
                          <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-ink-300">
                            Espacio listo para repositorio
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 p-8">
                    <div className="glass-tile p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent-300">
                        Desafio
                      </p>
                      <p className="mt-3 text-base leading-8 text-ink-200">{project.challenge}</p>
                    </div>
                    <div className="glass-tile p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent-300">
                        Solucion
                      </p>
                      <p className="mt-3 text-base leading-8 text-ink-200">{project.solution}</p>
                    </div>
                    <div className="glass-tile p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent-300">
                        Impacto
                      </p>
                      <p className="mt-3 text-base leading-8 text-ink-200">{project.impact}</p>
                    </div>
                    <div className="glass-tile p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent-300">
                        Highlights
                      </p>
                      <div className="mt-4 grid gap-3">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-ink-200"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-ink-200 transition hover:border-accent-300/25 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
