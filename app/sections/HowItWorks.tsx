"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import StepCard from "@/components/StepCard";

const steps = [
  {
    title: "Capture real life",
    body: "Your data comes from real moments\u2014apps, devices, and daily experiences.",
  },
  {
    title: "Propose decisions",
    body: "The system suggests actions, but people can approve or change them.",
  },
  {
    title: "Learn and improve",
    body: "Every decision makes the system smarter\u2014and more accurate.",
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
        <SectionLabel>How it works.</SectionLabel>
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
          Better decisions. More trust. Less risk.
        </p>
      </div>
    </section>
  );
}