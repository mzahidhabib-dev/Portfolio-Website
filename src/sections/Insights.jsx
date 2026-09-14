import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export const Insights = () => {
  const articles = [
    {
      id: "insight-1",
      title:
        "Why Fragile No-Code Automations Fail in Production (And How Software Discipline Solves It)",
      category: "SYSTEMS ARCHITECTURE",
      readTime: "5 MIN READ",
      summary:
        "An analysis of why standard zaps fail silently on edge cases and how schema validation, exponential backoff, and idempotent retries create enterprise reliability.",
      actionLabel: "Read Article",
    },
    {
      id: "insight-2",
      title: "The $0.0420 Meeting: Engineering an Autonomous B2B Outbound Engine",
      category: "AI SALES OPS",
      readTime: "6 MIN READ",
      summary:
        "Deconstructing the architecture behind ProspectMind AI—from MCP web domain scraping to 100% Gmail inbox deliverability and dynamic executive briefings.",
      actionLabel: "Inspect Architecture",
    },
    {
      id: "insight-3",
      title: "Zero-Hallucination RAG: Parsing Complex Charts & Multi-Page PDFs",
      category: "DOCUMENT AI",
      readTime: "4 MIN READ",
      summary:
        "How multi-modal vision models and custom frontend PDF viewers eliminate hallucinations by mapping every query to exact visual source-page coordinates.",
      actionLabel: "Inspect Architecture",
    },
  ];

  return (
    <section id="insights" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-elevated/20">
      <Container>
        <SectionHeader
          eyebrow="ENGINEERING INSIGHTS & TEARDOWNS"
          title="Architectural breakdowns, system patterns, and AI research."
          description="In-depth technical essays on building fault-tolerant automation loops, production RAG pipelines, and agentic workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              variant="default"
              interactive
              className="p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-main/40 transition-all duration-200"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <Badge variant="accent" size="sm">
                    {article.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted">
                    <Clock className="w-3 h-3 text-accent-main" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-text-main group-hover:text-accent-main transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-text-secondary leading-relaxed font-normal mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-border-main flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-accent-main group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5">
                  <span>{article.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                <BookOpen className="w-4 h-4 text-text-muted group-hover:text-accent-main transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Insights;
