export default function Badge({ children, tone = "default" }) {
  const colors =
    tone === "orange"
      ? "bg-[#8f5cb1]/20 text-[#d1b3ff]"
      : "bg-[#a57ed8]/10 text-[#cbd5e1]";

  return <span className={`rounded px-2 py-1 text-xs ${colors}`}>{children}</span>;
}
