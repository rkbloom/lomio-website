import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Community Health Advocates | LoMio",
  description:
    "LoMio helps advocates turn stories, signals, and lived experience into decision intelligence that doesn\u2019t get taken away or watered down.",
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            Because your community deserves more than being &ldquo;studied.&rdquo;
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio helps advocates turn stories, signals, and lived experience
            into decision intelligence that doesn&rsquo;t get taken away or
            watered down.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Talk to us about citizen scientist partnerships
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Bridge */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>You&rsquo;ve been the bridge. Without the tools.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "You translate between communities and institutions every day.",
              "You see patterns long before they show up in a chart.",
              "You watch data get collected, but not shared back.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-soft mt-0.5">&mdash;</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Lab keys */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Giving your community the lab keys.</SectionLabel>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-4 mb-6">
            LoMio puts the tools for evidence generation in the hands of the
            people who understand the problem best.
          </p>
          <div className="space-y-3 max-w-3xl">
            {[
              "Evidence you can bring into rooms that ignored your stories.",
              "Consent-first collaboration with brands and health systems.",
              "Decision traces that show who decided what, and why.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">{"\u2713"}</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Won't do */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What we will not do.</SectionLabel>
          <div className="bg-purple-deep text-white rounded-2xl p-8 mt-6 max-w-3xl">
            <div className="space-y-3">
              {[
                "We will not sell community data as an asset class.",
                "We will not design systems that hide how decisions are made.",
                "We will not treat your community as a \u2018segment\u2019 to be mined.",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-300 mt-0.5">{"\u00D7"}</span>
                  <span className="text-white/90">{b}</span>
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
            Let&rsquo;s design how your community shows up in this system.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Schedule a working session
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}