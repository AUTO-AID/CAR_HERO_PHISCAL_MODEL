export default function Stat({ value, label, color }) {
  return (
    <div className="rounded-xl border border-[#a57ed8]/10 bg-white/5 px-4 py-2.5 shadow-sm transition hover:bg-white/10 hover:border-[#a57ed8]/30">
      <div className={`text-xl font-black tracking-tight ${color}`}>{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-[#cbd5e1]/40">{label}</div>
    </div>
  );
}
