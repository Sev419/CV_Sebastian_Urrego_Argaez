import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/content/portfolio";

export function TrustStrip() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-4 rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-5">
            {portfolioContent.trustStrip.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm font-medium text-ink-200"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
