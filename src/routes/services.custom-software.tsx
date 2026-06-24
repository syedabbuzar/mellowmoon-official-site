import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { sharedProcess, sharedWhy, sharedFaqs } from "@/lib/service-extras";
import img from "@/assets/service-web.jpg";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      { title: "Custom Software — MellowMoon SoftTech" },
      { name: "description", content: "Bespoke software shaped exactly around the way your business actually works." },
      { property: "og:title", content: "Custom Software — MellowMoon SoftTech" },
      { property: "og:description", content: "Software that fits your operation, not the other way around." },
      { property: "og:url", content: "/services/custom-software" },
    ],
    links: [{ rel: "canonical", href: "/services/custom-software" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Custom software, built around your business."
      subtitle="When off-the-shelf tools force compromise, we build software that fits your operation exactly — and integrates cleanly with what you already use."
      intro="Discovery, product design, architecture, build, integration, deployment and operations — handled end-to-end. We work in small senior teams with weekly demos so you always see what's shipping. Codebases come with documentation, tests and a clean handover plan."
      capabilities={[
        "Discovery & product design",
        "Architecture & integrations",
        "End-to-end build",
        "QA, security & performance",
        "Cloud deployment & DevOps",
        "Documentation & handover",
      ]}
      outcomes={[
        { v: "8–16w", l: "Typical MVP" },
        { v: "Weekly", l: "Demos" },
        { v: "Yours", l: "Codebase" },
      ]}
      image={img}
      whyUs={sharedWhy}
      process={sharedProcess}
      tech={["TypeScript","Python","Java","Node.js","Postgres","Docker","Kubernetes","AWS","Azure","CI/CD"]}
      faqs={sharedFaqs}
    />
  ),
});
