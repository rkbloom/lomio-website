import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About | LoMio",
  description:
    "The decision layer built for health, not hype. Learn how LoMio builds trust through architecture, governance, and receipts.",
};

const beliefs = [
  "People are not just data sources. They are citizen scientists.",
  "Human judgment is not a temporary patch. It is a core signal.",
  "If you cannot explain your AI to regulators and communities, you do not deserve to scale it.",
  "Trust is not a tagline. It\u2019s architecture, governance, and receipts.",
];

const designPrinciples = [
  "Capture decisions at the edge, where context lives.",
  "Use distributed \u2018safety deposit boxes\u2019 instead of central hoards.",
  "Treat human approvals and overrides as gold-standard training data.",
  "Design every flow so you can show your work \u2014 internally, externally, and to the people behind the data.",
];

const chips = [
  "Pharma Innovators",
  "Health Insurers",
  "Healthcare Providers",
  "Gyms & Sports Properties",
  "Wellness Brands",
  "Community Health Advocates",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight">
            The decision layer built for health, not hype.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mx-auto mt-6">
            LoMio exists to make sure powerful AI doesn&rsquo;t come at the
            expense of trust. We build infrastructure that lets communities keep
            ownership, and lets institutions show their work.
          </p>
        </div>
      </AnimatedSection>

      {/* Where we started */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Where we started.</SectionLabel>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-4">
            LoMio began where the wound was the loudest: communities seeing
            shelves full of solutions and almost no science built on their
            realities. From that origin, we designed a platform that could
            travel &mdash; from hair to heart, from wellness to high-stakes
            care &mdash; without ever letting go of who owns the data.
          </p>
        </div>
      </AnimatedSection>

      {/* Beliefs */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What we refuse to compromise on.</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[rgba(45,27,78,0.08)]"
              >
                <span className="text-purple-ghost text-6xl font-serif leading-none">
                  &ldquo;
                </span>
                <p className="text-purple-deep font-medium mt-1">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Design for trust */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>How we design for trust.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {designPrinciples.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-deep mt-0.5">&rarr;</span>
                <p className="text-purple-mid leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Who it's for */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Who LoMio is built for.</SectionLabel>
          <div className="flex flex-wrap gap-3 mt-6">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full px-5 py-2 bg-white border border-purple-deep text-purple-deep text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display text-2xl font-bold text-purple-deep max-w-2xl mx-auto">
            If you&rsquo;re carrying the weight of the decision, we&rsquo;re
            building for you.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Meet with our team
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}