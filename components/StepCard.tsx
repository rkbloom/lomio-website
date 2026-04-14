"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function StepCard({
  step,
  title,
  body,
}: {
  step: number;
  title: string;
  body: string;
}) {
  return (
    <motion.div variants={item} className="bg-white rounded-2xl p-8 shadow-sm border border-[rgba(45,27,78,0.08)]">
      <div className="w-8 h-8 rounded-full bg-purple-ghost text-purple-deep text-sm font-bold flex items-center justify-center mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-purple-deep mb-2">{title}</h3>
      <p className="text-base text-purple-mid leading-relaxed">{body}</p>
    </motion.div>
  );
}