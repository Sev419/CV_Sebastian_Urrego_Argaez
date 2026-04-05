import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioContent } from "@/content/portfolio";

export function HomeExploreGrid() {
  const { home } = portfolioContent;

  return (
    <section className="py-20 sm:py-28">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow={home.eyebrow}
            title={home.title}
            description={home.description}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {home.cards.map((card, index) => (
            <Reveal key={card.href} delay={index * 0.05}>
              <Link
                href={card.href}
                className="group glass-panel accent-grid relative flex h-full flex-col overflow-hidden p-7 transition hover:border-accent-300/35 hover:bg-white/[0.05]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent-400/10 blur-3xl transition group-hover:bg-accent-400/18" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                  {card.eyebrow}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-ink-200">{card.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-100 transition group-hover:text-white">
                  Explorar
                  <span className="transition group-hover:translate-x-1">-&gt;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
