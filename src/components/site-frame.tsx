import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,159,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(214,181,122,0.1),transparent_20%),linear-gradient(180deg,rgba(11,16,32,0.18),rgba(11,16,32,0.75))]" />
      <div className="pointer-events-none fixed inset-0 bg-grid bg-[size:72px_72px] opacity-[0.18]" />
      <div className="pointer-events-none fixed left-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-accent-400/8 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-sand/6 blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(7,10,18,0.28)_100%)]" />
      <div className="relative">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
