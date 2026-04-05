"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/container";
import { portfolioContent } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { profile, navigation } = portfolioContent;
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink-950/70 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-sm text-ink-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-base font-semibold text-white">
              {profile.initials}
            </span>
            <span className="hidden sm:block">
              <strong className="block font-semibold text-white">{profile.name}</strong>
              <span className="text-ink-300">{profile.role}</span>
            </span>
          </Link>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contacto"
              className="rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-3 text-sm font-semibold text-accent-100 transition hover:border-accent-300/60 hover:bg-accent-400/20"
            >
              Disponibilidad
            </Link>
          </motion.div>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap",
                  isActive
                    ? "border-accent-300/40 bg-accent-400/10 text-white"
                    : "border-white/8 bg-white/[0.03] text-ink-300 hover:border-white/16 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
