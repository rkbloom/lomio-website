import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "FAQ | LoMio",
  description:
    "Ask the hard questions. LoMio is designed so your legal, compliance, and clinical teams can get straight answers.",
};

const groups = [
  {
    label: "Data & Privacy",
    items: [
      {
        question: "Do we need to move all our data into LoMio?",
        answer:
          "No. LoMio captures signals at the edge using digital doppelg\u00e4nger vaults and purpose-bound access. Your data stays distributed \u2014 we bring the intelligence to where the data already lives rather than centralizing it into a new warehouse.",
      },
      {
        question: "How is consent managed and audited?",
        answer:
          "LoMio implements user-level consent flows with complete audit logs. Every grant and revocation is timestamped and traceable. Users can see, in plain language, who has access to what intelligence and why \u2014 and can revoke consent at any time.",
      },
      {
        question: "What regulations does LoMio support?",
        answer:
          "LoMio\u2019s architecture is designed to support HIPAA, GDPR, and emerging AI governance frameworks. The distributed vault architecture, purpose-bound access, and full decision audit trails keep you aligned by default rather than through bolt-on compliance layers.",
      },
    ],
  },
  {
    label: "Technology & Integration",
    items: [
      {
        question: "How does LoMio integrate with our existing stack?",
        answer:
          "LoMio connects through APIs and SDKs that sit alongside your existing CDPs, CRMs, EHRs, and analytics tools. We don\u2019t replace your infrastructure \u2014 we add an explainable decision layer on top of it.",
      },
      {
        question:
          "What\u2019s the difference between LoMio and a context graph or CDP?",
        answer:
          "CDPs aggregate data profiles. LoMio captures agentic decisions with human-in-the-loop approvals, building a richer context graph where every node carries provenance, consent, and a full audit trail. It\u2019s decision intelligence, not just data unification.",
      },
      {
        question:
          "Is human-in-the-loop a temporary step toward full automation?",
        answer:
          "No. Human judgment is a permanent, first-class signal in LoMio. Approvals, overrides, and refinements are treated as high-value training data that makes the system smarter \u2014 not as friction to be automated away.",
      },
    ],
  },
  {
    label: "Governance & Accountability",
    items: [
      {
        question: "Who can see what was decided and why?",
        answer:
          "LoMio provides role-based views into decision traces. Internal teams see operational detail, regulators see compliance-relevant audit trails, and consumers see plain-language summaries of how decisions affect them.",
      },
      {
        question: "How do we prevent biased or unsafe decisions?",
        answer:
          "LoMio includes continuous monitoring, override logging, and cohort-level audits. Every decision is traceable to its inputs and the human judgments that shaped it, making bias detectable and correctable rather than hidden inside a black box.",
      },
      {
        question: "What happens when we disagree with a recommendation?",
        answer:
          "Overrides are first-class citizens in LoMio. When you disagree and choose a different path, that override becomes high-value training data that improves future recommendations for you and people in similar contexts.",
      },
    ],
  },
  {
    label: "Commercial & Deployment",
    items: [
      {
        question: "How do you structure pilots and pricing?",
        answer:
          "We offer paid pilots scoped to a specific use case or cohort, followed by annual platform licensing. Add-ons are available for additional audiences, integrations, and advanced analytics capabilities.",
      },
      {
        question: "How long does it take to see value?",
        answer:
          "Typical pilots run 8\u201312 weeks. Most organizations see early insights within the first few weeks as the context graph begins forming from real-world signals and human decisions.",
      },
      {
        question: "Who supports us day-to-day?",
        answer:
          "Every customer gets a dedicated implementation team during onboarding, a partner success manager for ongoing optimization, and access to our platform team for technical integration support.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight max-w-3xl">
            Ask the hard questions. We built for them.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio is designed so your legal, compliance, and clinical teams can
            get straight answers about how AI decisions are made.
          </p>
        </div>
      </AnimatedSection>

      {/* FAQ groups */}
      <section className="bg-cream py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {groups.map((g) => (
            <div key={g.label} className="mb-12">
              <h2 className="text-lg font-bold text-purple-deep border-b border-[rgba(45,27,78,0.12)] pb-2 mb-4">
                {g.label}
              </h2>
              {g.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="bg-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold text-purple-deep max-w-2xl mx-auto">
            If your question isn&rsquo;t here, it probably belongs in a demo
            anyway.
          </p>
          <div className="mt-8">
            <a
              href="#demo"
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
            >
              Talk to a LoMio specialist
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}