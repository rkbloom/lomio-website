import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About | LoMio",
  description:
    "Built for trust, not hype. Learn why LoMio exists and what we believe.",
};

const beliefs = [
  "People should own their data.",
  "Decisions should be explainable.",
  "Systems should include human judgment.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight">
            Built for trust, not hype.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mx-auto mt-6">
            LoMio exists because people lost trust in how data is used.
          </p>
        </div>
      </AnimatedSection>

      {/* Brand Story */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Why we built this.</SectionLabel>
          <div className="max-w-3xl mt-6 space-y-5 text-lg text-purple-mid leading-relaxed">
            <p>
              There&rsquo;s a reason people don&rsquo;t trust systems with their
              data.
            </p>
            <p className="font-semibold text-purple-deep">
              It&rsquo;s not confusion.
              <br />
              It&rsquo;s history.
            </p>
            <p>
              For a long time, communities have watched their stories get
              collected, studied, and turned into value&mdash;without ever seeing
              that value come back.
            </p>
            <p>
              We built LoMio because that model is broken. Not just technically.
              Culturally.
            </p>
            <p>
              We believe people aren&rsquo;t just data points. They&rsquo;re
              participants. They&rsquo;re contributors. They&rsquo;re owners.
            </p>
            <p>
              LoMio was designed so the power stays where it started&mdash;with
              the people.
            </p>
            <p>
              So when a decision gets made&mdash;about your health, your body,
              your life&mdash;you don&rsquo;t have to wonder where it came from.
            </p>
            <p className="font-semibold text-purple-deep">
              You can see it.
              <br />
              You can question it.
              <br />
              You can control it.
            </p>
            <p>
              Because the future of AI isn&rsquo;t just smarter systems. It
              &rsquo;s systems people can trust.
            </p>
            <p>
              And trust isn&rsquo;t a message. It&rsquo;s something you build
              into the architecture.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Beliefs */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>We believe.</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
          <p className="text-lg text-purple-mid leading-relaxed max-w-3xl mt-8">
            This isn&rsquo;t just technology.
            <br />
            It&rsquo;s a better way to build trust.
          </p>
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
