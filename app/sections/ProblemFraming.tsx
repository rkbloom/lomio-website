import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const problems = [
  "Dashboards that can\u2019t explain why anything happened.",
  "Centralized data hoards that create risk, not insight.",
  "Black-box models in environments that can\u2019t afford guesswork.",
  "Communities treated as data sources, not data owners.",
];

export default function ProblemFraming() {
  return (
    <AnimatedSection className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Why the old way is breaking trust.</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">&times;</span>
                <p className="font-bold text-purple-deep">{p}</p>
              </div>
            ))}
          </div>
          <p className="text-purple-mid text-lg leading-relaxed">
            Health and wellness leaders don&rsquo;t need more charts. They need
            decisions they can defend &mdash; backed by context, consent, and
            human judgment in the loop. LoMio was built to answer the question
            everyone is asking: &ldquo;Can you show your work?&rdquo;
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}