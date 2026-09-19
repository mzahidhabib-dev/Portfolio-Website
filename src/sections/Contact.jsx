import { useState, useEffect } from "react";
import { CheckCircle2, Send, ShieldCheck, Mail, Play } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { SOCIAL_LINKS } from "../data/navigation";

export const Contact = () => {
  const [formState, setFormState] = useState("idle"); // 'idle' | 'submitting' | 'success'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const handlePrefill = (event) => {
      const scopeText = event.detail?.scopeText;
      if (scopeText) {
        setFormData((prev) => ({
          ...prev,
          message: prev.message ? `${scopeText}\n\n${prev.message}` : scopeText,
        }));

        // Focus the textarea after scroll completes
        setTimeout(() => {
          const textarea = document.querySelector('textarea[name="message"]');
          if (textarea) {
            textarea.focus();
          }
        }, 500);
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

  const handleTeardownClick = () => {
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput) {
      nameInput.focus();
      nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-elevated/30">
      <Container>
        <SectionHeader
          eyebrow="HIGH-TRUST CONVERSION CENTER"
          title="Direct engineering evaluation. Zero sales fluff."
          description="Request a concise video teardown or submit your project scope to receive a tailored system estimate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Async Video Teardown & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="default" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="accent">OPTION 1: ASYNC TEARDOWN</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">
                  Request an Architecture Video Teardown
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Prefer not to jump on a live call? Send over your website or manual workflow description. I will record a private Loom breakdown diagnosing your operational bottlenecks, failure points, and data architecture — delivered directly to your inbox within 24 hours.
                </p>
              </div>

              <Button
                onClick={handleTeardownClick}
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={Play}
              >
                ▶ Request Video Teardown
              </Button>

              <div className="pt-4 border-t border-border-main space-y-3">
                <h4 className="font-mono text-xs font-semibold text-text-muted uppercase">
                  ENGINEERING GUARANTEES
                </h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Zero sales pressure — 100% technical architecture review</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Actionable system teardown delivered within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Guaranteed 30-day post-launch support warranty on all deployments</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-main" /> DIRECT EMAIL:
                </span>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-accent-main hover:underline font-medium flex items-center gap-1"
                  title="Click to send email to zahid@mzahidh.com"
                >
                  {SOCIAL_LINKS.rawEmail}
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Serverless Scope Intake Form */}
          <div className="lg:col-span-7">
            <Card variant="default" className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-main">
                <Badge variant="outline">OPTION 2: SCOPE INTAKE FORM</Badge>
                <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> SECURE TRANSMISSION
                </span>
              </div>

              {formState === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-text-main">
                    Blueprint Transmitted Successfully
                  </h4>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Thank you! Your system scope has been received. Zahid Habib will review your context requirements and respond within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormState("idle")}
                    variant="secondary"
                    size="sm"
                  >
                    Submit Another Scope
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs font-medium text-text-muted block mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Zahid Habib"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs font-medium text-text-muted block mb-1.5">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="zahid@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 flex items-center justify-between">
                      <span>COMPANY / WEBSITE URL</span>
                      <span className="text-[10px] text-text-muted/60 font-mono">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="company.com (leave blank if stealth or pre-launch)"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs font-medium text-text-muted block mb-1.5">
                      BOTTLENECK / SCOPE DESCRIPTION *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current manual process, tools used, and ideal automation or architecture outcome..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-bg-elevated border border-border-main text-text-main placeholder:text-text-muted focus:outline-hidden focus:border-accent-main transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="w-full justify-center"
                    icon={formState === "submitting" ? Mail : Send}
                  >
                    {formState === "submitting"
                      ? "Transmitting Scope Blueprint..."
                      : "Submit System Scope Blueprint"}
                  </Button>

                  <p className="text-[11px] text-text-muted text-center font-mono">
                    Strict NDA &amp; confidentiality guaranteed. Architectural feasibility delivered within 24 hours.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
