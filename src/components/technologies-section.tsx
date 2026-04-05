import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function TechnologiesSection() {
  const { technologies } = portfolioContent;

  return (
    <section id="tecnologias" className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow={technologies.eyebrow}
            title={technologies.title}
            description={technologies.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {technologies.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="glass-panel accent-grid relative overflow-hidden p-7">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent-400/10 blur-3xl" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                      Categoria
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">{group.title}</h3>
                  </div>
                  <span className="rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-100">
                    {group.items.length} tools
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-ink-950/70 px-4 py-2 text-sm text-ink-100"
                    >
                      {item}
                    </span>
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
