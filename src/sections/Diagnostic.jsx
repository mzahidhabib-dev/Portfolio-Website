import { useState } from "react";
import { CheckCircle2, Calendar, ArrowRight, Zap } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { SOCIAL_LINKS } from "../data/navigation";

export const Diagnostic = () => {
  const [selectedBottleneck, setSelectedBottleneck] = useState("lead-outreach");
  const [selectedVolume, setSelectedVolume] = useState("50–500/mo");

  const bottlenecks = [
    {
      id: "lead-outreach",
      title: "Manual Lead Qualification & Outreach",
      description: "SDRs spending hours researching leads, scoring intent, and drafting custom emails.",
    },
    {
      id: "document-search",
      title: "Complex PDF / Document Search & Hallucinations",
      description: "Engineers or analysts struggling to retrieve exact specs from 50+ page technical manuals.",
    },
    {
      id: "customer-support",
      title: "Repetitive Tier-1 Customer Support",
      description: "Support reps answering identical queries with high response latencies.",
    },
    {
      id: "internal-ops",
      title: "Disjointed Internal Operations & Inbox Chaos",
      description: "Manual triage across emails, CRMs, webhooks, and Slack channels.",
    },
  ];

  const volumes = ["<50/mo", "50–500/mo", "500+/mo"];

  const blueprintMap = {
    "lead-outreach": {
      name: "ProspectMind Autonomous SDR System",
      architecture: "Model Context Protocol (MCP) + LangGraph + Python + Intent Scoring Node",
      payback: "<14 Days",
      timeline: "5–7 Business Days",
      impact: "Reduces cost per booked meeting to $0.0420 with 100% inbox delivery rate.",
      safeguards: ["Human-in-the-Loop Outbound Review", "Domain Reputation Safeguards", "30-Day Support Warranty"],
    },
    "document-search": {
      name: "DocMind Multi-Modal RAG Platform",
      architecture: "Gemini Vision + pgvector + Async Background Ingestion Queue + Custom Viewer",
      payback: "<21 Days",
      timeline: "7–10 Business Days",
      impact: "100% answer grounding accuracy with side-by-side exact PDF page citations.",
      safeguards: ["Self-Verification Grounding Node", "Zero Hallucination Guarantee", "30-Day Support Warranty"],
    },
    "customer-support": {
      name: "SupportMind Security Gateway Engine",
      architecture: "Prompt Injection Firewall + Dynamic Model Routing + Zendesk / Intercom API",
      payback: "<10 Days",
      timeline: "5–7 Business Days",
      impact: "100% verified resolution accuracy with zero PII data leakage.",
      safeguards: ["Pre-Inference PII Redaction", "Human Escalation Briefs", "30-Day Support Warranty"],
    },
    "internal-ops": {
      name: "Enterprise AI Business Operations Agent",
      architecture: "n8n Workflow Engine + Webhooks + FinOps Token Tracking + Slack API",
      payback: "<7 Days",
      timeline: "3–5 Business Days",
      impact: "Deflects 75%+ of manual triage work with sub-60 second response latency.",
      safeguards: ["Strict JSON Schema Validation", "Exponential Backoff Retries", "30-Day Support Warranty"],
    },
  };

  const activeBlueprint = blueprintMap[selectedBottleneck] || blueprintMap["lead-outreach"];

  return (
    <section id="diagnostic" className="py-16 sm:py-24 border-t border-border-main/50">
      <Container>
        <SectionHeader
          eyebrow="SYSTEM ARCHITECTURE DIAGNOSTIC"
          title="Identify operational bottlenecks. Scope your automation in 60 seconds."
          description="Select your primary business friction point to see the recommended architecture pattern, estimated payback period, and delivery timeline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step 1 & 2 Selection Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="font-mono text-xs font-semibold text-text-muted uppercase block mb-3">
                STEP 1: SELECT PRIMARY BUSINESS BOTTLENECK
              </label>
              <div className="space-y-3">
                {bottlenecks.map((item) => {
                  const isSelected = selectedBottleneck === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedBottleneck(item.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-accent-subtle border-accent-main shadow-xs"
                          : "bg-bg-surface border-border-main hover:border-border-subtle"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-bold text-text-main mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? "border-accent-main bg-accent-main"
                              : "border-border-main bg-transparent"
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="font-mono text-xs font-semibold text-text-muted uppercase block mb-3">
                STEP 2: ESTIMATED MONTHLY VOLUME
              </label>
              <div className="grid grid-cols-3 gap-3">
                {volumes.map((vol) => {
                  const isSelected = selectedVolume === vol;
                  return (
                    <button
                      key={vol}
                      type="button"
                      onClick={() => setSelectedVolume(vol)}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-mono font-medium transition-all ${
                        isSelected
                          ? "bg-accent-main text-white border-accent-main shadow-xs"
                          : "bg-bg-surface text-text-secondary border-border-main hover:border-border-subtle"
                      }`}
                    >
                      {vol}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Step 3: Interactive Blueprint Output */}
          <div className="lg:col-span-6">
            <Card variant="elevated" className="p-6 sm:p-8 border-accent-main/30 relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-main">
                <Badge variant="accent" size="sm">
                  GENERATED ARCHITECTURE BLUEPRINT
                </Badge>
                <span className="font-mono text-xs text-emerald-500 font-medium flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> 100% COMPATIBLE
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase block mb-1">
                    RECOMMENDED ARCHITECTURE PATTERN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                    {activeBlueprint.name}
                  </h3>
                  <p className="text-xs font-mono text-accent-main mt-1">
                    {activeBlueprint.architecture}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-bg-surface border border-border-main">
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase block">
                      ESTIMATED PAYBACK
                    </span>
                    <span className="font-mono text-sm font-bold text-emerald-500">
                      {activeBlueprint.payback}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-muted uppercase block">
                      DELIVERY TIMELINE
                    </span>
                    <span className="font-mono text-sm font-bold text-text-main">
                      {activeBlueprint.timeline}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase block mb-1">
                    QUANTIFIED OPERATIONAL IMPACT
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {activeBlueprint.impact}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-text-muted uppercase block mb-2">
                    INCLUDED PRODUCTION SAFEGUARDS
                  </span>
                  <ul className="space-y-2">
                    {activeBlueprint.safeguards.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border-main flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={SOCIAL_LINKS.booking}
                    target="_blank"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto justify-center"
                    icon={Calendar}
                  >
                    Book Architecture Review Call
                  </Button>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-text-muted hover:text-text-main flex items-center gap-1"
                  >
                    <span>Or Submit Scope Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Diagnostic;
