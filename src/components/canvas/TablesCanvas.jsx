import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  Panel,
  ReactFlowProvider,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { jsPDF } from "jspdf";
import { ChevronsDownUp, ChevronsUpDown, Crosshair, Database, Download, Hand, Maximize2, Minimize2, Move, Network, RotateCcw, Search as SearchIcon, X } from "lucide-react";
import { domainLegend, getCollectionDomain, getDomainStyle, getRelationDomain } from "../../data/domains";
import { diagramPositions, diagramRelations, edgeColors } from "../../data/relationships";
import { downloadFile, getHighResImage } from "../../utils/exportDiagram";
import { fieldDescription } from "../../utils/schema";
import TableNode from "./TableNode";

const nodeTypes = {
  tableNode: TableNode,
};

export default function TablesCanvas({ items }) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isExporting, setIsExporting] = React.useState(false);
  const [showRelations, setShowRelations] = React.useState(true);
  const [selectedNodeId, setSelectedNodeId] = React.useState("");
  const [focusRelations, setFocusRelations] = React.useState(false);
  const [canvasSearch, setCanvasSearch] = React.useState("");
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isAllExpanded, setIsAllExpanded] = React.useState(false);
  const wrapperRef = React.useRef(null);
  const flowRef = React.useRef(null);
  const flowInstanceRef = React.useRef(null);

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === wrapperRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const diagramItems = React.useMemo(
    () =>
      items
        .filter((item) => diagramPositions[item.collection])
        .map((item) => ({
          ...item,
          domain: getCollectionDomain(item.collection),
          domainStyle: getDomainStyle(getCollectionDomain(item.collection)),
          fields: item.fields.map((field) => ({
            ...field,
            description: fieldDescription(field),
          })),
        })),
    [items]
  );

  const initialNodes = React.useMemo(
    () =>
      diagramItems.map((item) => ({
        id: item.collection,
        type: "tableNode",
        position: diagramPositions[item.collection],
        data: item,
        draggable: true,
      })),
    [diagramItems]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);

  React.useEffect(() => {
    setNodes((currentNodes) => {
      if (currentNodes.length) return currentNodes;
      return initialNodes;
    });
  }, [initialNodes, setNodes]);

  const focusedRelationIds = React.useMemo(() => {
    if (!selectedNodeId) return new Set();

    return new Set(
      diagramRelations
        .filter(([source, target]) => source === selectedNodeId || target === selectedNodeId)
        .flatMap(([source, target]) => [source, target])
    );
  }, [selectedNodeId]);

  const visibleRelationRows = React.useMemo(() => {
    if (!showRelations) return [];

    return diagramRelations.filter(([source, target]) => {
      const hasPositions = diagramPositions[source] && diagramPositions[target];
      const isFocusedRelation = !focusRelations || !selectedNodeId || source === selectedNodeId || target === selectedNodeId;
      return hasPositions && isFocusedRelation;
    });
  }, [focusRelations, selectedNodeId, showRelations]);

  const displayedNodes = React.useMemo(
    () =>
      nodes.map((node) => {
        const shouldDim =
          focusRelations &&
          selectedNodeId &&
          node.id !== selectedNodeId &&
          !focusedRelationIds.has(node.id);

        return {
          ...node,
          selected: node.id === selectedNodeId,
          data: {
            ...node.data,
            isSelected: node.id === selectedNodeId,
            isDimmed: shouldDim,
            isAllExpanded,
          },
        };
      }),
    [focusRelations, focusedRelationIds, isAllExpanded, nodes, selectedNodeId]
  );

  const edges = React.useMemo(
    () => {
      return (
      visibleRelationRows
        .map(([source, target, label, group], index) => {
          const relationDomain = getRelationDomain(group);
          const color = edgeColors[group] || getDomainStyle(relationDomain).color;
          const isFocused = selectedNodeId && (source === selectedNodeId || target === selectedNodeId);
          return ({
          id: `${source}-${target}-${index}`,
          source,
          target,
          label,
          type: "smoothstep",
          animated: false,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color,
          },
          data: {
            domain: relationDomain,
            domainLabel: getDomainStyle(relationDomain).label,
          },
          zIndex: 10,
          style: {
            stroke: color,
            strokeWidth: isFocused ? 3.3 : 2.2,
            opacity: focusRelations ? 1 : 0.88,
          },
          labelStyle: {
            fill: "#f5f5f7",
            fontSize: 11,
            fontWeight: 700,
          },
          labelBgStyle: {
            fill: "#1a1229",
            fillOpacity: 0.92,
          },
          labelBgPadding: [8, 4],
          labelBgBorderRadius: 6,
          });
        })
      );
    },
    [focusRelations, selectedNodeId, visibleRelationRows]
  );

  const selectedRelationCount = visibleRelationRows.filter(
    ([source, target]) => selectedNodeId && (source === selectedNodeId || target === selectedNodeId)
  ).length;

  const searchResults = React.useMemo(() => {
    const query = canvasSearch.trim().toLowerCase();
    if (!query) return displayedNodes.slice(0, 6);

    return displayedNodes
      .filter((node) => {
        const haystack = [node.id, node.data?.model, node.data?.domainStyle?.label]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
      .slice(0, 6);
  }, [canvasSearch, displayedNodes]);

  const focusNode = React.useCallback(
    (nodeId) => {
      const node = nodes.find((item) => item.id === nodeId);
      if (!node) return;

      setSelectedNodeId(nodeId);
      flowInstanceRef.current?.setCenter(node.position.x + 150, node.position.y + 130, {
        zoom: 1.25,
        duration: 650,
      });
    },
    [nodes]
  );

  const focusFirstSearchResult = () => {
    if (searchResults[0]) {
      focusNode(searchResults[0].id);
    }
  };

  const toggleFocusedRelations = () => {
    if (!selectedNodeId) return;
    setShowRelations(true);
    setFocusRelations((value) => !value);
  };

  const clearSelection = () => {
    setSelectedNodeId("");
    setFocusRelations(false);
  };

  const resetLayout = () => {
    setNodes(initialNodes);
    setSelectedNodeId("");
    setFocusRelations(false);

    window.setTimeout(() => {
      flowInstanceRef.current?.fitView({
        padding: 0.18,
        includeHiddenNodes: false,
        duration: 650,
      });
    }, 0);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await wrapperRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
      return;
    }

    await document.exitFullscreen?.();
    setIsFullscreen(false);
  };

  const downloadImage = async (format = "png") => {
    setIsExporting(true);
    try {
      // نستخدم 2x للـ PNG لضمان دقة عالية جداً وثبات في جميع المتصفحات
      const dataUrl = await getHighResImage(nodes, flowInstanceRef.current, {
        pixelRatio: 2,
        type: format,
        quality: 1 // جودة كاملة للـ PNG
      });
      
      downloadFile(dataUrl, `car-hero-model-${new Date().getTime()}.${format}`);
    } catch (error) {
      console.error("Export failed:", error);
      alert("فشل التحميل، يرجى المحاولة مرة أخرى.");
    } finally {
      setIsExporting(false);
    }
  };

  const downloadPdf = async () => {
    setIsExporting(true);
    try {
      // للـ PDF نستخدم JPEG مع ضغط بنسبة 80% لتقليل الحجم بشكل كبير (من مئات الميغا إلى بضعة ميغا)
      const dataUrl = await getHighResImage(nodes, flowInstanceRef.current, {
        pixelRatio: 1.5, // 1.5x كافية جداً للطباعة والقراءة
        type: "jpeg",
        quality: 0.8
      });

      const img = new Image();
      img.src = dataUrl;
      
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? "landscape" : "portrait",
          unit: "px",
          format: [img.width, img.height],
          compress: true // تفعيل ضغط jspdf الداخلي أيضاً
        });
        
        pdf.addImage(dataUrl, "JPEG", 0, 0, img.width, img.height, undefined, 'FAST');
        pdf.save(`car-hero-model-${new Date().getTime()}.pdf`);
        setIsExporting(false);
      };
    } catch (error) {
      console.error("PDF Export failed:", error);
      alert("فشل تصدير PDF.");
      setIsExporting(false);
    }
  };

  const wrapperClass = isFullscreen
    ? "fixed inset-0 z-50 bg-[#0d0815] p-0"
    : "relative h-auto rounded-lg border border-[#a57ed8]/20 bg-[#1a1229] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.24)]";

  return (
    <section className="mb-12">
      <div ref={wrapperRef} className={wrapperClass}>
        {!isFullscreen && (
          <div className="mb-3 flex flex-col gap-3 rounded-lg border border-[#a57ed8]/15 bg-[#0d0815]/45 p-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="text-xl font-semibold text-white">Canvas العلاقات بين الجداول</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-[#cbd5e1]">اضغط على جدول لتحديده، ثم اعرض علاقاته المباشرة فقط. استخدم البحث داخل الكانفا للوصول لجدول بسرعة.</p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
              <div className="flex flex-wrap gap-1.5 rounded-md border border-[#a57ed8]/15 bg-[#1a1229]/75 p-1">
                <button 
                  type="button" 
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)} 
                  className={`inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 px-3 text-xs font-semibold text-[#f5f5f7] transition ${isSearchExpanded ? "bg-[#a57ed8]/20" : "bg-[#0d0815]/75 hover:bg-[#a57ed8]/18"}`}
                >
                  <SearchIcon className="h-4 w-4" />
                  بحث
                </button>
                {isSearchExpanded && (
                  <div className="relative">
                    <input
                      autoFocus
                      value={canvasSearch}
                      onChange={(e) => setCanvasSearch(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && focusFirstSearchResult()}
                      placeholder="ابحث..."
                      className="h-9 w-40 rounded-md border border-[#a57ed8]/30 bg-[#0d0815] px-3 text-xs text-white outline-none focus:border-[#d1b3ff]"
                    />
                    {canvasSearch && (
                      <div className="absolute left-0 top-full z-[100] mt-1 w-full overflow-hidden rounded-md border border-[#a57ed8]/30 bg-[#0d0815] shadow-2xl">
                        {searchResults.map((node) => (
                          <button
                            key={node.id}
                            onClick={() => {
                              focusNode(node.id);
                              setIsSearchExpanded(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-xs text-[#cbd5e1] hover:bg-[#a57ed8]/20"
                          >
                            <span className="truncate font-mono">{node.id}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <button type="button" onClick={downloadImage} disabled={isExporting} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45">
                  <Download className="h-4 w-4" />
                  PNG
                </button>
                <button type="button" onClick={downloadPdf} disabled={isExporting} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45">
                  <Download className="h-4 w-4" />
                  PDF
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 rounded-md border border-[#a57ed8]/15 bg-[#1a1229]/75 p-1">
                <button type="button" onClick={() => setShowRelations((value) => !value)} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45">
                  <Network className="h-4 w-4" />
                  {showRelations ? "اخفاء العلاقات" : "اظهار العلاقات"}
                </button>
                <button
                  type="button"
                  onClick={toggleFocusedRelations}
                  disabled={!selectedNodeId}
                  className={`inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45 ${focusRelations ? "border-[#d1b3ff]/50 bg-[#d1b3ff]/20" : ""}`}
                >
                  <Crosshair className="h-4 w-4" />
                  {focusRelations ? "كل العلاقات" : "علاقات الجدول"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAllExpanded((v) => !v)}
                  className={`inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 ${isAllExpanded ? "border-[#d1b3ff]/50 bg-[#d1b3ff]/15" : ""}`}
                >
                  {isAllExpanded ? <ChevronsDownUp className="h-4 w-4" /> : <ChevronsUpDown className="h-4 w-4" />}
                  {isAllExpanded ? "طي الكل" : "عرض الكل"}
                </button>
                <button type="button" onClick={resetLayout} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 rounded-md border border-[#a57ed8]/15 bg-[#1a1229]/75 p-1">
                {selectedNodeId ? (
                  <button type="button" onClick={clearSelection} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45 max-w-[210px]">
                    <X className="h-4 w-4 shrink-0" />
                    <span className="truncate font-mono">{selectedNodeId}</span>
                    {focusRelations && <span className="text-[#d1b3ff]">({selectedRelationCount})</span>}
                  </button>
                ) : (
                  <span className="inline-flex h-9 items-center rounded-md border border-[#a57ed8]/15 bg-[#0d0815]/75 px-3 text-xs text-[#cbd5e1]/70">اختر جدول</span>
                )}
                <button type="button" onClick={toggleFullscreen} className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[#a57ed8]/30 bg-[#0d0815]/75 px-3 text-xs font-semibold text-[#f5f5f7] transition hover:bg-[#a57ed8]/18 disabled:cursor-not-allowed disabled:opacity-45">
                  <Maximize2 className="h-4 w-4" />
                  ملء الشاشة
                </button>
              </div>
            </div>
          </div>
        )}

        <div ref={flowRef} className={isFullscreen ? "h-screen overflow-hidden bg-[#0d0815]" : "h-[680px] overflow-hidden rounded-lg border border-[#a57ed8]/20 bg-[#0d0815]"}>
          <ReactFlowProvider>
            <ReactFlow
              nodes={displayedNodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onInit={(instance) => {
                flowInstanceRef.current = instance;
              }}
              onNodeClick={(_, node) => focusNode(node.id)}
              onPaneClick={clearSelection}
              fitView
              fitViewOptions={{ padding: 0.18, includeHiddenNodes: false }}
              minZoom={0.18}
              maxZoom={2}
              panOnDrag
              panOnScroll={false}
              zoomOnScroll
              zoomOnPinch
              zoomOnDoubleClick={false}
              nodesDraggable
              nodesConnectable={false}
              selectionOnDrag={false}
              elevateEdgesOnSelect
              elementsSelectable
              proOptions={{ hideAttribution: true }}
              defaultEdgeOptions={{
                interactionWidth: 24,
              }}
            >
              {!isFullscreen && (
                <Panel position="top-left" className="rounded-md border border-[#a57ed8]/25 bg-[#0d0815]/90 px-3 py-2 text-xs text-[#cbd5e1]">
                  <div className="flex items-center gap-2">
                    <Move className="h-4 w-4 text-[#c9a7e3]" />
                    الدولاب للتكبير والتصغير، والسحب للتحريك
                  </div>
                </Panel>
              )}
              {selectedNodeId && (
                <Panel position="top-right" className="rounded-md border border-[#d1b3ff]/30 bg-[#0d0815]/90 px-3 py-2 text-xs text-[#cbd5e1]">
                  <div className="flex items-center gap-2">
                    <Crosshair className="h-4 w-4 text-[#d1b3ff]" />
                    <span className="font-mono text-[#f5f5f7]">{selectedNodeId}</span>
                    <span>{focusRelations ? `${selectedRelationCount} علاقات مباشرة` : "جدول محدد"}</span>
                  </div>
                </Panel>
              )}
              <Panel position="bottom-right" className="rounded-md border border-[#a57ed8]/20 bg-[#0d0815]/90 px-3 py-2 text-xs text-[#cbd5e1]">
                <div className="mb-2 font-semibold text-[#f5f5f7]">ألوان الدومين</div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {domainLegend.map((domain) => (
                    <div key={domain.domain} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: domain.color }} />
                      <span>{domain.label}</span>
                    </div>
                  ))}
                </div>
              </Panel>
              <Background color="rgba(165,126,216,0.22)" gap={22} />
              <MiniMap
                pannable
                zoomable
                nodeColor={(node) => node.data?.domainStyle?.color || "#a57ed8"}
                maskColor="rgba(13,8,21,0.72)"
                style={{
                  background: "#1a1229",
                  border: "1px solid rgba(165,126,216,0.25)",
                }}
              />
              <Controls showInteractive position="bottom-left" />
            </ReactFlow>
          </ReactFlowProvider>
        </div>

        {!isFullscreen && (
          <div className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 rounded-full border border-[#a57ed8]/25 bg-[#0d0815]/90 px-3 py-2 text-xs text-[#cbd5e1] md:flex">
            <Hand className="h-4 w-4 text-[#c9a7e3]" />
            اسحب للتحريك
          </div>
        )}
        {isFullscreen && (
          <div className="fixed left-1/2 top-6 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#a57ed8]/30 bg-[#0d0815]/85 p-1.5 shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center gap-1 border-r border-[#a57ed8]/20 pr-1 mr-1">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a57ed8]/10 text-[#c9a7e3]">
                  <Database className="h-4 w-4" />
               </div>
               <span className="px-2 text-xs font-bold text-white whitespace-nowrap">Car Hero Model</span>
            </div>

            <div className="flex items-center gap-1 px-1">
              <button 
                type="button" 
                onClick={() => setIsSearchExpanded((v) => !v)}
                className={`inline-flex h-9 items-center justify-center gap-2 rounded-full border border-transparent px-4 text-[11px] font-bold text-white transition ${isSearchExpanded ? "bg-[#a57ed8]/30" : "bg-white/5 hover:bg-white/15"}`}
              >
                <SearchIcon className="h-3.5 w-3.5" />
                بحث
              </button>
              
              {isSearchExpanded && (
                <div className="relative ml-1 w-[200px]">
                  <input
                    autoFocus
                    value={canvasSearch}
                    onChange={(e) => setCanvasSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && focusFirstSearchResult()}
                    placeholder="ابحث عن جدول..."
                    className="h-9 w-full rounded-full border border-[#a57ed8]/30 bg-[#1a1229] pl-3 pr-8 text-xs text-white outline-none focus:border-[#d1b3ff]"
                  />
                  {canvasSearch && (
                    <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-lg border border-[#a57ed8]/30 bg-[#0d0815] shadow-2xl">
                      {searchResults.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => {
                            focusNode(node.id);
                            setIsSearchExpanded(false);
                          }}
                          className="flex w-full items-center justify-between px-3 py-2 text-xs text-[#cbd5e1] hover:bg-[#a57ed8]/20"
                        >
                          <span className="truncate font-mono">{node.id}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  <button onClick={() => setCanvasSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#cbd5e1]/50 hover:text-white">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}

              <button 
                type="button" 
                onClick={downloadImage} 
                disabled={isExporting} 
                className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-transparent bg-white/5 px-4 text-[11px] font-bold text-white transition hover:bg-white/15 disabled:opacity-40"
              >
                <Download className="h-3.5 w-3.5" />
                PNG
              </button>
              <button 
                type="button" 
                onClick={downloadPdf} 
                disabled={isExporting} 
                className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-transparent bg-white/5 px-4 text-[11px] font-bold text-white transition hover:bg-white/15 disabled:opacity-40"
              >
                <Download className="h-3.5 w-3.5" />
                PDF
              </button>
            </div>

            <div className="h-5 w-[1px] bg-[#a57ed8]/20 mx-1"></div>

            <div className="flex items-center gap-1 px-1">
              <button 
                type="button" 
                onClick={() => setShowRelations((v) => !v)} 
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition ${showRelations ? "bg-[#a57ed8]/20 text-[#c9a7e3]" : "bg-white/5 text-[#cbd5e1]"}`}
                title={showRelations ? "اخفاء العلاقات" : "اظهار العلاقات"}
              >
                <Network className="h-4 w-4" />
              </button>
              <button 
                type="button" 
                onClick={toggleFocusedRelations} 
                disabled={!selectedNodeId}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition disabled:opacity-30 ${focusRelations ? "bg-[#d1b3ff]/30 text-[#d1b3ff]" : "bg-white/5 text-[#cbd5e1]"}`}
                title="علاقات الجدول المحدد"
              >
                <Crosshair className="h-4 w-4" />
              </button>
              <button 
                type="button" 
                onClick={resetLayout} 
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#cbd5e1] transition hover:bg-white/15"
                title="إعادة التعيين"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsAllExpanded((v) => !v)}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition ${isAllExpanded ? "bg-[#d1b3ff]/30 text-[#d1b3ff]" : "bg-white/5 text-[#cbd5e1] hover:bg-white/15"}`}
                title={isAllExpanded ? "طي كل الجداول" : "عرض كل حقول الجداول"}
              >
                {isAllExpanded ? <ChevronsDownUp className="h-4 w-4" /> : <ChevronsUpDown className="h-4 w-4" />}
              </button>
            </div>

            <div className="h-5 w-[1px] bg-[#a57ed8]/20 mx-1"></div>

            <button 
              type="button" 
              onClick={toggleFullscreen} 
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-400 transition hover:bg-red-500/20"
              title="خروج"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
