import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Bot, Globe2, Smartphone, Code2, Database, Building2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MellowMoon SoftTech Pvt Ltd" },
      { name: "description", content: "AI agents, web & mobile applications, custom software, CRM, inventory and business websites built by MellowMoon SoftTech." },
      { property: "og:title", content: "Services — MellowMoon SoftTech" },
      { property: "og:description", content: "Everything we build for our clients, in one place." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const items = [
  { icon: Bot, title: "Agentic AI", to: "/services/agentic-ai", desc: "Autonomous agents that reason, plan and operate across your tools and data." },
  { icon: Globe2, title: "Web Applications", to: "/services/web-apps", desc: "Production-grade web platforms — performant, accessible, built to scale." },
  { icon: Smartphone, title: "Hybrid Mobile Apps", to: "/services/mobile-apps", desc: "One codebase. iOS, Android and the web — shipped fast, kept native-feeling." },
  { icon: Code2, title: "Custom Software", to: "/services/custom-software", desc: "Bespoke business software, shaped exactly around how your operation actually works." },
  { icon: Database, title: "CRM & Inventory", to: "/services/crm-inventory", desc: "Sales pipelines, inventory portals and ops dashboards that grow with the team." },
  { icon: Building2, title: "Business Websites", to: "/services/business-sites", desc: "Real-estate, education, retail and service sites — fully responsive and conversion-led." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Engineered services for businesses that take software seriously."
        subtitle="From a single web app to a multi-product platform, we plan, design, build and operate software end-to-end."
      />
      <section className="container-x py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((s) => (
            <Link key={s.title} to={s.to} className="group bg-card p-8 hover:bg-maroon hover:text-cream transition-colors">
              <s.icon className="h-8 w-8 text-maroon group-hover:text-gold" />
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-cream/80 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon group-hover:text-gold">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
