import { Bot, FileText, Workflow, Layers, CheckCircle2 } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { CAPABILITY_DOMAINS } from "../data/capabilities";

export const Capabilities = () => {
  const domainIcons = {
    "agentic-systems": Bot,
    "document-rag": FileText,
    "workflow-automation": Workflow,
    "fullstack-architecture": Layers,
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-elevated/30">
      <Container>
        <SectionHeader
          eyebrow="ENTERPRISE-GRADE ARCHITECTURE"
          title="Built with modern software engineering discipline."
          description="Full-stack software engineering powering custom AI interfaces, scalable microservices, and fault-tolerant pipelines."
        />

        {/* 2x2 / 4-Column Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITY_DOMAINS.map((domain) => {
            const IconComponent = domainIcons[domain.id] || Layers;

            return (
              <Card
                key={domain.id}
                variant="default"
                className="p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Header Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-accent-subtle text-accent-main border border-accent-main/20">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                      {domain.title}
                    </h3>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-medium">
                    {domain.tagline}
                  </p>

                  {/* Core Tech Stack Badges */}
                  <div className="mb-6">
                    <h4 className="font-mono text-xs font-semibold text-text-muted uppercase mb-2">
                      CORE TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Production Standards List */}
                  <div>
                    <h4 className="font-mono text-xs font-semibold text-text-muted uppercase mb-3">
                      PRODUCTION STANDARDS &amp; GUARANTEES
                    </h4>
                    <ul className="space-y-2.5">
                      {domain.standards.map((standard, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-status-active shrink-0 mt-0.5" />
                          <span className="leading-snug">{standard}</span>
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

export default Capabilities;
