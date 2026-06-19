import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — MellowMoon SoftTech" },
      { name: "description", content: "Open roles and internships at MellowMoon SoftTech Pvt Ltd." },
      { property: "og:title", content: "Careers — MellowMoon SoftTech" },
      { property: "og:description", content: "Join a software house that takes craft seriously." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  { t: "Senior Full-Stack Engineer", l: "Remote / India", k: "React, Node, Postgres" },
  { t: "Mobile Engineer (React Native)", l: "Remote / India", k: "Expo, RN, iOS, Android" },
  { t: "AI Engineer", l: "Remote / India", k: "LLMs, RAG, agents" },
  { t: "Product Designer", l: "Remote / India", k: "Figma, design systems" },
  { t: "Intern — Full-Stack / Mobile / AI", l: "Remote / India", k: "BCA, MCA, Diploma, Engineering" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title="Come build with us."
        subtitle="We hire people who care about craft, communicate clearly and want to ship work they're proud of."
      />
      <section className="container-x py-20">
        <h2 className="font-display text-3xl md:text-4xl">Open roles</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <div key={r.t} className="py-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  {r.t.startsWith("Intern") ? <GraduationCap className="h-4 w-4 text-maroon" /> : <Briefcase className="h-4 w-4 text-maroon" />}
                  <h3 className="font-display text-2xl">{r.t}</h3>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{r.l} · {r.k}</div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-maroon font-medium hover:text-maroon-light">
                Apply <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
