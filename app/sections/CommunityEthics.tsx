import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export default function CommunityEthics() {
  return (
    <AnimatedSection className="bg-purple-deep text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel light>Built with the people inside the data.</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          <div className="rounded-2xl bg-purple-mid/30 aspect-[4/3] w-full" />
          <p className="text-white/90 text-xl leading-relaxed">
            LoMio was architected so the people generating the signal never lose
            ownership or dignity. Digital doppelg&auml;nger vaults keep control
            with individuals, devices, and communities. Brands and institutions
            access intelligence with clear consent, clear purpose, and clear
            accountability. That&rsquo;s not a feature. It&rsquo;s the
            foundation.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}