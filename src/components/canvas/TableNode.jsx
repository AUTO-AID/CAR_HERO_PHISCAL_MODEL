import React from "react";
import { Handle, Position } from "reactflow";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cleanType } from "../../utils/schema";

const INITIAL_COUNT = 7;

export default function TableNode({ data }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Sync with global expand/collapse state
  React.useEffect(() => {
    if (data.isAllExpanded !== undefined) {
      setIsExpanded(data.isAllExpanded);
    }
  }, [data.isAllExpanded]);

  const domainStyle = data.domainStyle || {
    label: "النظام",
    color: "#ff3b3b",
    soft: "rgba(255, 59, 59, 0.14)",
    glow: "rgba(255, 59, 59, 0.28)",
  };

  const hasMore = data.fields.length > INITIAL_COUNT;
  const visibleFields = isExpanded ? data.fields : data.fields.slice(0, INITIAL_COUNT);
  const hiddenCount = data.fields.length - INITIAL_COUNT;

  const stateClass = data.isDimmed ? "opacity-35" : "";
  const nodeStyle = {
    borderColor: data.isDimmed ? `${domainStyle.color}33` : `${domainStyle.color}88`,
    boxShadow: data.isSelected
      ? `0 0 0 2px ${domainStyle.color}73, 0 24px 64px ${domainStyle.glow}`
      : `0 12px 32px rgba(0,0,0,0.35), inset 3px 0 0 ${domainStyle.color}`,
  };

  return (
    <div
      className={`w-[260px] overflow-hidden rounded-xl border bg-[#1a1229] shadow-2xl transition-all duration-300 ${stateClass} ${data.isSelected ? "ring-2 ring-[#a57ed8]/40" : ""}`}
      style={nodeStyle}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !border-0 !opacity-0" />
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !border-0 !opacity-0" />

      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/5 bg-[#0d0815]/80 px-3 py-2.5">
        <div className="min-w-0">
          <div className="truncate font-mono text-[12px] font-bold tracking-tight text-white">{data.collection}</div>
        </div>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ring-1 ring-inset"
          style={{ color: domainStyle.color, background: domainStyle.soft, ringColor: `${domainStyle.color}40` }}
        >
          {domainStyle.label}
        </span>
      </div>

      {/* Fields count badge */}
      <div className="flex items-center justify-between gap-2 border-b border-white/5 bg-white/[0.02] px-3 py-1">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-white/25">{data.fields.length} حقول</span>
        {data.status === "schema-only" && (
          <span className="rounded bg-orange-500/15 px-1.5 py-0.5 text-[9px] font-bold text-orange-400">مخطط فقط</span>
        )}
      </div>

      {/* Fields list */}
      <div className="px-2 py-1.5">
        {visibleFields.map((field) => (
          <div
            key={`${data.collection}-${field.name}`}
            className="group flex items-center justify-between gap-2 rounded px-1.5 py-1 hover:bg-white/5 transition-colors"
          >
            <span className="truncate font-mono text-[10.5px] font-medium transition-colors" style={{ color: domainStyle.color }}>
              {field.name}
            </span>
            <span className="shrink-0 rounded bg-white/5 px-1 font-mono text-[9px] text-white/40">
              {cleanType(field.type)}
            </span>
          </div>
        ))}
      </div>

      {/* Expand / Collapse button */}
      {hasMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((v) => !v);
          }}
          className="flex w-full items-center justify-center gap-1 border-t border-white/5 bg-white/[0.02] py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/30 transition hover:bg-white/5 hover:text-white/60"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-2.5 w-2.5" />
              طي
            </>
          ) : (
            <>
              <ChevronDown className="h-2.5 w-2.5" />
              {hiddenCount} حقول إضافية
            </>
          )}
        </button>
      )}
    </div>
  );
}
