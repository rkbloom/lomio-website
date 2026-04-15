"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import AudienceCard from "@/components/AudienceCard";

const audiences = [
  {
    title: "Pharma",
    tagline: "Find real-world insights\u2014not just assumptions.",
    href: "/cohorts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6v11a3 3 0 0 1-3 3 3 3 0 0 1-3-3V3z"/><path d="M9 3 3 9"/><path d="M15 3l6 6"/></svg>
    ),
  },
  {
    title: "Insurance",
    tagline: "Make decisions you can explain and defend.",
    href: "/cohorts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    title: "Providers",
    tagline: "Understand patients beyond charts.",
    href: "/condition",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
  },
  {
    title: "Gyms & Sports",
    tagline: "Turn performance data into real insight.",
    href: "/optimized",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    ),
  },
  {
    title: "Wellness Brands",
    tagline: "Build trust people actually believe in.",
    href: "/community",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function SolutionsByAudience() {
  return (
    <section id="solutions" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Who it&rsquo;s for.</SectionLabel>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {audiences.map((a) => (
            <AudienceCard key={a.title} {...a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}