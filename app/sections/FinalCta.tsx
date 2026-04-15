"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function FinalCta() {
  return (
    <AnimatedSection className="bg-purple-dark text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center" id="demo">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white max-w-2xl mx-auto">
          Ready to see how it works in your world?
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
