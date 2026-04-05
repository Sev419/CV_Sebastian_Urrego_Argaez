"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { portfolioContent } from "@/content/portfolio";

export function HeroSection() {
  const { hero, profile } = portfolioContent;

  return (
    <section id="inicio" className="relative overflow-hidden pt-14 sm:pt-20">
      <Container className="relative grid items-end gap-12 lg:grid-cols-[1.35fr_0.95fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-200"
          >
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            {hero.eyebrow}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-300">
                {profile.intro}
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {hero.title} <span className="text-sand">{hero.emphasis}</span>
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-200 sm:text-xl">{hero.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.21, 1, 0.32, 1] }}
            className="flex flex-wrap gap-4"
          >
            {hero.actions.map((action, index) => {
              const isPrimary = index === 0;
              const isExternal = action.href.startsWith("http");

              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={
                    isPrimary
                      ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink-950 transition hover:bg-sand"
                      : "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  }
                >
                  {action.label}
                </Link>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.21, 1, 0.32, 1] }}
            className="flex flex-wrap gap-3"
          >
            {hero.badges.map((badge) => (
              <span
                key={badge.label}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-100"
              >
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.21, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="absolute inset-6 rounded-[2rem] bg-accent-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Perfil profesional</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">{profile.role}</h2>
              </div>
              <span className="rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent-100">
                {profile.availability}
              </span>
            </div>

            <div className="space-y-6 py-6">
              <p className="text-base leading-8 text-ink-200">{profile.summary}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/8 bg-ink-900/60 p-4">
                    <p className="font-display text-xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-ink-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-ink-950/70 p-5 sm:grid-cols-2">
              {hero.quickFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-sm uppercase tracking-[0.25em] text-accent-300">{fact.label}</p>
                  <p className="mt-2 text-base font-medium text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
