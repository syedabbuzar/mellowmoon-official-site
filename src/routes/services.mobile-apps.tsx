import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { sharedProcess, sharedWhy, sharedFaqs } from "@/lib/service-extras";
// duplicate-removed:
import { ServiceDetail as _SD } from "@/components/site/ServiceDetail";
import img from "@/assets/service-mobile.jpg";

export const Route = createFileRoute("/services/mobile-apps")({
  head: () => ({
    meta: [
      { title: "Hybrid Mobile Apps — MellowMoon SoftTech" },
      { name: "description", content: "Hybrid mobile apps for iOS and Android — one codebase, native-feeling experience." },
      { property: "og:title", content: "Hybrid Mobile Apps — MellowMoon SoftTech" },
      { property: "og:description", content: "iOS + Android from one codebase, shipped fast." },
      { property: "og:url", content: "/services/mobile-apps" },
    ],
    links: [{ rel: "canonical", href: "/services/mobile-apps" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Hybrid mobile apps, native-feeling speed."
      subtitle="React Native and Expo apps that ship to iOS, Android and the web from one codebase — without the usual hybrid compromises."
      intro="We build cross-platform mobile apps for startups and SMEs that need to move fast without doubling engineering cost. From MVPs to production apps with offline support, push notifications, payments and native modules, we cover the full lifecycle including store submissions and OTA updates."
      capabilities={[
        "React Native / Expo",
        "Native modules where needed",
        "Offline-first architecture",
        "Payments & push notifications",
        "App Store & Play submissions",
        "OTA updates & monitoring",
      ]}
      outcomes={[
        { v: "1", l: "Codebase" },
        { v: "2x", l: "Faster ship" },
        { v: "60fps", l: "UI" },
      ]}
      image={img}
      whyUs={sharedWhy}
      process={sharedProcess}
      tech={["React Native","Expo","TypeScript","Firebase","Supabase","Stripe","Push Notifications","OTA Updates","App Store","Play Store"]}
      faqs={sharedFaqs}
    />
  ),
});
