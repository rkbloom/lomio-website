export default function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
        light ? "text-white/60" : "text-purple-soft"
      }`}
    >
      {children}
    </p>
  );
}