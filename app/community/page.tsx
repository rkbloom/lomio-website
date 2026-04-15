import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Community | LoMio",
  description:
    "Your community deserves more than being studied. LoMio helps communities keep ownership of their data and participate in decisions.",
};

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            Your community deserves more than being studied.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio helps communities keep ownership of their data, turn lived
            experience into real impact, and participate in decisions&mdash;not
            just observe them.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Talk to us about community partnerships
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* The shared truth */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>There&rsquo;s a shared truth.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "Data has been taken.",
              "Stories have been used.",
              "Benefits didn\u2019t come back.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-soft mt-0.5">&mdash;</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-purple-deep font-semibold mt-8 max-w-3xl">
            This time, it&rsquo;s different. You&rsquo;re in control.
          </p>
        </div>
      </AnimatedSection>

      {/* What LoMio helps communities do */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What LoMio helps communities do.</SectionLabel>
          <div className="space-y-3 mt-6 max-w-3xl">
            {[
              "Keep ownership of their data.",
              "Turn lived experience into real impact.",
              "Participate in decisions\u2014not just observe them.",
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
          <p className="font-display text-2xl font-bold text-purple-deep max-w-2xl mx-auto">
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
