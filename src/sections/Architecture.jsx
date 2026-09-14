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
      title: "Deterministic State Machines",
      subtitle: "LangGraph workflows, self-verification nodes, and human approval gates.",
      badge: "AGENTIC CONTROL",
      highlights: [
        "Strict graph state transitions preventing chaotic, runaway agent loops",
        "Automated self-verification nodes checking factual accuracy before output delivery",
        "Human-in-the-Loop (HITL) approval cards for high-risk actions (refunds, deletions)",
        "Idempotent state checkpoints enabling instant failover and zero-loss restarts",
      ],
    },
    {
      id: "defense-security",
      icon: ShieldCheck,
      title: "Defense-in-Depth Security",
      subtitle: "Upfront PII redaction, prompt injection firewalls, and audit logging.",
      badge: "SECURITY GATEWAY",
      highlights: [
        "Pre-inference PII masking (names, emails, cards) before data reaches external models",
        "Frontline adversarial prompt injection filters sanitizing malicious payloads",
        "Comprehensive execution audit logs tracking every model decision and tool call",
        "Strict zero-data-retention parameters enforced across all enterprise API endpoints",
      ],
    },
    {
      id: "hybrid-retrieval",
      icon: Database,
      title: "Grounded Multi-Modal Retrieval",
      subtitle: "Dense + sparse hybrid search, table parsing, and source-page citations.",
      badge: "RAG INFRASTRUCTURE",
      highlights: [
        "Hybrid search (BM25 keyword + pgvector semantic retrieval) for high precision",
        "Multi-modal vision extraction parsing dense tables, balance sheets, and diagrams",
        "Interactive UI citation highlighting that maps answers to exact PDF source pages",
        "Multi-tenant data isolation ensuring complete workspace boundary protection",
      ],
    },
    {
      id: "microservices-apis",
      icon: Server,
      title: "Resilient Cloud Microservices",
      subtitle: "Schema validation, retry mechanics, and real-time FinOps cost controls.",
      badge: "API RESILIENCE",
      highlights: [
        "Strict runtime schema validation preventing broken or malformed data pipelines",
        "Exponential backoff retries with dead-letter queues to guarantee zero dropped tasks",
        "Redis rate-limiting gateways protecting downstream APIs and webhooks",
        "Real-time FinOps token monitoring with automated budget alerts to prevent bill shock",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 border-t border-border-main/50">
      <Container>
        <SectionHeader
          eyebrow="ENGINEERING PILLARS"
          title="Architected for reliability, security, and deterministic outcomes."
          description="Every system is engineered to production standards — eliminating hallucinations, preventing data leaks, and ensuring human control over critical operations."
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
