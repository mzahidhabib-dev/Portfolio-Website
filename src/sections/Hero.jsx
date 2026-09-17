import { ArrowRight, Cpu, ShieldCheck, Zap } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Metric from "../components/ui/Metric";
import Badge from "../components/ui/Badge";
// import StatusIndicator from "../components/ui/StatusIndicator";

export const Hero = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent" size="md">
                // SYSTEM ARCHITECT & AI ENGINEER
              </Badge>
              {/* <StatusIndicator status="active" label="SYSTEMS ACTIVE" size="sm" /> */}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-[1.1]">
              Full-Stack AI &amp; Automation Systems Architect
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
              Helping businesses scale by eliminating manual work, accelerating lead generation, and solving document search bottlenecks with reliable AI assistants and custom software.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#systems"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Production Systems
              </Button>
              <Button href="#contact" variant="glass" size="lg">
                Request System Intake
              </Button>
            </div>

            {/* Above-The-Fold Telemetry Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-border-main">
              <Metric
                label="ACQUISITION COST"
                value="$0.0420"
                change="PER 2 MEETINGS"
                trend="positive"
                description="Autonomous Lead Qualifier"
                size="sm"
              />
              <Metric
                label="DOC SEARCH ACCURACY"
                value="100%"
                change="VERIFIED"
                trend="positive"
                description="Exact Source Page Citations"
                size="sm"
              />
              <Metric
                label="INBOUND SPEED"
                value="<60s"
                change="AUTOMATED"
                trend="positive"
                description="Form to Qualified CRM Record"
                size="sm"
              />
            </div>
          </div>

          {/* Right Column: Live Agent Execution State Machine Console */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-bg-surface border border-border-main p-5 sm:p-6 shadow-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-main">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-text-muted ml-2">pipeline_performance.py</span>
                </div>
                <Badge variant="outline" size="sm">
                  ACTIVE RUN
                </Badge>
              </div>

              {/* Console Execution Trace */}
              <div className="font-mono text-xs space-y-3 text-text-secondary">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-elevated border border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Manual Work Eliminated</span>
                  </div>
                  <span className="text-emerald-500 font-semibold">15+ HRS / WEEK</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-elevated border border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent-main" />
                    <span>Inbound Response Speed</span>
                  </div>
                  <span className="text-emerald-500 font-semibold">&lt;60s [INSTANT]</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-elevated border border-border-subtle">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Pre-Call Executive Briefing</span>
                  </div>
                  <span className="text-emerald-500 font-semibold">GENERATED</span>
                </div>

                <div className="p-3 rounded-lg bg-accent-subtle/50 border border-accent-main/20 text-text-main space-y-1">
                  <div className="flex items-center justify-between font-semibold text-accent-main">
                    <span>PIPELINE RESULT: MEETINGS BOOKED</span>
                    <span>$0.0420 SPEND</span>
                  </div>
                  <p className="text-[11px] text-text-muted">
                    Leads researched, personalized copy drafted, and CRM updated with zero manual entry.
                  </p>
                </div>
              </div>

              {/* Bottom Console Footer */}
              <div className="mt-4 pt-3 border-t border-border-main flex items-center justify-between text-xs font-mono text-text-muted">
                <span>STACK: Full-Stack + n8n + AI</span>
                <span className="text-emerald-500 font-medium">● 100% INBOX DELIVERY</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
