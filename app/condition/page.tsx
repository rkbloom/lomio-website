import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Individual | LoMio",
  description:
    "You shouldn\u2019t have to repeat your story. LoMio helps systems understand you\u2014your life, your context, your reality\u2014while you stay in control.",
};

export default function ConditionPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            You shouldn&rsquo;t have to repeat your story.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio helps systems understand you&mdash;your life, your context,
            your reality. And you stay in control the whole time.
          </p>
        </div>
      </AnimatedSection>

      {/* What the system understands */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What the system finally sees.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "Your life.",
              "Your context.",
              "Your reality.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-soft mt-0.5">&mdash;</span>
                <p className="text-purple-mid leading-relaxed font-medium">{b}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-6">
            LoMio helps the organizations you trust see your full context&mdash;
            not just your lab values&mdash;while your data stays in your own
            secure space.
          </p>
        </div>
      </AnimatedSection>

      {/* You stay in control */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>You stay in control the whole time.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "Signals are stored in secure personal vaults, not one giant warehouse.",
              "Partners need a purpose and your consent to access intelligence.",
              "You can see\u2014in plain language\u2014what decisions are being made and why.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-purple-deep flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-purple-ghost rounded-2xl py-12 mx-6 lg:mx-auto max-w-6xl mb-20">
        <div className="px-6 text-center">
          <p className="font-display text-xl font-bold text-purple-deep max-w-2xl mx-auto">
            Your data becomes something you control&mdash;not something that
            controls you.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
