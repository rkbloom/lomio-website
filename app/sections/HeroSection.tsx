"use client";

import { motion } from "framer-motion";
import DecisionTraceUI from "@/components/DecisionTraceUI";

export default function HeroSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-purple-deep leading-tight tracking-tight">
            Community-owned data. Real-world health decisions.
          </h1>
          <p className="text-lg text-purple-mid leading-relaxed max-w-2xl mt-6">
            LoMio is the first end-to-end agentic AI platform that turns
            consented health and behavioral signals into explainable decision
            intelligence &mdash; for pharma, payers, providers, gyms, sports
            properties, and wellness brands.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-purple-deep text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-purple-dark transition-all duration-200"
            >
              Request a demo
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-purple-deep text-purple-deep rounded-full px-6 py-3 text-sm font-semibold bg-transparent hover:bg-purple-ghost transition-all duration-200"
            >
              See how it works
            </motion.a>
          </div>
          <p className="text-xs text-purple-soft mt-6">
            Privacy-first by design &middot; Human-in-the-loop &middot; Built
            for regulated health and wellness
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <DecisionTraceUI />
        </motion.div>
      </div>
    </section>
  );
}