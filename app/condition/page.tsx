import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Condition-Focused Seeker | LoMio",
  description:
    "Your condition has a story. LoMio helps organizations see your context, not just your lab values \u2014 while you keep control.",
};

export default function ConditionPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            Your condition has a story. It&rsquo;s more than a code in a chart.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio helps the organizations you trust see your context, not just
            your lab values &mdash; while you keep control of your data in a
            digital doppelg&auml;nger vault.
          </p>
        </div>
      </AnimatedSection>

      {/* Tired of repeating */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>You&rsquo;re tired of repeating yourself.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "Telling your story over and over to every new provider.",
              "Seeing decisions made about you without understanding why.",
              "Getting advice that ignores your life, your culture, your constraints.",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-purple-soft mt-0.5">&mdash;</span>
                <p className="text-purple-mid leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* System listens */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What it means when the system finally listens.</SectionLabel>
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-4">
            LoMio is infrastructure. You won&rsquo;t log into &ldquo;LoMio&rdquo;
            most days. You&rsquo;ll feel it when your care teams, your insurance,
            or your wellness programs start acting like they know the real you
            &mdash; with recommendations that match your reality, and decisions
            they can explain.
          </p>
          <p className="text-sm text-purple-soft italic mt-4 max-w-3xl">
            You decide where your digital doppelg&auml;nger vault goes. You can
            see and retract your consent. Human beings stay in the loop.
          </p>
        </div>
      </AnimatedSection>

      {/* Data not product */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Your data is not the product.</SectionLabel>
          <div className="space-y-4 mt-6 max-w-3xl">
            {[
              "Signals are stored in secure personal vaults, not one giant warehouse.",
              "Partners need a purpose and your consent to access intelligence.",
              "You can see \u2014 in plain language \u2014 what decisions are being made and why.",
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
          <p className="text-xl font-bold text-purple-deep max-w-2xl mx-auto">
            Ask your providers, your health plan, and your wellness programs how
            they&rsquo;re using LoMio &mdash; and whether they can show you their
            work.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}