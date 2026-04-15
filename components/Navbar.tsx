"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Community", href: "/community" },
  { label: "Individual", href: "/condition" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-[rgba(45,27,78,0.08)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-purple-deep font-bold text-xl">
          LoMio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-purple-mid hover:text-purple-deep transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-deep text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-purple-dark transition-all duration-200 inline-block"
          >
            Request a demo
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-purple-deep transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-purple-deep transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-purple-deep transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-cream border-b border-[rgba(45,27,78,0.08)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-purple-mid hover:text-purple-deep transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#demo"
                className="bg-purple-deep text-white rounded-full px-6 py-2.5 text-sm font-semibold text-center hover:bg-purple-dark transition-all duration-200"
              >
                Request a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}