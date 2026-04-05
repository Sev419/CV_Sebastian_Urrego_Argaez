import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export function PageCta({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: PageCtaProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <Container>
        <Reveal>
          <div className="accent-grid relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-accent-400/16 via-white/[0.03] to-white/[0.05] p-8 shadow-glow sm:p-10 lg:p-12">
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-sand/12 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">
                  {eyebrow}
                </p>
                <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href={primary.href}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink-950 transition hover:bg-sand"
                >
                  {primary.label}
                </Link>
                {secondary ? (
                  <Link
                    href={secondary.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    {secondary.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
