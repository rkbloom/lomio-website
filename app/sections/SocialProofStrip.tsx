import AnimatedSection from "@/components/AnimatedSection";

const solutions = [
  "You approve how your data is used",
  "You see how decisions are made",
  "You can change or remove access anytime",
];

export default function SocialProofStrip() {
  return (
    <AnimatedSection className="bg-purple-ghost py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-lg font-semibold text-purple-deep mb-6">
          What if you could see&mdash;and control&mdash;the process?
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {solutions.map((s) => (
            <span
              key={s}
              className="bg-white border border-[rgba(45,27,78,0.12)] rounded-full px-5 py-2 text-sm text-purple-deep font-medium"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="text-xs text-purple-soft text-center mt-4">
          LoMio changes the system. Instead of hiding decisions behind
          algorithms, it shows the full picture&mdash;and puts you in control.
        </p>
      </div>
    </AnimatedSection>
  );
}