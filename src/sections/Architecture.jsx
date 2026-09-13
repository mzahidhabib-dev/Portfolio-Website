import { GitBranch, ShieldCheck, Database, Server, CheckCircle2 } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export const Architecture = () => {
  const pillars = [
    {
      id: "state-graphs",
      icon: GitBranch,
      title: "Deterministic State Graphs",
      subtitle: "LangGraph, self-verification nodes, and idempotent loop execution.",
      badge: "AGENTIC CONTROL",
      highlights: [
        "Explicit graph state transitions replacing chaotic unconstrained agent loops",
        "Deterministic self-checking validation nodes before any user delivery",
        "Idempotent state persistence permitting instant checkpoint restarts",
        "Sub-graph isolation for specialized task domain experts",
      ],
    },
    {
      id: "defense-security",
      icon: ShieldCheck,
      title: "Defense-in-Depth Security",
      subtitle: "Upfront PII redaction, prompt injection firewalls, and HITL queues.",
      badge: "SECURITY GATEWAY",
      highlights: [
        "Pre-inference regex & Named Entity Recognition (NER) PII masking",
        "Adversarial prompt injection detection filtering malicious payloads",
        "Human-in-the-Loop (HITL) approval queues for high-risk write operations",
        "Strict zero-data-retention agreements with LLM API providers",
      ],
    },
    {
      id: "hybrid-retrieval",
      icon: Database,
      title: "Hybrid Retrieval & Data Isolation",
      subtitle: "Dense + sparse hybrid vector search, pgvector, and multi-tenant SQL.",
      badge: "RAG INFRASTRUCTURE",
      highlights: [
        "Hybrid BM25 keyword + pgvector semantic embedding retrieval",
        "Multi-modal Gemini Vision extraction for complex tables & diagrams",
        "Strict row-level security (RLS) isolating multi-tenant data stores",
        "Exact source-page citation highlighting in interactive PDF viewers",
      ],
    },
    {
      id: "microservices-apis",
      icon: Server,
      title: "Resilient Microservices & APIs",
      subtitle: "JSON schema validation, exponential backoff, and centralized telemetry.",
      badge: "API RESILIENCE",
      highlights: [
        "Strict Pydantic / TypeScript JSON schema runtime validation",
        "Exponential backoff retries with dead-letter queue (DLQ) alerts",
        "Redis rate-limiting gateways protecting downstream model endpoints",
        "FinOps token tracking monitoring real-time cost-per-transaction",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 border-t border-border-main/50">
      <Container>
        <SectionHeader
          eyebrow="ENGINEERING PILLARS"
          title="Architected for reliability, security, and deterministic outcomes."
          description="Every AI deployment adheres to strict production engineering principles — preventing hallucinations, eliminating data leaks, and guaranteeing sub-second responsiveness."
        />

        {/* 4 Architectural Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.id}
                variant="default"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-accent-subtle text-accent-main border border-accent-main/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="accent">{pillar.badge}</Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-medium">
                    {pillar.subtitle}
                  </p>

                  <div className="pt-4 border-t border-border-main">
                    <h4 className="font-mono text-xs font-semibold text-text-muted uppercase mb-3">
                      KEY ARCHITECTURAL STANDARDS
                    </h4>
                    <ul className="space-y-2.5">
                      {pillar.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Architecture;
