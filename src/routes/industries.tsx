import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { GraduationCap, Building2, Sparkles, ShoppingBag, Stethoscope, Rocket, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — MellowMoon SoftTech" },
      { name: "description", content: "Education, beauty & wellness, real estate, retail, healthcare, startups — the industries we build software for." },
      { property: "og:title", content: "Industries — MellowMoon SoftTech" },
      { property: "og:description", content: "The industries we know how to build for." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { i: GraduationCap, t: "Education", d: "Institutional websites, admissions portals, learning platforms and student management systems." },
  { i: Sparkles, t: "Beauty & Wellness", d: "Booking systems, service catalogues and brand sites for salons, parlours and spas." },
  { i: Building2, t: "Real Estate", d: "Project listings, floor-plan viewers, lead-capture and developer portals." },
  { i: ShoppingBag, t: "Retail & Inventory", d: "POS, multi-warehouse inventory, GST-ready billing and e-commerce." },
  { i: Stethoscope, t: "Healthcare", d: "Appointment systems, clinic management and patient-facing portals." },
  { i: Rocket, t: "Startups", d: "MVPs, product launches and the engineering capacity to scale them once they hit." },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title="The industries we build for."
        subtitle="We bring domain context with us. These are the sectors where we've shipped real work — and the patterns we know cold."
      />
      <section className="container-x py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {industries.map((s) => (
            <div key={s.t} className="bg-card p-8">
              <s.i className="h-8 w-8 text-maroon" />
              <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-maroon text-cream px-7 py-3.5 font-medium hover:bg-maroon-light">
            Don't see your industry? Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
