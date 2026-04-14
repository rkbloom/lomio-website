import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Cohorts | LoMio",
  description:
    "Cohorts that reflect real lives, not just rows in a spreadsheet. LoMio discovers and activates cohorts based on real-world context.",
};

const partners = [
  {
    title: "Pharma",
    body: "Find the right patients under real-life conditions, not just eligibility criteria.",
  },
  {
    title: "Insurers",
    body: "Understand which member cohorts respond to outreach \u2014 and why.",
  },
  {
    title: "Providers / Gyms / Wellness",
    body: "See which care plans are actually working. Identify high-value, high-engagement cohorts without invading privacy.",
  },
];

export default function CohortsPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            Cohorts that reflect real lives, not just rows in a spreadsheet.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio discovers and activates cohorts based on real-world context
            &mdash; without exposing PHI or centralizing more risk.
          </p>
        </div>
      </AnimatedSection>

      {/* Signals */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Signals, decisions, and outcomes &mdash; all in one view.</SectionLabel>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-4">
            Cohorts in LoMio aren&rsquo;t just demographic clusters. They are
            living groups defined by behavior, context, and how real people
            respond to interventions. Every action, every human decision, and
            every outcome builds a more nuanced picture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {partners.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(45,27,78,0.08)]"
              >
                <h3 className="text-lg font-bold text-purple-deep mb-2">
                  {p.title}
                </h3>
                <p className="text-purple-mid leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Privacy */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What about privacy and compliance.</SectionLabel>
          <div className="bg-purple-ghost rounded-2xl p-8 mt-6 max-w-3xl">
            <div className="space-y-3">
              {[
                "Cohorts are defined from consented, non-centralized signals.",
                "No PHI needs to move into a new warehouse to get intelligence.",
                "Every cohort definition can be explained: inputs, decisions, outcomes.",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-purple-deep mt-0.5">{"\u2713"}</span>
                  <p className="text-purple-mid leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold text-purple-deep max-w-2xl mx-auto">
            Show us the cohorts you care about. We&rsquo;ll show you how LoMio
            sees them.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Discuss cohort strategy
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}