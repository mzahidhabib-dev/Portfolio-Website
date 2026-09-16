import { useState } from "react";
import { CheckCircle2, ArrowRight, Zap, Send, ShieldCheck } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

export const Diagnostic = () => {
  const [selectedBottleneck, setSelectedBottleneck] = useState("lead-outreach");
  const [selectedVolume, setSelectedVolume] = useState("100 – 1,000 / mo");
  const [isScopeModalOpen, setIsScopeModalOpen] = useState(false);
  const [scopeFormState, setScopeFormState] = useState("idle"); // 'idle' | 'submitting' | 'submitted'
  const [scopeFormData, setScopeFormData] = useState({
    name: "",
    email: "",
    companyUrl: "",
    currentStack: "",
    scopeDescription: "",
  });

  const handleScopeFormChange = (e) => {
    const { name, value } = e.target;
    setScopeFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScopeFormSubmit = (e) => {
    e.preventDefault();
    setScopeFormState("submitting");
    setTimeout(() => {
      setScopeFormState("submitted");
    }, 800);
  };

  const handleCloseScopeModal = () => {
    setIsScopeModalOpen(false);
    setTimeout(() => {
      setScopeFormState("idle");
      setScopeFormData({
        name: "",
        email: "",
        companyUrl: "",
        currentStack: "",
        scopeDescription: "",
      });
    }, 300);
  };

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
    {
      id: "custom-system",
      title: "Custom System / Other Bottleneck",
      description: "Legacy API bottlenecks, custom web apps, database scaling, or bespoke workflows.",
    },
  ];

  const volumes = ["<100 / mo", "100 – 1,000 / mo", "1,000+ / mo"];

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
    "custom-system": {
      name: "Bespoke Architecture & Systems Engineering",
      architecture: "Node.js / Python Microservices + Scalable DB + Event-Driven APIs",
      payback: "Immediate ROI",
      timeline: "1–3 Weeks (Scope-Dependent)",
      impact: "Eliminates technical debt, API rate-limit bottlenecks, and unhandled edge-case failures across your core workflow.",
      safeguards: [
        "Idempotent Transaction Execution",
        "Comprehensive Architectural Runbooks",
        "30-Day Production Stability Warranty",
      ],
    },
  };

  const activeBlueprint = blueprintMap[selectedBottleneck] || blueprintMap["lead-outreach"];
  const activeBottleneckObject = bottlenecks.find((b) => b.id === selectedBottleneck);

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
                STEP 2: ESTIMATED MONTHLY WORKFLOW VOLUME
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

                <div className="pt-4 border-t border-border-main space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto justify-center"
                      onClick={() => setIsScopeModalOpen(true)}
                      icon={ArrowRight}
                    >
                      Request Architecture Blueprint
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById("systems");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs font-medium text-text-muted hover:text-text-main flex items-center justify-center gap-1 transition-colors cursor-pointer py-2"
                    >
                      <span>Explore Live Deployments</span>
                      <span className="text-accent-main">↓</span>
                    </button>
                  </div>
                  <p className="text-[11px] font-mono text-text-muted text-center sm:text-left">
                    Zero sales pressure. Delivered as a technical architecture brief within 24 hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* Scope Intake Modal */}
      <Modal
        isOpen={isScopeModalOpen}
        onClose={handleCloseScopeModal}
        title="Submit System Scope & Architecture Requirements"
        maxWidth="max-w-xl"
      >
        {scopeFormState === "submitted" ? (
          <div className="py-8 px-4 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-text-main">
              Scope Received — I will review your technical requirements and send an architectural feasibility breakdown within 24 hours.
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto font-normal">
              Your system parameters have been queued. A detailed technical architecture brief will be sent to <span className="font-mono text-accent-main font-semibold">{scopeFormData.email || "your email"}</span>.
            </p>
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCloseScopeModal}
              >
                Close Intake Modal
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleScopeFormSubmit} className="space-y-4">
            {/* Pre-populated Selected Bottleneck Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg bg-bg-elevated border border-border-main mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="accent" size="sm">SELECTED BOTTLENECK</Badge>
                <span className="text-xs font-semibold text-text-main">
                  {activeBottleneckObject?.title}
                </span>
              </div>
              <span className="text-[11px] font-mono text-text-muted">{selectedVolume}</span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed font-normal mb-4">
              Provide details about your operational bottleneck and technical requirements for a preliminary system assessment.
            </p>

            {/* Name */}
            <div>
              <label htmlFor="scope-name" className="block text-xs font-mono font-semibold text-text-muted uppercase mb-1.5">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="scope-name"
                name="name"
                type="text"
                required
                value={scopeFormData.name}
                onChange={handleScopeFormChange}
                placeholder="Alex Vance"
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-border-main text-text-main placeholder:text-text-muted text-xs focus:outline-none focus:border-accent-main focus:ring-1 focus:ring-accent-main transition-all"
              />
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="scope-email" className="block text-xs font-mono font-semibold text-text-muted uppercase mb-1.5">
                Work Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="scope-email"
                name="email"
                type="email"
                required
                value={scopeFormData.email}
                onChange={handleScopeFormChange}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-border-main text-text-main placeholder:text-text-muted text-xs focus:outline-none focus:border-accent-main focus:ring-1 focus:ring-accent-main transition-all"
              />
            </div>

            {/* Company / Website URL (Explicitly OPTIONAL) */}
            <div>
              <label htmlFor="scope-company-url" className="block text-xs font-mono font-semibold text-text-muted uppercase mb-1.5">
                Company Website <span className="text-text-muted font-normal lowercase">(Optional)</span>
              </label>
              <input
                id="scope-company-url"
                name="companyUrl"
                type="text"
                value={scopeFormData.companyUrl}
                onChange={handleScopeFormChange}
                placeholder="company.com (Leave blank if pre-launch or stealth)"
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-border-main text-text-main placeholder:text-text-muted text-xs focus:outline-none focus:border-accent-main focus:ring-1 focus:ring-accent-main transition-all"
              />
            </div>

            {/* Current Stack / Tools (Optional) */}
            <div>
              <label htmlFor="scope-current-stack" className="block text-xs font-mono font-semibold text-text-muted uppercase mb-1.5">
                Current Tools / Stack <span className="text-text-muted font-normal lowercase">(Optional)</span>
              </label>
              <input
                id="scope-current-stack"
                name="currentStack"
                type="text"
                value={scopeFormData.currentStack}
                onChange={handleScopeFormChange}
                placeholder="e.g., PostgreSQL, HubSpot, n8n, Stripe, custom APIs"
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-border-main text-text-main placeholder:text-text-muted text-xs focus:outline-none focus:border-accent-main focus:ring-1 focus:ring-accent-main transition-all"
              />
            </div>

            {/* Bottleneck / Scope Description */}
            <div>
              <label htmlFor="scope-description" className="block text-xs font-mono font-semibold text-text-muted uppercase mb-1.5">
                Workflow / Failure Point <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="scope-description"
                name="scopeDescription"
                required
                rows={3}
                value={scopeFormData.scopeDescription}
                onChange={handleScopeFormChange}
                placeholder="Describe your current manual process, tools used, and ideal automation or architecture outcome..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-surface border border-border-main text-text-main placeholder:text-text-muted text-xs focus:outline-none focus:border-accent-main focus:ring-1 focus:ring-accent-main transition-all resize-none"
              />
            </div>

            {/* Submit Button & Confidentiality Note */}
            <div className="pt-2 space-y-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center"
                disabled={scopeFormState === "submitting"}
                icon={Send}
              >
                {scopeFormState === "submitting" ? "Processing Intake..." : "Deliver Architecture Blueprint (24h) →"}
              </Button>
              <p className="text-[11px] font-mono text-text-muted text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-main" />
                <span>Strict confidentiality · Zero spam</span>
              </p>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
};

export default Diagnostic;
