import AnimatedSection from "@/components/AnimatedSection";

const badges = [
  "Pharma",
  "Health Insurers",
  "Health Systems",
  "Gyms & Sports",
  "Wellness Brands",
];

export default function SocialProofStrip() {
  return (
    <AnimatedSection className="bg-purple-ghost py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-lg font-semibold text-purple-deep mb-6">
          Built for organizations who need AI they can explain.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="bg-white border border-[rgba(45,27,78,0.12)] rounded-full px-5 py-2 text-sm text-purple-deep font-medium"
            >
              {b}
            </span>
          ))}
        </div>
        <p className="text-xs text-purple-soft text-center mt-4">
          Show the work behind every decision &mdash; to regulators, clinicians,
          patients, and fans.
        </p>
      </div>
    </AnimatedSection>
  );
}