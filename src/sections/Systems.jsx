import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import StatusIndicator from "../components/ui/StatusIndicator";
import Metric from "../components/ui/Metric";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { PROJECTS } from "../data/projects";

export const Systems = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});

  const flagshipProjects = PROJECTS.filter((p) => p.tier === "flagship");
  const secondaryProjects = PROJECTS.filter((p) => p.tier !== "flagship");

  const handleTabChange = (projectId, tabName) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tabName }));
  };

  return (
    <section id="systems" className="py-16 sm:py-24 border-t border-border-main/50">
      <Container>
        <SectionHeader
          eyebrow="PROVEN PRODUCTION SYSTEMS"
          title="Tested in production. Engineered for measurable business return."
          description="Eliminate operational drag without losing control. Reliable AI systems engineered to automate lead qualification, complex document search, and routine workflows with built-in human verification."
        />

        {/* Top Flagship Bento Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {flagshipProjects.map((project, index) => {
            const currentTab = activeTabs[project.id] || "overview";
            const colSpan = index === 0 ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <Card
                key={project.id}
                variant="default"
                className={`p-6 sm:p-8 flex flex-col justify-between ${colSpan}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">{project.category}</Badge>
                      <StatusIndicator status={project.status} size="sm" />
                    </div>
                    <Badge variant="outline" className="uppercase tracking-widest">
                      {project.tier}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base text-text-secondary font-medium mb-6">
                    {project.tagline}
                  </p>

                  {/* Quantified Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((metric, i) => (
                      <Metric
                        key={i}
                        label={metric.label}
                        value={metric.value}
                        trend={metric.trend}
                        size="sm"
                      />
                    ))}
                  </div>

                  {/* Card Tabbed View: Overview vs 4-Step Pipeline */}
                  <div className="border border-border-main rounded-xl bg-bg-elevated/50 p-4 mb-6">
                    <div className="flex items-center gap-2 mb-4 border-b border-border-main pb-3">
                      <button
                        type="button"
                        onClick={() => handleTabChange(project.id, "overview")}
                        className={`text-xs font-mono font-medium px-3 py-1 rounded-md transition-colors ${
                          currentTab === "overview"
                            ? "bg-accent-main text-white"
                            : "text-text-muted hover:text-text-main"
                        }`}
                      >
                        OVERVIEW
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabChange(project.id, "pipeline")}
                        className={`text-xs font-mono font-medium px-3 py-1 rounded-md transition-colors ${
                          currentTab === "pipeline"
                            ? "bg-accent-main text-white"
                            : "text-text-muted hover:text-text-main"
                        }`}
                      >
                        4-STEP PIPELINE
                      </button>
                    </div>

                    {currentTab === "overview" ? (
                      <div className="space-y-4">
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {project.architectureFlow.map((step) => (
                          <div
                            key={step.step}
                            className="p-3 rounded-lg bg-bg-surface border border-border-subtle"
                          >
                            <span className="font-mono text-xs font-bold text-accent-main block mb-1">
                              STEP {step.step}
                            </span>
                            <h4 className="text-xs font-bold text-text-main mb-1">
                              {step.name}
                            </h4>
                            <p className="text-[11px] text-text-muted leading-snug">
                              {step.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 flex items-center justify-between">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="secondary"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    View Architecture &amp; Demo
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Secondary Production Systems Grid */}
        <div className="mb-4">
          <h4 className="font-mono text-xs font-semibold tracking-wider text-text-muted uppercase mb-4">
            ADDITIONAL DEPLOYED PRODUCTION SYSTEMS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProjects.map((project) => (
              <Card
                key={project.id}
                variant="default"
                interactive
                className="p-5 flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" size="sm">
                      {project.category}
                    </Badge>
                    <StatusIndicator status={project.status} size="sm" label="" />
                  </div>
                  <h4 className="text-lg font-bold text-text-main mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2 mb-4">
                    {project.summary}
                  </p>

                  <div className="p-3 rounded-lg bg-bg-elevated border border-border-subtle mb-4">
                    <span className="font-mono text-[10px] text-text-muted uppercase block mb-1">
                      PRIMARY METRIC
                    </span>
                    <div className="font-mono text-sm font-bold text-accent-main">
                      {project.metrics[0]?.label}: {project.metrics[0]?.value}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs font-medium text-accent-main hover:underline">
                  <span>Inspect System</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* Interactive System Inspector Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ? `${selectedProject.title} — System Inspection` : "System Inspection"}
        maxWidth="max-w-4xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Modal Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-main">
              <div className="flex items-center gap-2">
                <Badge variant="accent">{selectedProject.category}</Badge>
                <StatusIndicator status={selectedProject.status} size="sm" />
              </div>
              <Badge variant="outline">{selectedProject.tier.toUpperCase()}</Badge>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-2">
                SYSTEM SUMMARY &amp; IMPACT
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {selectedProject.summary}
              </p>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-3">
                QUANTIFIED PRODUCTION METRICS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((metric, idx) => (
                  <Metric
                    key={idx}
                    label={metric.label}
                    value={metric.value}
                    trend={metric.trend}
                    size="sm"
                  />
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-3">
                END-TO-END PIPELINE ARCHITECTURE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {selectedProject.architectureFlow.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-lg bg-bg-elevated border border-border-main"
                  >
                    <span className="font-mono text-xs font-bold text-accent-main block mb-1">
                      STEP {step.step}
                    </span>
                    <h5 className="text-xs font-bold text-text-main mb-1">{step.name}</h5>
                    <p className="text-[11px] text-text-muted leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-2">
                CORE TECHNOLOGIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Demo Embed Container */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-3">
                SYSTEM DEMO &amp; TELEMETRY VIEW
              </h4>
              {selectedProject.youtubeId ? (
                <div className="rounded-xl bg-bg-elevated border border-border-main overflow-hidden shadow-lg">
                  {/* Terminal Window Header Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-bg-surface border-b border-border-main">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-xs text-text-muted ml-2">
                        {selectedProject.slug || selectedProject.id}_walkthrough.mp4
                      </span>
                    </div>
                    <Badge variant="outline" size="sm">
                      WALKTHROUGH DEMO
                    </Badge>
                  </div>

                  {/* Responsive 16:9 YouTube iFrame */}
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?rel=0&modestbranding=1&controls=1`}
                      title={`${selectedProject.title} Walkthrough Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-full aspect-video rounded-xl bg-bg-elevated border border-border-main flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="p-3 rounded-full bg-accent-subtle text-accent-main mb-3">
                    <Play className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-text-main mb-1">
                    Architecture Walkthrough Available Upon Request
                  </h5>
                  <p className="text-xs text-text-muted max-w-md mb-4">
                    Full Loom video preview and telemetry trace available upon request during architecture intake calls.
                  </p>
                  <Button href="#diagnostic" size="sm" variant="primary" onClick={() => setSelectedProject(null)}>
                    Book System Demo Call
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Systems;
