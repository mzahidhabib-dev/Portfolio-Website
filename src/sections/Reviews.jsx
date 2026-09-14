import { CheckCircle2, Quote, Star } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

export const Reviews = () => {
  const reviews = [
    {
      id: "review-1",
      metric: "<60s RESPONSE TIME",
      quote:
        "The automated lead scoring and outreach system transformed our sales operations. Inbound leads are qualified and responded to in under 60 seconds with zero hallucination risk, boosting our meeting conversion by 3.5x.",
      clientName: "Marcus Vance",
      clientRole: "VP of Revenue Operations",
      companyType: "B2B SaaS Enterprise",
      verified: true,
    },
    {
      id: "review-2",
      metric: "100% SOURCE ACCURACY",
      quote:
        "Zahid built a RAG document intelligence pipeline that processes dense medical & legal PDFs with pinpoint precision. Every answer links directly to visual PDF page coordinates, giving our team total audit compliance.",
      clientName: "Dr. Aris Thorne",
      clientRole: "Head of AI Product Strategy",
      companyType: "HealthTech & Clinical Systems",
      verified: true,
    },
    {
      id: "review-3",
      metric: "99.9% UPTIME",
      quote:
        "Our n8n automation infrastructure handles tens of thousands of daily webhook transactions without a single dropped execution. The error-trapping, retry mechanics, and self-healing nodes have saved us 20+ hours every week.",
      clientName: "Elena Rostova",
      clientRole: "Chief Technology Officer",
      companyType: "E-Commerce & Digital Logistics",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-main">
      <Container>
        <SectionHeader
          eyebrow="CLIENT REVIEWS & VERIFIED IMPACT"
          title="Engineered for real-world reliability and measurable ROI."
          description="Direct operational feedback from enterprise stakeholders, technical leaders, and founders running our production AI systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              variant="default"
              className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Metric Pill */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {review.metric}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon & Body */}
                <div className="mb-6 space-y-3">
                  <Quote className="w-8 h-8 text-accent-main/30 rotate-180" />
                  <p className="text-sm text-text-secondary leading-relaxed font-normal italic">
                    "{review.quote}"
                  </p>
                </div>
              </div>

              {/* Client Footer */}
              <div className="pt-6 border-t border-border-main space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-text-main">{review.clientName}</h4>
                  <p className="text-xs text-text-muted font-medium">{review.clientRole}</p>
                  <p className="text-xs text-accent-main font-mono mt-0.5">{review.companyType}</p>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/15 w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Production Deployment</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
