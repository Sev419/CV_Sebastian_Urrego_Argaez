import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type HeroAction = {
  label: string;
  href: string;
};

type HeroFact = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  facts?: HeroFact[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  facts = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-14 sm:pt-18">
      <Container className="relative">
        <div className="absolute left-6 top-6 h-40 w-40 rounded-full bg-accent-400/14 blur-3xl" />
        <div className="absolute right-10 top-16 h-32 w-32 rounded-full bg-sand/10 blur-3xl" />

        <Reveal>
          <div className="glass-panel accent-grid relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-200">
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                  {eyebrow}
                </div>
                <div className="space-y-4">
                  <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    {title}
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">{description}</p>
                </div>

                {actions.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {actions.map((action, index) => (
                      <Link
                        key={action.href + action.label}
                        href={action.href}
                        className={
                          index === 0
                            ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink-950 transition hover:bg-sand"
                            : "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                        }
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="glass-tile p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-base font-medium leading-7 text-white">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
