import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { sharedProcess, sharedWhy, sharedFaqs } from "@/lib/service-extras";
import img from "@/assets/service-ai.jpg";

export const Route = createFileRoute("/services/agentic-ai")({
  head: () => ({
    meta: [
      { title: "Agentic AI — MellowMoon SoftTech" },
      { name: "description", content: "Autonomous AI agents that reason, plan and act inside real business workflows." },
      { property: "og:title", content: "Agentic AI — MellowMoon SoftTech" },
      { property: "og:description", content: "Autonomous AI agents for real business workflows." },
      { property: "og:url", content: "/services/agentic-ai" },
    ],
    links: [{ rel: "canonical", href: "/services/agentic-ai" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Agentic AI that gets work done."
      subtitle="We design and ship AI agents that operate inside your data and tools — not chat toys, but production systems."
      intro="From document automation to customer support copilots to internal ops agents, we build LLM-powered systems that reason, plan, call APIs and act with the right guardrails. Built on modern stacks (TypeScript, Python, vector stores, function calling) and integrated cleanly with your existing software."
      capabilities={[
        "Customer support & sales copilots",
        "Document understanding & RAG pipelines",
        "Internal ops & workflow automation",
        "Voice & multimodal agents",
        "Tool / API orchestration",
        "Evaluation, monitoring & guardrails",
      ]}
      outcomes={[
        { v: "10x", l: "Faster ops" },
        { v: "70%", l: "Lower support load" },
        { v: "24/7", l: "Coverage" },
      ]}
      image={img}
      whyUs={sharedWhy}
      process={sharedProcess}
      tech={["Python","TypeScript","LangChain","OpenAI","Anthropic","Pinecone","pgvector","FastAPI","Node.js","Redis"]}
      faqs={sharedFaqs}
    />
  ),
});
