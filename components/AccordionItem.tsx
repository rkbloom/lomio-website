"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[rgba(45,27,78,0.12)] py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-bold text-purple-deep pr-4">{question}</span>
        <span className="text-purple-deep text-xl flex-shrink-0 w-6 text-center">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-purple-mid leading-relaxed pt-3">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}