import HeroSection from "./sections/HeroSection";
import SocialProofStrip from "./sections/SocialProofStrip";
import ProblemFraming from "./sections/ProblemFraming";
import HowItWorks from "./sections/HowItWorks";
import SolutionsByAudience from "./sections/SolutionsByAudience";
import KeyOutcomes from "./sections/KeyOutcomes";
import CommunityEthics from "./sections/CommunityEthics";
import FaqTeaser from "./sections/FaqTeaser";
import FinalCta from "./sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemFraming />
      <SocialProofStrip />
      <HowItWorks />
      <SolutionsByAudience />
      <KeyOutcomes />
      <CommunityEthics />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}