import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const gets = [
  "Explainable AI with a full decision trace.",
  "Cohort discovery without PHI exposure.",
  "Faster pilot-to-scale across brands and markets.",
  "Community-owned data that still powers your innovation.",
];

const stops = [
  "You stop guessing what really happened inside your journeys.",
  "You stop taking on the risk of centralized data hoarding.",
  "You stop relying on black-box models you can\u2019t defend.",
  "You stop asking people to trust AI they can\u2019t see into.",
];

export default function KeyOutcomes() {
  return (
    <AnimatedSection className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>What you get &mdash; and what you stop worrying about.</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-purple-deep text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">You get</h3>
            <ul className="space-y-3">
              {gets.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-300 mt-0.5">{"\u2713"}</span>
                  <span className="text-white/90">{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-[rgba(45,27,78,0.08)] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-purple-deep mb-4">You stop&hellip;</h3>
            <ul className="space-y-3">
              {stops.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">{"\u00D7"}</span>
                  <span className="text-purple-mid">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}