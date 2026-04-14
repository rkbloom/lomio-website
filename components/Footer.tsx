import Link from "next/link";

const footerLinks = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link href="/" className="text-white font-bold text-xl">
            LoMio
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
          &copy; 2025 LoMio. Privacy-first by design.
        </div>
      </div>
    </footer>
  );
}