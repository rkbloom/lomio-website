"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import StepCard from "@/components/StepCard";

const steps = [
  {
    title: "Capture at the edge",
    body: "Signals are captured where life actually happens \u2014 on devices, in apps, inside real interactions \u2014 before context is stripped away.",
  },
  {
    title: "Propose with full context",
    body: "Agents propose actions with the complete story, not a summary. Humans approve, override, or refine when nuance matters.",
  },
  {
    title: "Learn from every decision",
    body: "Each human decision becomes a high-value precedent in a richer graph that explains what happened, why, and under what conditions.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>How decisions become explainable.</SectionLabel>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {steps.map((s, i) => (
            <StepCard key={i} step={i + 1} title={s.title} body={s.body} />
          ))}
        </motion.div>
        <p className="text-center text-purple-mid mt-10 max-w-2xl mx-auto">
          You get decision intelligence that&rsquo;s privacy-first, consent-based,
          and ready for regulators.
        </p>
      </div>
    </section>
  );
}