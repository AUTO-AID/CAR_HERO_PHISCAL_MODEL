import React from "react";
import { ArrowRight, Filter, Layers, Link2, Search } from "lucide-react";
import { useDiagram } from "@/application/contexts/diagram-context";
import TablesCanvas from "@/presentation/components/canvas/TablesCanvas";
import CollectionsList from "@/presentation/components/collections/CollectionsList";
import EndpointsSection from "@/presentation/components/endpoints/EndpointsSection";
import Stat from "@/presentation/components/ui/Stat";
import { featureArabic } from "@/domain/entities/translations";
import { getCollectionDomain, getDomainStyle } from "@/domain/entities/domains";
import {
  featureLabels,
  relationDescription,
} from "@/infrastructure/services/schema.service";

export default function Dashboard() {
  const {
    search,
    setSearch,
    feature,
    setFeature,
    showSchemaOnly,
    setShowSchemaOnly,
    expanded,
    setExpanded,
    normalized,
    filtered,
    activeCount,
    schemaOnlyCount,
    fieldCount,
    relationships,
    isLive,
    loading,
  } = useDiagram();

  return (
    <main className="min-h-screen bg-[#0d0815] text-[#f5f5f7]">
      <section className="sticky top-0 z-40 border-b border-[#a57ed8]/20 bg-[#0d0815]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo_carHero.png"
              alt="Car Hero"
              className="h-14 w-36 shrink-0 object-contain drop-shadow-[0_8px_24px_rgba(165,126,216,0.3)]"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-normal text-white md:text-3xl">
                  الموديل الفيزيائي - Car Hero
                </h1>
                {loading ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-bold text-white/40">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/40"></span>
                    جاري الاتصال...
                  </span>
                ) : isLive ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 ring-1 ring-emerald-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    مباشر
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-400 ring-1 ring-amber-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    محلي (احتياطي)
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[#cbd5e1]">
                {isLive 
                  ? "متصل بالباك إند حالياً ويقرأ مخططات قاعدة البيانات والـ APIs الحية مباشرة." 
                  : "موثق ومطابق لسكيمات Mongoose الحالية داخل CAR_HERO_BACKEND وتسجيلات الموديولات."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <Stat value={activeCount} label="فعال" color="text-[#c9a7e3]" />
            <Stat value={schemaOnlyCount} label="مخطط فقط" color="text-[#d1b3ff]" />
            <Stat value={fieldCount} label="حقول" color="text-[#a57ed8]" />
            <Stat value={relationships.length} label="علاقات" color="text-[#f5f5f7]" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-8 rounded-lg border border-[#a57ed8]/20 bg-[#1a1229] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.28)]">
          <div className="grid gap-3 lg:grid-cols-[1fr_220px_auto]">
            <label className="relative block">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#a57ed8]/70" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="h-11 w-full rounded-md border border-[#a57ed8]/20 bg-[#0d0815] pl-10 pr-3 text-sm text-[#f5f5f7] outline-none transition placeholder:text-[#cbd5e1]/50 focus:border-[#a57ed8] focus:ring-4 focus:ring-[#a57ed8]/10"
                placeholder="ابحث باسم جدول، موديل، حقل، علاقة، فهرس، او ملف السكيمة..."
              />
            </label>

            <label className="relative block">
              <Filter className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#a57ed8]/70" />
              <select
                value={feature}
                onChange={(event) => setFeature(event.target.value)}
                className="h-11 w-full rounded-md border border-[#a57ed8]/20 bg-[#0d0815] pl-10 pr-3 text-sm text-[#f5f5f7] outline-none transition focus:border-[#a57ed8] focus:ring-4 focus:ring-[#a57ed8]/10"
              >
                {featureLabels.map((name) => (
                  <option key={name} value={name}>
                    {featureArabic[name] || name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex h-11 items-center gap-2 rounded-md border border-[#a57ed8]/20 bg-[#0d0815] px-3 text-sm text-[#cbd5e1]">
              <input
                type="checkbox"
                checked={showSchemaOnly}
                onChange={(event) => setShowSchemaOnly(event.target.checked)}
                className="h-4 w-4 accent-[#a57ed8]"
              />
              اظهار المخططات غير المفعلة
            </label>
          </div>
        </section>

        <TablesCanvas items={normalized} />

        <CollectionsList items={filtered} expanded={expanded} onToggle={setExpanded} />

        <EndpointsSection />

        <section className="mt-12 overflow-hidden rounded-2xl border border-[#a57ed8]/20 bg-[#1a1229] shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
          <div className="border-b border-[#a57ed8]/10 bg-[#0d0815]/50 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#a57ed8]/10 text-[#c9a7e3]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">خريطة العلاقات المتداخلة</h2>
                <p className="text-[10px] text-[#cbd5e1]/40 uppercase tracking-widest mt-0.5">Inter-collection Entity Relationships</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-px bg-[#a57ed8]/10 md:grid-cols-2 lg:grid-cols-3">
            {relationships.map(([source, target, label, description]) => {
              const domain = getCollectionDomain(source.split("/")[0]);
              const style = getDomainStyle(domain);
              
              return (
                <div 
                  key={`${source}-${target}-${label}`} 
                  className="group relative bg-[#1a1229] p-6 transition-all hover:z-10 hover:bg-[#1a1229]/40"
                >
                  <div 
                    className="absolute inset-y-0 left-0 w-1 opacity-20 transition-all group-hover:opacity-100" 
                    style={{ backgroundColor: style.color }}
                  ></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[12px] font-bold text-white group-hover:bg-white/10 transition-colors">
                      {source}
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/20 transition-colors group-hover:text-white/60" />
                    <div className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[12px] font-bold text-white group-hover:bg-white/10 transition-colors">
                      {target}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1.5 rounded bg-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#a57ed8]/80 group-hover:text-[#a57ed8] transition-colors">
                      <Link2 className="h-3 w-3" />
                      {label}
                    </div>
                  </div>

                  <p className="mt-3 text-[13px] leading-relaxed text-[#cbd5e1]/60 group-hover:text-[#cbd5e1] transition-colors">
                    {relationDescription(source, target, description)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
