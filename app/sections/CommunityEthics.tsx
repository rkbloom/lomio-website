import AnimatedSection from "@/components/AnimatedSection";

export default function CommunityEthics() {
  return (
    <AnimatedSection className="bg-purple-deep text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl">
          Your data doesn&rsquo;t live in their system. It lives with you.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-10">
          <div className="text-white/90 text-lg leading-relaxed space-y-4">
            <p>Your Digital Doppelg&auml;nger Vault is your personal data space.</p>
            <p>
              Companies don&rsquo;t own your data.
              <br />
              They ask to use it.
            </p>
            <p>You decide:</p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-white/50 mt-0.5">&rarr;</span>
                <span>who gets access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/50 mt-0.5">&rarr;</span>
                <span>why they get it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/50 mt-0.5">&rarr;</span>
                <span>and how long it lasts</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-purple-mid/30 aspect-[4/3] w-full" />
        </div>
      </div>
    </AnimatedSection>
  );
}
