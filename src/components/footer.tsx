import { Container } from "@/components/ui/container";
import { portfolioContent } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-3 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {portfolioContent.profile.name} | {portfolioContent.profile.role}
        </p>
        <p>Portafolio construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.</p>
      </Container>
    </footer>
  );
}
