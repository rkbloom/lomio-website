"use client";

import { motion } from "framer-motion";

const rows = [
  { color: "bg-green-400", label: "Signal captured \u2014 wearable HRV spike", time: "0.4s ago" },
  { color: "bg-amber-400", label: "Agent proposed: adjust recovery protocol", time: "0.3s ago" },
  { color: "bg-purple-deep", label: "\u2713 Human approved", time: "0.2s ago" },
  { color: "bg-green-400", label: "Precedent logged to context graph", time: "just now" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function DecisionTraceUI() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <p className="text-xs font-semibold text-purple-soft uppercase tracking-widest mb-4">
        Decision Trace
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {rows.map((r, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex items-center gap-3 rounded-lg bg-cream px-3 py-2.5"
          >
            <span className={`w-2.5 h-2.5 rounded-full ${r.color} flex-shrink-0`} />
            <span className="text-sm text-purple-deep font-medium flex-1">{r.label}</span>
            <span className="text-xs text-purple-soft flex-shrink-0">{r.time}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-ghost px-3 py-1 text-xs font-medium text-purple-deep">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-deep" />
          Human-in-the-loop active
        </span>
      </div>
    </div>
  );
}