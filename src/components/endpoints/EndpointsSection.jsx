import React from "react";
import { ChevronDown, KeyRound, Link2, Search, Server } from "lucide-react";
import { backendEndpoints } from "../../data/endpoints";
import { collections } from "../../data/collections";
import { getCollectionDomain, getDomainStyle } from "../../data/domains";

const methodClasses = {
  GET: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  POST: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  PUT: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  PATCH: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  DELETE: "border-rose-400/30 bg-rose-400/10 text-rose-200",
};

const arabicNames = {
  admins: "المديرين",
  users: "المستخدمين",
  providers: "المزودين",
  services: "الخدمات",
  vehicles: "السيارات",
  maintenancerecords: "سجلات الصيانة",
  vehiclereminders: "تذكيرات السيارات",
  bookingdocuments: "الحجوزات",
  orders: "الطلبات",
  wallets: "المحافظ",
  transactions: "المعاملات",
  subscription_plans: "خطط الاشتراك",
  user_subscriptions: "اشتراكات المستخدمين",
  chats: "المحادثات",
  messages: "الرسائل",
  notifications: "الاشعارات",
  reviews: "التقييمات",
  settings: "الاعدادات",
  pending_registrations: "التسجيلات المؤقتة",
  logouts: "تسجيلات الخروج",
  promocodes: "اكواد الخصم",
  system: "النظام",
};

function endpointMatches(endpoint, query) {
  if (!query) return true;
  const text = [
    endpoint.method,
    endpoint.path,
    endpoint.summary,
    endpoint.description,
    endpoint.module,
    endpoint.controller,
    endpoint.handler,
    endpoint.collections.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return text.includes(query);
}

function buildGroups(query) {
  const collectionNames = Array.from(new Set(collections.map((item) => item.collection)));
  const endpointCollections = Array.from(new Set(backendEndpoints.flatMap((endpoint) => endpoint.collections)));
  const names = Array.from(new Set([...collectionNames, ...endpointCollections])).sort();

  return names
    .map((name) => {
      const endpoints = backendEndpoints.filter(
        (endpoint) => endpoint.collections.includes(name) && endpointMatches(endpoint, query)
      );
      const total = backendEndpoints.filter((endpoint) => endpoint.collections.includes(name)).length;
      return { name, endpoints, total };
    })
    .filter((group) => group.total > 0);
}

function ParamsLine({ label, items }) {
  if (!items?.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="text-[#cbd5e1]/55">{label}</span>
      {items.map((item) => (
        <span key={typeof item === "string" ? item : item.name} className="rounded bg-[#0d0815] px-2 py-1 font-mono text-[#c9a7e3]">
          {typeof item === "string" ? item : `${item.name}${item.required ? " *" : ""}`}
        </span>
      ))}
    </div>
  );
}

function EndpointCard({ endpoint }) {
  return (
    <article className="rounded-lg border border-[#a57ed8]/15 bg-[#0d0815]/70 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className={`rounded border px-2 py-1 font-mono text-xs font-bold ${methodClasses[endpoint.method] || methodClasses.GET}`}>
              {endpoint.method}
            </span>
            <span className="rounded border border-[#a57ed8]/20 bg-[#1a1229] px-2 py-1 text-xs text-[#cbd5e1]">
              {endpoint.auth}
            </span>
            <span className="rounded bg-[#a57ed8]/10 px-2 py-1 text-xs text-[#d1b3ff]">
              {endpoint.module}
            </span>
          </div>
          <h4 className="font-mono text-sm font-bold text-white break-all">{endpoint.path}</h4>
          <p className="mt-2 text-sm leading-6 text-[#cbd5e1]">{endpoint.summary}</p>
          {endpoint.description && <p className="mt-1 text-xs leading-5 text-[#cbd5e1]/60">{endpoint.description}</p>}
        </div>
        <div className="shrink-0 rounded-md border border-[#a57ed8]/15 bg-[#1a1229] px-3 py-2 text-xs text-[#cbd5e1]/70">
          <div className="font-mono text-[#f5f5f7]">{endpoint.controller}</div>
          <div className="mt-1 font-mono">{endpoint.handler}</div>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <ParamsLine label="Path Params" items={endpoint.params} />
        <ParamsLine label="Query" items={endpoint.query} />
        {endpoint.body && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#cbd5e1]/55">Body</span>
            <span className="rounded bg-[#0d0815] px-2 py-1 font-mono text-[#d1b3ff]">
              {endpoint.body.dto || endpoint.body.fields.join(", ")}
            </span>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#cbd5e1]/50">
          <Link2 className="h-3.5 w-3.5" />
          <span className="break-all font-mono">{endpoint.source}:{endpoint.line}</span>
        </div>
      </div>
    </article>
  );
}

export default function EndpointsSection() {
  const [query, setQuery] = React.useState("");
  const [openGroup, setOpenGroup] = React.useState("users");
  const normalizedQuery = query.trim().toLowerCase();
  const groups = React.useMemo(() => buildGroups(normalizedQuery), [normalizedQuery]);
  const visibleCount = groups.reduce((sum, group) => sum + group.endpoints.length, 0);

  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-[#a57ed8]/20 bg-[#1a1229] shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
      <div className="border-b border-[#a57ed8]/10 bg-[#0d0815]/50 px-6 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#a57ed8]/10 text-[#c9a7e3]">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Endpoints الخاصة بكل جدول</h2>
              <p className="mt-1 text-sm text-[#cbd5e1]/65">
                محدثة من controllers داخل CAR_HERO_BACKEND، وتشمل المسار، الطريقة، الحماية، البارامترات، ومصدر الكود.
              </p>
            </div>
          </div>

          <label className="relative block w-full lg:w-[360px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c9a7e3]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-md border border-[#a57ed8]/20 bg-[#0d0815] pl-9 pr-3 text-sm text-[#f5f5f7] outline-none transition placeholder:text-[#cbd5e1]/45 focus:border-[#d1b3ff] focus:ring-4 focus:ring-[#a57ed8]/10"
              placeholder="ابحث endpoint، module، controller، path..."
            />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#cbd5e1]/70">
          <span className="rounded bg-[#a57ed8]/10 px-2 py-1">{backendEndpoints.length} endpoints اجمالي</span>
          <span className="rounded bg-[#a57ed8]/10 px-2 py-1">{visibleCount} ظاهرة حاليا</span>
          <span className="inline-flex items-center gap-1 rounded bg-[#a57ed8]/10 px-2 py-1">
            <KeyRound className="h-3.5 w-3.5" />
            JWT/Public موضح لكل نقطة
          </span>
        </div>
      </div>

      <div className="divide-y divide-[#a57ed8]/10">
        {groups.map((group) => {
          const isOpen = openGroup === group.name;
          const domainStyle = getDomainStyle(getCollectionDomain(group.name));
          const shown = group.endpoints.length;

          return (
            <div key={group.name}>
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? "" : group.name)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-[#a57ed8]/8"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: domainStyle.color }} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-mono text-base font-bold text-white">{group.name}</h3>
                      <span className="rounded bg-[#0d0815] px-2 py-1 text-xs text-[#cbd5e1]">
                        {arabicNames[group.name] || group.name}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#cbd5e1]/55">
                      {shown} من {group.total} endpoint
                    </p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#c9a7e3] transition ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="grid gap-3 border-t border-[#a57ed8]/10 bg-[#0d0815]/25 p-4">
                  {group.endpoints.length ? (
                    group.endpoints.map((endpoint) => <EndpointCard key={`${group.name}-${endpoint.id}`} endpoint={endpoint} />)
                  ) : (
                    <div className="rounded-lg border border-[#a57ed8]/15 bg-[#0d0815] p-4 text-sm text-[#cbd5e1]/65">
                      لا يوجد endpoints مطابقة للبحث داخل هذا الجدول.
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
