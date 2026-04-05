import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFrame } from "@/components/site-frame";
import { portfolioContent } from "@/content/portfolio";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: portfolioContent.seo.title,
  description: portfolioContent.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`}>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
