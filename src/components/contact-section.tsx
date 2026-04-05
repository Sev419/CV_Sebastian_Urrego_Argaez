import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/content/portfolio";

export function ContactSection() {
  const { contact } = portfolioContent;

  return (
    <section id="contacto" className="pb-20 pt-16 sm:pb-28">
      <Container>
        <Reveal>
          <div className="accent-grid relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-accent-400/16 via-white/[0.03] to-white/[0.05] p-8 shadow-glow sm:p-10 lg:p-12">
            <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">
                  Contacto
                </p>
                <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {contact.title}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">
                  {contact.description}
                </p>
              </div>

              <div className="glass-panel bg-ink-950/75 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                  Canales
                </p>
                <div className="mt-6 space-y-4">
                  {contact.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 text-sm font-medium text-white transition hover:border-accent-300/40 hover:bg-white/[0.06]"
                    >
                      <span>{link.label}</span>
                      <span className="text-accent-200">
                        {link.href.startsWith("mailto:") ? "Escribir" : "Abrir"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
