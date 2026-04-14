"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function AudienceCard({
  icon,
  title,
  tagline,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  href: string;
}) {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(45,27,78,0.08)] hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <div className="text-purple-deep mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-purple-deep mb-2">{title}</h3>
      <p className="text-base text-purple-mid leading-relaxed mb-4">{tagline}</p>
      <Link href={href} className="text-sm font-semibold text-purple-deep hover:text-purple-mid transition-colors">
        Learn more &rarr;
      </Link>
    </motion.div>
  );
}