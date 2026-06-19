import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ServiceDetail({
  eyebrow,
  title,
  subtitle,
  intro,
  capabilities,
  outcomes,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  capabilities: string[];
  outcomes: { v: string; l: string }[];
  image: string;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
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
        </div>
        <div className="lg:sticky lg:top-32">
          <img src={image} alt="" width={1200} height={800} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="mt-6 grid grid-cols-3 gap-4 bg-secondary/40 p-6 border border-border">
            {outcomes.map((o) => (
              <div key={o.l}>
                <div className="font-display text-2xl md:text-3xl text-maroon font-medium">{o.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{o.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
