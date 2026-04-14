import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import AccordionItem from "@/components/AccordionItem";

const faqs = [
  {
    question: "How does LoMio handle consent and privacy?",
    answer:
      "LoMio uses user-level consent flows with full audit trails. Signals are stored in distributed digital doppelg\u00e4nger vaults, not centralized warehouses. Consent can be revoked at any time, and every access is purpose-bound and logged.",
  },
  {
    question:
      "Can we use LoMio without moving our data into a new warehouse?",
    answer:
      "Yes. LoMio captures signals at the edge and integrates with your existing stack via APIs and SDKs. There is no requirement to migrate data into a new centralized warehouse.",
  },
  {
    question:
      "What makes this different from a context graph or CDP?",
    answer:
      "Unlike CDPs, LoMio captures agentic decisions with human-in-the-loop approvals, building a richer context graph where every node has provenance, consent, and an audit trail.",
  },
];

export default function FaqTeaser() {
  return (
    <AnimatedSection className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Questions you should be asking.</SectionLabel>
        <div className="mt-6 max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={i} question={f.question} answer={f.answer} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/faq"
            className="text-sm font-semibold text-purple-deep hover:text-purple-mid transition-colors"
          >
            See all questions &rarr;
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}