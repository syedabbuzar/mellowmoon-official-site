import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import img from "@/assets/case-realestate.jpg";

export const Route = createFileRoute("/services/business-sites")({
  head: () => ({
    meta: [
      { title: "Business Websites — MellowMoon SoftTech" },
      { name: "description", content: "Real-estate, education, retail and service websites — fully responsive, SEO-ready and built to convert." },
      { property: "og:title", content: "Business Websites — MellowMoon SoftTech" },
      { property: "og:description", content: "Websites for every kind of business, built to convert." },
      { property: "og:url", content: "/services/business-sites" },
    ],
    links: [{ rel: "canonical", href: "/services/business-sites" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Business websites that win the click."
      subtitle="Real-estate portals, educational campuses, beauty studios, retailers, service providers — we build the website your business deserves."
      intro="Custom design, fully responsive, SEO-ready, and tuned for conversion. We've built sites for educational campuses, beauty parlours, real-estate developers and dozens of other SMEs — each shaped to match the brand, the audience and the goal."
      capabilities={[
        "Custom brand-led design",
        "Fully responsive across devices",
        "SEO & analytics from day one",
        "Booking, enquiry & lead capture",
        "CMS so you stay in control",
        "Hosting, maintenance & support",
      ]}
      outcomes={[
        { v: "100%", l: "Responsive" },
        { v: "SEO", l: "Optimised" },
        { v: "100%", l: "Satisfaction" },
      ]}
      image={img}
    />
  ),
});
