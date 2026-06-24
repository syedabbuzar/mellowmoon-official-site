import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { sharedProcess, sharedWhy, sharedFaqs } from "@/lib/service-extras";
import img from "@/assets/service-web.jpg";

export const Route = createFileRoute("/services/web-apps")({
  head: () => ({
    meta: [
      { title: "Web Applications — MellowMoon SoftTech" },
      { name: "description", content: "Production-grade web applications engineered for performance, scale and longevity." },
      { property: "og:title", content: "Web Applications — MellowMoon SoftTech" },
      { property: "og:description", content: "Production-grade web platforms, built to last." },
      { property: "og:url", content: "/services/web-apps" },
    ],
    links: [{ rel: "canonical", href: "/services/web-apps" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Web applications, engineered to last."
      subtitle="From SaaS platforms to internal tools to high-traffic portals — built on modern stacks with engineering you can audit."
      intro="We build full-stack web applications using React, Next.js / TanStack, TypeScript, Node and Postgres. Every project is designed for accessibility, performance and a clean operational story — so you can grow the team and the product without rebuilding from scratch in two years."
      capabilities={[
        "Multi-tenant SaaS platforms",
        "Customer & admin portals",
        "Internal tools & dashboards",
        "Headless commerce",
        "Auth, billing & integrations",
        "SEO & Core Web Vitals",
      ]}
      outcomes={[
        { v: "99.9%", l: "Uptime" },
        { v: "<1s", l: "P75 load" },
        { v: "A11y", l: "WCAG ready" },
      ]}
      image={img}
      whyUs={sharedWhy}
      process={sharedProcess}
      tech={["React","Next.js","TanStack","TypeScript","Node.js","Postgres","Prisma","Tailwind CSS","AWS","Cloudflare"]}
      faqs={sharedFaqs}
    />
  ),
});
