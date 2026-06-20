import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-maroon text-cream relative overflow-hidden pt-32 md:pt-40">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 45%)" }}
      />
      <div className="container-x py-20 md:py-24 relative">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{eyebrow}</div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-medium max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-cream/80 text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
