import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { sharedProcess, sharedWhy, sharedFaqs } from "@/lib/service-extras";
// duplicate-removed:
import { ServiceDetail as _SD } from "@/components/site/ServiceDetail";
import img from "@/assets/service-crm.jpg";

export const Route = createFileRoute("/services/crm-inventory")({
  head: () => ({
    meta: [
      { title: "CRM & Inventory Portals — MellowMoon SoftTech" },
      { name: "description", content: "Custom CRM, inventory and operations portals that scale with your team and your stock." },
      { property: "og:title", content: "CRM & Inventory Portals — MellowMoon SoftTech" },
      { property: "og:description", content: "Sales, inventory and ops portals built for growing teams." },
      { property: "og:url", content: "/services/crm-inventory" },
    ],
    links: [{ rel: "canonical", href: "/services/crm-inventory" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="CRM, inventory & operations portals."
      subtitle="The backbone systems your team lives in every day — designed for clarity, speed and the way you actually run the business."
      intro="From lead capture and pipeline management to multi-warehouse inventory, purchase orders, GST-ready invoicing and reporting — we build the operational portals SMEs need. Role-based access, audit logs, integrations with WhatsApp, payments and accounting tools are standard."
      capabilities={[
        "Sales pipeline & CRM",
        "Multi-warehouse inventory",
        "Purchase orders & invoicing",
        "Role-based access & audit logs",
        "WhatsApp / Email / SMS",
        "Reports & dashboards",
      ]}
      outcomes={[
        { v: "1", l: "Source of truth" },
        { v: "30%", l: "Faster ops" },
        { v: "GST", l: "Compliant" },
      ]}
      image={img}
      whyUs={sharedWhy}
      process={sharedProcess}
      tech={["React","Node.js","Postgres","Redis","WhatsApp API","Razorpay","Stripe","Tally Integration","GST APIs","Reporting"]}
      faqs={sharedFaqs}
    />
  ),
});
