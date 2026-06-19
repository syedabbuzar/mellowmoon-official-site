import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight } from "lucide-react";
import img from "@/assets/training.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Internship & Training — MellowMoon SoftTech" },
      { name: "description", content: "Internship and training programmes for BCA, MCA, Diploma and Engineering students — real engineering on live client projects." },
      { property: "og:title", content: "Internship & Training — MellowMoon SoftTech" },
      { property: "og:description", content: "Real engineering experience for students who want to build, not just learn." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const tracks = [
  { t: "Full-Stack Web", d: "React, TypeScript, Node, Postgres, REST & GraphQL. Ship a real app from scratch." },
  { t: "Hybrid Mobile", d: "React Native + Expo. Build, test and submit a mobile app to the stores." },
  { t: "AI & Automation", d: "LLMs, RAG, agents, function calling. Build a working AI product." },
  { t: "Cloud & DevOps", d: "Docker, CI/CD, observability. Deploy what you build, properly." },
];

function TrainingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Internship & Training"
        title="Learn engineering by building real software."
        subtitle="A structured 8–24 week programme for BCA, MCA, Diploma and Engineering students. Live client projects. Senior mentorship. A real portfolio at the end."
      />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-start">
        <img src={img} alt="" width={1600} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Who this is for</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Students from BCA, MCA, Diploma and Engineering streams (CSE, IT, ECE) who want
            to graduate with real engineering experience — not just a certificate. We accept a
            small cohort each intake so every intern gets serious mentor time and ships work
            that ends up in their portfolio.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Live client projects", "1:1 senior mentor", "Code review every week", "Portfolio & GitHub help", "Interview preparation", "Letter of recommendation"].map((c) => (
              <li key={c} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-maroon shrink-0" />{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 border-y border-border">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl">Tracks</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {tracks.map((tr) => (
              <div key={tr.t} className="bg-card p-8 border border-border">
                <h3 className="font-display text-2xl">{tr.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tr.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Ready to apply?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Send us your CV and a short note about what you want to build. We'll get back within a week.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-maroon text-cream px-7 py-3.5 font-medium hover:bg-maroon-light">
            Apply now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
