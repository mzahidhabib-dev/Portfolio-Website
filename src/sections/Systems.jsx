import { useState } from "react";
import { ArrowRight, Play, ChevronDown, ChevronUp, Maximize2, X } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import StatusIndicator from "../components/ui/StatusIndicator";
import Metric from "../components/ui/Metric";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { PROJECTS, registryProjects } from "../data/projects";

export const Systems = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSecondary, setShowAllSecondary] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const flagshipProjects = PROJECTS.filter((p) => p.tier === "flagship");

  const categoryFilteredProjects =
    activeCategory === "all"
      ? registryProjects
      : registryProjects.filter((p) => p.category === activeCategory);

  const visibleSecondaryProjects = showAllSecondary
    ? categoryFilteredProjects
    : categoryFilteredProjects.slice(0, 4);

  const handleTabChange = (projectId, tabName) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tabName }));
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAllSecondary(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsLightboxOpen(false);
  };

  const n8nCount = registryProjects.filter((p) => p.category === "n8n").length;
  const webdevCount = registryProjects.filter((p) => p.category === "webdev").length;

  return (
    <section id="systems" className="py-16 sm:py-24 border-t border-border-main/50">
      <Container>
        <SectionHeader
          eyebrow="PROVEN PRODUCTION SYSTEMS"
          title="Tested in production. Engineered for measurable business return."
          description="Eliminate operational drag without losing control. Reliable AI systems engineered to automate lead qualification, complex document search, and routine workflows with built-in human verification."
        />

        {/* Category 1: Top Flagship Enterprise Systems Bento Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-main animate-pulse" />
              <h4 className="font-mono text-xs font-bold tracking-wider text-text-main uppercase">
                FLAGSHIP ENTERPRISE SYSTEMS ({flagshipProjects.length})
              </h4>
            </div>
            <Badge variant="accent" size="sm">SHOWCASE DEPLOYMENTS</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {flagshipProjects.map((project) => {
              const currentTab = activeTabs[project.id] || "overview";
              const colSpan = "lg:col-span-6";

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
        </div>

        {/* Categories 2 & 3: Extended Systems Registry */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-mono text-xs font-bold tracking-wider text-text-main uppercase mb-1">
                EXTENDED PRODUCTION REGISTRY ({categoryFilteredProjects.length})
              </h4>
              <p className="text-xs text-text-muted">
                Explore specialized workflow automations, APIs, and custom full-stack solutions.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-bg-elevated p-1 rounded-lg border border-border-subtle">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-md transition-colors ${
                  activeCategory === "all"
                    ? "bg-accent-main text-white shadow-sm"
                    : "text-text-muted hover:text-text-main"
                }`}
              >
                All Systems ({registryProjects.length})
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange("n8n")}
                className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-md transition-colors ${
                  activeCategory === "n8n"
                    ? "bg-accent-main text-white shadow-sm"
                    : "text-text-muted hover:text-text-main"
                }`}
              >
                2. Workflow Automations ({n8nCount})
              </button>
              <button
                type="button"
                onClick={() => handleCategoryChange("webdev")}
                className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-md transition-colors ${
                  activeCategory === "webdev"
                    ? "bg-accent-main text-white shadow-sm"
                    : "text-text-muted hover:text-text-main"
                }`}
              >
                3. Custom Platforms &amp; Web ({webdevCount})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleSecondaryProjects.map((project) => (
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
                      {project.badge || project.category}
                    </Badge>
                    <StatusIndicator status={project.status || "active"} size="sm" label="" />
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
                      {project.metrics?.[0]
                        ? `${project.metrics[0].label}: ${project.metrics[0].value}`
                        : project.metric || "PRODUCTION ACTIVE"}
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

          {categoryFilteredProjects.length > 4 && (
            <div className="mt-8 text-center">
              <Button
                onClick={() => setShowAllSecondary(!showAllSecondary)}
                variant="secondary"
                size="sm"
                icon={showAllSecondary ? ChevronUp : ChevronDown}
                iconPosition="right"
              >
                {showAllSecondary
                  ? "Show Less"
                  : `Show More (${categoryFilteredProjects.length - 4} remaining)`}
              </Button>
            </div>
          )}
        </div>
      </Container>

      {/* Interactive System Inspector Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
        title={selectedProject?.title ? `${selectedProject.title} — System Inspection` : "System Inspection"}
        maxWidth="max-w-4xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Modal Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-main">
              <div className="flex items-center gap-2">
                <Badge variant="accent">{selectedProject.badge || selectedProject.category}</Badge>
                <StatusIndicator status={selectedProject.status || "active"} size="sm" />
              </div>
              <Badge variant="outline">{selectedProject.tier ? selectedProject.tier.toUpperCase() : "SYSTEM"}</Badge>
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
                {selectedProject.metrics ? (
                  selectedProject.metrics.map((metric, idx) => (
                    <Metric
                      key={idx}
                      label={metric.label}
                      value={metric.value}
                      trend={metric.trend}
                      size="sm"
                    />
                  ))
                ) : (
                  <Metric
                    label="PRIMARY METRIC"
                    value={selectedProject.metric || "PRODUCTION READY"}
                    size="sm"
                  />
                )}
              </div>
            </div>

            {/* Architecture Pipeline Flow / Steps */}
            {((selectedProject.pipelineSteps && selectedProject.pipelineSteps.length > 0) ||
              (selectedProject.architectureFlow && selectedProject.architectureFlow.length > 0)) && (
              <div>
                <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-3">
                  END-TO-END PIPELINE ARCHITECTURE (
                  {(selectedProject.pipelineSteps || selectedProject.architectureFlow).length} STEPS)
                </h4>
                <div
                  className={`grid gap-3 ${
                    (selectedProject.pipelineSteps || selectedProject.architectureFlow).length > 4
                      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {(selectedProject.pipelineSteps || selectedProject.architectureFlow).map((step) => (
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
            )}

            {/* Tech Stack */}
            {selectedProject.techStack && selectedProject.techStack.length > 0 && (
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
            )}

            {/* Demo Embed Container */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase mb-3">
                SYSTEM DEMO &amp; TELEMETRY VIEW
              </h4>
              {selectedProject.youtubeId || selectedProject.imageSrc ? (
                <div className="rounded-xl bg-bg-elevated border border-border-main overflow-hidden shadow-lg">
                  {/* Terminal Window Header Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-bg-surface border-b border-border-main">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-xs text-text-muted ml-2">
                        {selectedProject.slug || selectedProject.id}
                        {selectedProject.fileExtension
                          ? selectedProject.fileExtension
                          : selectedProject.youtubeId
                          ? "_walkthrough.mp4"
                          : selectedProject.category === "n8n"
                          ? ".n8n"
                          : "_preview.png"}
                      </span>
                    </div>
                    <Badge variant="outline" size="sm">
                      {selectedProject.youtubeId ? "WALKTHROUGH DEMO" : "SCREENSHOT PREVIEW"}
                    </Badge>
                  </div>

                  {/* Media Viewport */}
                  {selectedProject.youtubeId ? (
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?rel=0&modestbranding=1&controls=1`}
                        title={`${selectedProject.title} Walkthrough Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative h-[380px] sm:h-[440px] w-full flex items-center justify-center bg-[#0A0D14] overflow-hidden cursor-zoom-in group p-4"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      {/* Ambient background blur */}
                      <img
                        src={selectedProject.imageSrc}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-15 blur-2xl pointer-events-none"
                      />

                      {/* Main contained image */}
                      <img
                        src={selectedProject.imageSrc}
                        alt={selectedProject.title}
                        className="relative z-10 max-h-full max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-[1.01]"
                      />

                      {/* Zoom Indicator Cue */}
                      <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded bg-black/60 backdrop-blur text-[11px] font-mono text-text-muted flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to Zoom</span>
                      </div>
                    </div>
                  )}
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
                  <Button href="#diagnostic" size="sm" variant="primary" onClick={handleCloseModal}>
                    Book System Demo Call
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Fullscreen Screenshot Lightbox Modal */}
      {isLightboxOpen && selectedProject?.imageSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-bg-surface/80 text-text-main hover:bg-bg-surface transition-colors z-10"
            aria-label="Close fullscreen preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedProject.imageSrc}
            alt={selectedProject.title}
            className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Systems;
