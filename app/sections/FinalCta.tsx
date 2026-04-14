"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

export default function FinalCta() {
  return (
    <AnimatedSection className="bg-purple-dark text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center" id="demo">
        <SectionLabel light>Ready to see it in your world?</SectionLabel>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mt-4 max-w-3xl mx-auto">
          If you need AI you can stand behind &mdash; in audits, in boardrooms,
          and in the lives of the people you serve &mdash; LoMio is built for
          you.
        </h2>
        <div className="mt-8">
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-white text-purple-deep rounded-full px-8 py-3 text-sm font-semibold hover:bg-purple-ghost transition-all duration-200"
          >
            Request a demo
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
}