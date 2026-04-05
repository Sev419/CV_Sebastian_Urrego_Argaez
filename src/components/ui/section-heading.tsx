import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  aside?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  aside,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="space-y-4">
        <div className={`flex ${centered ? "justify-center" : "justify-start"}`}>
          <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            {eyebrow}
          </p>
        </div>
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-ink-200 sm:text-lg">{description}</p>
      </div>
      {aside}
    </div>
  );
}
