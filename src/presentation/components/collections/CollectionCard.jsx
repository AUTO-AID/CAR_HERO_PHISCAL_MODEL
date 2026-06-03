import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Database } from "lucide-react";
import { getCollectionDomain, getDomainStyle } from "@/domain/entities/domains";
import { featureArabic } from "@/domain/entities/translations";
import {
  cleanType,
  collectionNote,
  collectionPurpose,
  fieldDescription,
} from "@/infrastructure/services/schema.service";
import Badge from "@/presentation/components/ui/Badge";
import { iconMap } from "./icons";

export default function CollectionCard({ item, index, expanded, onToggle }) {
  const Icon = iconMap[item.collection] || Database;
  const isExpanded = expanded === item.collection;
  const domainStyle = getDomainStyle(getCollectionDomain(item.collection));

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ delay: Math.min(index * 0.02, 0.2) }}
      className="group overflow-hidden rounded-xl border bg-[#1a1229]/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all hover:bg-[#1a1229] hover:shadow-[0_16px_48px_rgba(165,126,216,0.15)]"
      style={{ 
        borderColor: `${domainStyle.color}33`, 
        borderLeft: `4px solid ${domainStyle.color}` 
      }}
    >
      <button
        type="button"
        onClick={() => onToggle(isExpanded ? "" : item.collection)}
        className="flex w-full items-start justify-between gap-6 p-6 text-left"
      >
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a57ed8]/10 text-[#c9a7e3] ring-1 ring-[#a57ed8]/20 transition-all group-hover:scale-110 group-hover:bg-[#a57ed8]/20 group-hover:text-white group-hover:ring-[#a57ed8]/40">
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="text-xl font-bold tracking-tight text-white">{item.collection}</h2>
              <div className="flex items-center gap-1.5">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1"
                  style={{ background: `${domainStyle.color}15`, color: domainStyle.color, ringColor: `${domainStyle.color}33` }}
                >
                  {domainStyle.label}
                </span>
              </div>
              {item.status === "schema-only" && (
                <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-400 ring-1 ring-orange-500/20">
                  مخطط فقط
                </span>
              )}
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-[#cbd5e1]/90">
              {collectionPurpose(item)}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-[#c9a7e3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9a7e3] shadow-[0_0_8px_#c9a7e3]"></span>
                {item.fields.length} حقول
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-[#d1b3ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d1b3ff] shadow-[0_0_8px_#d1b3ff]"></span>
                {item.indexes.length} فهارس
              </div>
              <div className="text-[11px] font-medium text-[#cbd5e1]/40">
                {featureArabic[item.feature] || item.feature}
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-12 flex-col items-center justify-between">
          <ChevronDown
            className={`h-5 w-5 text-[#c9a7e3]/40 transition-all duration-300 group-hover:text-[#c9a7e3] ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#a57ed8]/10 bg-[#0d0815]/30"
          >
            <div className="p-6">
              {collectionNote(item) && (
                <div className="mb-6 rounded-lg border border-[#d1b3ff]/20 bg-[#d1b3ff]/5 p-4 text-sm leading-relaxed text-[#d1b3ff]">
                  <div className="mb-1 flex items-center gap-2 font-bold">
                    <Database className="h-4 w-4" />
                    ملاحظة هامة
                  </div>
                  {collectionNote(item)}
                </div>
              )}

              <div className="overflow-hidden rounded-xl border border-[#a57ed8]/20 bg-[#0d0815]/50 shadow-inner">
                <table className="w-full min-w-[720px] text-sm text-left">
                  <thead>
                    <tr className="bg-[#a57ed8]/10 text-[11px] font-bold uppercase tracking-widest text-[#c9a7e3]">
                      <th className="px-4 py-4">الحقل</th>
                      <th className="px-4 py-4">النوع</th>
                      <th className="px-4 py-4 text-right">الوصف التقني</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#a57ed8]/10">
                    {item.fields.map((field) => (
                      <tr
                        key={`${item.collection}-${field.name}`}
                        className="transition hover:bg-white/5"
                      >
                        <td className="px-4 py-4 font-mono text-[13px] font-semibold text-[#c9a7e3]">{field.name}</td>
                        <td className="px-4 py-4 font-mono text-[12px] text-[#d1b3ff]/80">
                          <span className="rounded bg-white/5 px-1.5 py-0.5">{cleanType(field.type)}</span>
                        </td>
                        <td className="px-4 py-4 text-right text-[13px] leading-6 text-[#cbd5e1]">
                          {fieldDescription(field)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#c9a7e3]">الفهارس النشطة (Indexes)</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.indexes.map((indexName) => (
                      <span
                        key={indexName}
                        className="rounded-lg border border-[#a57ed8]/20 bg-[#0d0815] px-3 py-1.5 font-mono text-[11px] text-[#cbd5e1]"
                      >
                        {indexName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end text-right">
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-[#c9a7e3]/40">المسار التقني للسكيمة</h3>
                  <code className="text-[10px] text-[#cbd5e1]/30 hover:text-[#cbd5e1]/60 transition-colors">
                    {item.source}
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
