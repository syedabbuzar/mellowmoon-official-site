import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function ServiceDetail({
  eyebrow,
  title,
  subtitle,
  intro,
  capabilities,
  outcomes,
  image,
  process,
  tech,
  whyUs,
  faqs,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  capabilities: string[];
  outcomes: { v: string; l: string }[];
  image: string;
  process?: { step: string; title: string; desc: string }[];
  tech?: string[];
  whyUs?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">What we build</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{intro}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
            {capabilities.map((c) => (
              <li key={c} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-maroon shrink-0" />{c}</li>
            ))}
          </ul>
          <div className="mt-10 flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-maroon text-cream px-6 py-3 font-medium hover:bg-maroon-light transition-colors">
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center px-6 py-3 border border-border text-foreground hover:bg-secondary transition-colors">
              All services
            </Link>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="lg:sticky lg:top-32">
            <img src={image} alt="" width={1200} height={800} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <div className="mt-6 grid grid-cols-3 gap-4 bg-secondary/60 p-6 border border-border">
              {outcomes.map((o) => (
                <div key={o.l}>
                  <div className="font-display text-2xl md:text-3xl text-maroon font-medium">{o.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{o.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {whyUs && whyUs.length > 0 && (
        <section className="bg-secondary/40 border-y border-border py-20">
          <div className="container-x">
            <Reveal>
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.2em] text-maroon font-medium">Why us</div>
                <h2 className="font-display text-3xl md:text-4xl mt-3">Why teams choose MellowMoon</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="bg-card border border-border p-7 h-full">
                    <Sparkles className="h-5 w-5 text-maroon" />
                    <h3 className="mt-4 font-display text-xl">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {process && process.length > 0 && (
        <section className="container-x py-20">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-medium">How we work</div>
              <h2 className="font-display text-3xl md:text-4xl mt-3">A simple, repeatable process</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="border border-border bg-card p-6 h-full">
                  <div className="font-display text-3xl text-gradient-gold">{p.step}</div>
                  <h3 className="mt-3 font-display text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {tech && tech.length > 0 && (
        <section className="bg-secondary/40 border-y border-border py-16">
          <div className="container-x">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-maroon font-medium">Tech we use</div>
              <h2 className="font-display text-3xl md:text-4xl mt-3">Modern, proven tooling</h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-sm px-4 py-2 bg-card border border-border">{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="container-x py-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Frequently asked</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) as 0 | 1}>
                <div>
                  <h3 className="font-medium text-base">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="bg-maroon text-cream py-16">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Ready to start your project?</h3>
            <p className="mt-2 text-cream/80">Tell us about your goals — we'll come back with a plan.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-cream text-maroon-dark px-6 py-3 font-medium hover:bg-white transition-colors">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
