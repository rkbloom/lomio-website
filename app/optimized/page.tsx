import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Optimized Professional | LoMio",
  description:
    "If you live in the data, it should live up to you. LoMio lets your signals train the system without giving away control.",
};

export default function OptimizedPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            If you live in the data, it should live up to you.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio lets your signals train the system &mdash; without giving away
            control &mdash; so every decision made around you gets smarter.
          </p>
        </div>
      </AnimatedSection>

      {/* Already optimizing */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>You&rsquo;re already optimizing. You need systems that keep up.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "You track, measure, and experiment.",
              "You expect more than one-size-fits-all recommendations.",
              "You want to see the reasoning, not just the output.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-soft mt-0.5">&mdash;</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Teaching the system */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Teaching the system what &ldquo;good&rdquo; looks like.</SectionLabel>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-4">
            In LoMio, your approvals, overrides, and choices are treated as
            high-value signals. When you say &ldquo;no&rdquo; to a
            recommendation and choose something better, the system learns from
            you &mdash; and people like you &mdash; rather than treating you as
            noise.
          </p>
          <div className="space-y-3 mt-8 max-w-3xl">
            {[
              "Personalized interventions that actually reflect your patterns.",
              "Decision traces you can interrogate and challenge.",
              "The satisfaction of knowing your data upgrades the system \u2014 without leaving your digital doppelg\u00e4nger vault.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-deep mt-0.5">{"\u2605"}</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display text-2xl font-bold text-purple-deep max-w-2xl mx-auto">
            Want this level of intelligence in your gym, team, or wellness
            ecosystem?
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Share LoMio with your organization
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}