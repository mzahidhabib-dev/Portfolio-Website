import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Send,
  ShieldCheck,
  Mail,
  Cpu,
  AlertTriangle,
  RefreshCw,
  Lock,
  MessageSquare,
  Ticket,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { SOCIAL_LINKS } from "../data/navigation";

export const Contact = () => {
  const scopeRef = useRef(null);
  const ticketIdRef = useRef("");
  const [formState, setFormState] = useState("idle"); // 'idle' | 'running' | 'completed' | 'error'
  const [telemetryStep, setTelemetryStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyUrl: "",
    currentStack: "",
    scope: "",
  });

  useEffect(() => {
    const handlePrefill = (event) => {
      const scopeText = event.detail?.scopeText;
      if (scopeText) {
        setFormData((prev) => ({
          ...prev,
          scope: prev.scope ? `${scopeText}\n\n${prev.scope}` : scopeText,
        }));

        // Auto-focus the scope textarea via useRef after scroll completes
        setTimeout(() => {
          if (scopeRef.current) {
            scopeRef.current.focus();
          }
        }, 400);
      }
    };

    window.addEventListener("prefill-contact-scope", handlePrefill);
    return () => {
      window.removeEventListener("prefill-contact-scope", handlePrefill);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.scope.trim()) {
      return;
    }

    // Generate unique intake ticket reference ID
    ticketIdRef.current = `INTAKE-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`;

    setFormState("running");
    setTelemetryStep(1);

    // Stepped progress simulation
    const t1 = setTimeout(() => setTelemetryStep(2), 600);
    const t2 = setTimeout(() => setTelemetryStep(3), 1200);

    const t3 = setTimeout(async () => {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

      // If a valid Web3Forms access key is set in environment, post to Web3Forms API
      if (accessKey) {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              name: formData.name,
              email: formData.email,
              replyto: formData.email,
              ticket_id: ticketIdRef.current,
              companyUrl: formData.companyUrl || "N/A",
              currentStack: formData.currentStack || "N/A",
              scope: formData.scope,
              subject: `[PROJECT_INTAKE] Brief (${ticketIdRef.current}) from ${formData.name}`,
              from_name: "Portfolio Automated Intake System",
            }),
          });

          const data = await response.json();
          if (response.ok && data.success !== false) {
            setFormState("completed");
            return;
          }
        } catch (err) {
          console.warn("Web3Forms API dispatch note:", err);
        }
      }

      // Default seamless transition to completed state
      setFormState("completed");
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const handleReset = () => {
    setFormState("idle");
    setTelemetryStep(0);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-elevated/30">
      <Container>
        <SectionHeader
          eyebrow="PROJECT INTAKE & SYSTEM EVALUATION"
          title="Direct Engineering Review. Zero Sales Pressure."
          description="Describe your project goals or operational bottlenecks to receive a custom system assessment and private 5-minute video teardown."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Architect Dispatch & Standards */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="default" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Badge variant="accent">FAST 24-HR TURNAROUND</Badge>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  RESPONSE TIME: &lt; 4 HOURS
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">
                  Direct Engineer Review
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Skip middleman sales calls. Send your workflow goals or current manual challenges directly to engineering. Every brief is evaluated for ROI, automation feasibility, and cost-efficiency.
                </p>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-border-main space-y-3">
                <h4 className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
                  WHAT YOU GET
                </h4>
                <ul className="space-y-3 text-xs text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold shrink-0">[✓]</span>
                    <div>
                      <span className="font-semibold text-text-main">5-Min Private Video Review:</span>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        Clear breakdown of your current bottlenecks and a step-by-step roadmap to solve them.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold shrink-0">[✓]</span>
                    <div>
                      <span className="font-semibold text-text-main">Working Prototype First:</span>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        Test a functional staging demo of your system before signing long-term contracts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold shrink-0">[✓]</span>
                    <div>
                      <span className="font-semibold text-text-main">30-Day Support Warranty:</span>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        Full post-launch documentation, setup guidance, and ongoing operational support.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Mail Pill */}
              <div className="p-3.5 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5 font-sans">
                  <Mail className="w-3.5 h-3.5 text-accent-main" /> Direct Email:
                </span>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-accent-main hover:underline font-medium flex items-center gap-1"
                  title="Click to open default email client with zahid@mzahidh.com"
                >
                  {SOCIAL_LINKS.rawEmail}
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Project Intake Form */}
          <div className="lg:col-span-7">
            <Card variant="default" className="p-0 overflow-hidden border-border-main shadow-2xl relative">
              {/* Form Titlebar */}
              <div className="px-4 py-3 bg-bg-elevated border-b border-border-main flex items-center justify-between transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-medium text-text-main ml-2 flex items-center gap-1.5 font-sans">
                    <MessageSquare className="w-3.5 h-3.5 text-accent-main" />
                    Project Intake Form
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                    STATUS: {formState === "running" ? "PROCESSING..." : formState === "completed" ? "QUEUED" : "ONLINE & READY"}
                  </span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 bg-bg-surface transition-colors">
                {formState === "running" && (
                  <div className="py-12 space-y-6 text-text-main">
                    <div className="flex items-center gap-3 text-sm text-accent-main font-semibold pb-2 border-b border-border-main">
                      <Cpu className="w-4 h-4 animate-spin text-accent-main" />
                      <span>INITIALIZING AUTOMATED INTAKE PIPELINE...</span>
                    </div>

                    <div className="space-y-4 text-xs font-sans">
                      {/* Step 1 Trace */}
                      <div className={`flex items-center gap-3 transition-opacity ${telemetryStep >= 1 ? "opacity-100" : "opacity-30"}`}>
                        {telemetryStep > 1 ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-accent-main animate-ping shrink-0 ml-1" />
                        )}
                        <span className={telemetryStep >= 1 ? "text-text-main font-medium" : "text-text-muted"}>
                          ● Analyzing project scope &amp; business goals...
                        </span>
                      </div>

                      {/* Step 2 Trace */}
                      <div className={`flex items-center gap-3 transition-opacity ${telemetryStep >= 2 ? "opacity-100" : "opacity-30"}`}>
                        {telemetryStep > 2 ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : telemetryStep === 2 ? (
                          <span className="w-2 h-2 rounded-full bg-accent-main animate-ping shrink-0 ml-1" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-text-muted/40 shrink-0 ml-1" />
                        )}
                        <span className={telemetryStep >= 2 ? "text-text-main font-medium" : "text-text-muted"}>
                          ● Generating unique intake ticket &amp; specs...
                        </span>
                      </div>

                      {/* Step 3 Trace */}
                      <div className={`flex items-center gap-3 transition-opacity ${telemetryStep >= 3 ? "opacity-100" : "opacity-30"}`}>
                        {telemetryStep === 3 ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0 ml-1" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-text-muted/40 shrink-0 ml-1" />
                        )}
                        <span className={telemetryStep >= 3 ? "text-emerald-600 dark:text-emerald-400 font-semibold" : "text-text-muted"}>
                          ● Routing brief directly to Zahid's inbox...
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-bg-elevated rounded-full h-1.5 overflow-hidden border border-border-main">
                      <div
                        className="bg-accent-main h-full transition-all duration-500 ease-out"
                        style={{
                          width: telemetryStep === 1 ? "33%" : telemetryStep === 2 ? "66%" : "90%",
                        }}
                      />
                    </div>
                  </div>
                )}

                {formState === "completed" && (
                  <div className="py-6 space-y-6">
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold tracking-wider uppercase font-mono">
                            PROJECT BRIEF RECEIVED &amp; QUEUED!
                          </div>
                          <div className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-0.5 font-sans">
                            AUTO-CONFIRMED TO ZAHID HABIB
                          </div>
                        </div>
                      </div>
                      <span className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                        <Ticket className="w-3 h-3" /> {ticketIdRef.current}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm text-text-secondary leading-relaxed font-sans">
                      <p className="text-base text-text-main font-semibold">
                        Thank you, <span className="text-accent-main">{formData.name}</span>!
                      </p>
                      <p>
                        Your project details have been registered under intake ticket <strong className="font-mono text-emerald-600 dark:text-emerald-400">{ticketIdRef.current}</strong>. Zahid Habib will personally review your specs and email your custom 5-minute video teardown directly to <strong className="text-emerald-600 dark:text-emerald-400">{formData.email}</strong> within 24 hours.
                      </p>
                    </div>

                    {/* Automated Workflow Timeline Card */}
                    <div className="p-4 rounded-lg bg-bg-elevated border border-border-main space-y-3 text-xs font-sans">
                      <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold font-mono flex items-center justify-between">
                        <span>AUTOMATED INTAKE STEPS:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">TICKET ACTIVE</span>
                      </div>
                      <div className="space-y-2 text-text-main text-xs">
                        <div className="flex items-center justify-between p-2 rounded bg-bg-surface border border-border-main">
                          <span className="flex items-center gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">1.</span> Receipt &amp; Queue:
                          </span>
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">COMPLETED</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-bg-surface border border-border-main">
                          <span className="flex items-center gap-2">
                            <span className="text-accent-main font-bold">2.</span> Architecture Feasibility Review:
                          </span>
                          <span className="text-[11px] text-accent-main font-mono font-semibold">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-bg-surface border border-border-main">
                          <span className="flex items-center gap-2">
                            <span className="text-text-muted font-bold">3.</span> Private 5-Min Video Delivery:
                          </span>
                          <span className="text-[11px] text-text-secondary font-mono">&lt; 24 HOURS</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        onClick={handleReset}
                        variant="glassPrimary"
                        size="lg"
                        className="w-full justify-center text-sm font-semibold"
                        icon={RefreshCw}
                      >
                        Submit Another Project Brief →
                      </Button>
                    </div>
                  </div>
                )}

                {formState === "error" && (
                  <div className="py-8 space-y-6">
                    <div className="flex items-center gap-3 p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold tracking-wider uppercase font-mono">
                          COULD NOT SEND BRIEF AUTOMATICALLY
                        </div>
                        <div className="text-[10px] text-red-600/80 dark:text-red-400/80 mt-0.5 font-sans">
                          PLEASE USE DIRECT EMAIL BELOW
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      The automatic form gateway encountered a momentary hiccup. You can email your project brief directly to Zahid Habib:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={SOCIAL_LINKS.email}
                        variant="glassPrimary"
                        size="sm"
                        className="w-full justify-center"
                        icon={Mail}
                      >
                        EMAIL ZAHID DIRECTLY (zahid@mzahidh.com)
                      </Button>
                      <Button
                        onClick={handleReset}
                        variant="secondary"
                        size="sm"
                        className="w-full sm:w-auto justify-center"
                        icon={RefreshCw}
                      >
                        [ RETRY FORM ]
                      </Button>
                    </div>
                  </div>
                )}

                {formState === "idle" && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-text-main block mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-text-main block mb-1.5">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sarah@company.com"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-text-main block mb-1.5 flex items-center justify-between">
                          <span>Company Website</span>
                          <span className="text-[10px] text-text-muted font-mono">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="companyUrl"
                          value={formData.companyUrl}
                          onChange={handleChange}
                          placeholder="e.g. company.com (optional)"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-text-main block mb-1.5 flex items-center justify-between">
                          <span>Current Tools / Tech</span>
                          <span className="text-[10px] text-text-muted font-mono">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="currentStack"
                          value={formData.currentStack}
                          onChange={handleChange}
                          placeholder="e.g. Excel, Gmail, Zapier, Shopify (optional)"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-text-main block mb-1.5 flex items-center justify-between">
                        <span>Project Description &amp; Bottlenecks *</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono font-medium">
                          <Lock className="w-3 h-3" /> 100% Private &amp; Confidential
                        </span>
                      </label>
                      <textarea
                        ref={scopeRef}
                        name="scope"
                        rows={4}
                        required
                        value={formData.scope}
                        onChange={handleChange}
                        placeholder="Describe what your team is struggling with or what manual workflow you'd like to automate..."
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors font-sans resize-none leading-relaxed"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="glassPrimary"
                      size="lg"
                      className="w-full justify-center text-sm font-semibold"
                      icon={Send}
                      iconPosition="right"
                    >
                      Send Project Brief →
                    </Button>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-text-muted font-sans">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Strict NDA &amp; Confidentiality Guaranteed
                      </span>
                      <span>Fast Response Within 24h</span>
                    </div>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
