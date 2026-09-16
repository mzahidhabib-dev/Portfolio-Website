import { CheckCircle2, Quote, Star, Award } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { clientReviews } from "../data/reviews";

export const Reviews = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 border-t border-border-main/50 bg-bg-main">
      <Container>
        <SectionHeader
          eyebrow="CLIENT REVIEWS & VERIFIED IMPACT"
          title="Engineered for real-world reliability and measurable ROI."
          description="Direct operational feedback from enterprise stakeholders, technical leaders, and verified contracts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review) => (
            <Card
              key={review.id}
              variant="default"
              className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Metric Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {review.metric}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-mono text-text-muted ml-1">{review.rating}</span>
                  </div>
                </div>

                {review.metricLabel && (
                  <div className="font-mono text-[11px] font-semibold text-text-muted uppercase mb-4 tracking-wider">
                    {review.metricLabel}
                  </div>
                )}

                {/* Quote Body */}
                <div className="mb-6 space-y-2">
                  <Quote className="w-7 h-7 text-accent-main/30 rotate-180" />
                  <p className="text-sm text-text-secondary leading-relaxed font-normal italic">
                    "{review.quote}"
                  </p>
                </div>

                {/* Endorsements / Tags */}
                {review.endorsements && review.endorsements.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {review.endorsements.map((tag, idx) => (
                      <Badge key={idx} variant="outline" size="sm">
                        <Award className="w-3 h-3 text-accent-main mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Client Footer */}
              <div className="pt-6 border-t border-border-main space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-text-main">{review.author}</h4>
                    <p className="text-xs text-text-muted font-medium">{review.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">{review.completionDate}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/15 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{review.sourceType}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
