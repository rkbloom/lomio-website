import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const gets = [
  "Clear, explainable decisions.",
  "Faster, smarter insights.",
  "Data you can trust.",
];

const stops = [
  "Black-box AI.",
  "Risky data storage.",
  "Guesswork.",
];

export default function KeyOutcomes() {
  return (
    <AnimatedSection className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>What you get &mdash; and what you avoid.</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-purple-deep text-white rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-4">What you get:</h3>
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
            <h3 className="font-display text-xl font-bold text-purple-deep mb-4">What you avoid:</h3>
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