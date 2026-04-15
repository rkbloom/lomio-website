import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const problems = [
  "You don\u2019t know why something was recommended.",
  "You don\u2019t know who used your data.",
  "You don\u2019t know what happens next.",
];

export default function ProblemFraming() {
  return (
    <AnimatedSection className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Why people don&rsquo;t trust the system.</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">{"\u00D7"}</span>
                <p className="font-bold text-purple-deep">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-purple-mid text-lg leading-relaxed">
            Right now, your data gets collected, stored, and used to make
            decisions about you&mdash;but no one shows you how those decisions
            happen. That&rsquo;s not just confusing. It&rsquo;s risky.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}