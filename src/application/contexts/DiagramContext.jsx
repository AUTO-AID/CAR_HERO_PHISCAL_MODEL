import React, { useState, useMemo, useEffect } from "react";
import { DiagramContext } from "@/application/contexts/diagram-context";
import { collections } from "@/domain/entities/collections";
import { relationships } from "@/domain/entities/relationships";
import { backendEndpoints } from "@/domain/entities/endpoints";
import { getCollectionDomain } from "@/domain/entities/domains";
import {
  collectionNote,
  collectionPurpose,
  fieldDescription,
  toFields,
} from "@/infrastructure/services/schema.service";
import { fetchLiveSchemas, fetchLiveEndpoints } from "@/infrastructure/services/api.service";

const collectionDomainOrder = {
  platform: 0,
  order: 1,
  communication: 2,
  vehicle: 3,
  subscription: 4,
  finance: 5,
  quality: 6,
  provider: 7,
};

export function DiagramProvider({ children }) {
  const [search, setSearch] = useState("");
  const [feature, setFeature] = useState("All");
  const [showSchemaOnly, setShowSchemaOnly] = useState(true);
  const [expanded, setExpanded] = useState("");
  
  // Live states
  const [liveCollections, setLiveCollections] = useState([]);
  const [liveEndpoints, setLiveEndpoints] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  const normalized = useMemo(
    () => collections.map((item) => ({ ...item, fields: toFields(item.fields) })),
    []
  );

  useEffect(() => {
    async function loadLiveData() {
      try {
        const schemas = await fetchLiveSchemas();
        const collectionNames = schemas.map((s) => s.collection);
        const apis = await fetchLiveEndpoints(collectionNames);

        // Enrich schemas with local translations and descriptions
        const enriched = schemas.map((item) => {
          const staticItem = collections.find((c) => c.collection === item.collection);
          
          // Map fields to include fallback translation descriptions
          const fields = item.fields.map(([fieldName, fieldType, fieldDesc]) => {
            const staticField = staticItem?.fields.find((f) => f[0] === fieldName);
            const description = staticField ? staticField[2] : (fieldDesc || "");
            return {
              name: fieldName,
              type: fieldType,
              description,
            };
          });

          return {
            ...item,
            purpose: staticItem ? staticItem.purpose : (item.purpose || ""),
            note: staticItem ? staticItem.note : (item.note || ""),
            source: staticItem ? staticItem.source : item.source,
            feature: staticItem ? staticItem.feature : item.feature,
            fields,
          };
        });

        setLiveCollections(enriched);
        setLiveEndpoints(apis);
        setIsLive(true);
        console.log("⚡ Live physical model connected to the backend successfully!");
      } catch (error) {
        console.warn("⚠️ Backend API not available, falling back to static database specification.", error);
        setIsLive(false);
      } finally {
        setLoading(false);
      }
    }
    loadLiveData();
  }, [normalized]);

  const activeCollections = isLive ? liveCollections : normalized;
  const activeEndpoints = isLive ? liveEndpoints : backendEndpoints;

  const filtered = useMemo(() => {
    return activeCollections
      .filter((item) => {
        const haystack = [
          item.collection,
          item.model,
          item.feature,
          item.status,
          collectionPurpose(item),
          collectionNote(item) || "",
          item.source,
          item.fields
            .map((field) => `${field.name} ${field.type} ${fieldDescription(field)}`)
            .join(" "),
          item.indexes.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        const matchesSearch = haystack.includes(search.trim().toLowerCase());
        const matchesFeature = feature === "All" || item.feature === feature;
        const matchesStatus = showSchemaOnly || item.status !== "schema-only";

        return matchesSearch && matchesFeature && matchesStatus;
      })
      .sort((a, b) => {
        const domainA = getCollectionDomain(a.collection);
        const domainB = getCollectionDomain(b.collection);
        const orderA = collectionDomainOrder[domainA] ?? 99;
        const orderB = collectionDomainOrder[domainB] ?? 99;

        if (orderA !== orderB) return orderA - orderB;
        return (
          activeCollections.findIndex((item) => item.collection === a.collection) -
          activeCollections.findIndex((item) => item.collection === b.collection)
        );
      });
  }, [activeCollections, search, feature, showSchemaOnly]);

  const activeCount = useMemo(
    () => activeCollections.filter((item) => item.status === "active").length,
    [activeCollections]
  );
  
  const schemaOnlyCount = useMemo(
    () => activeCollections.length - activeCount,
    [activeCollections, activeCount]
  );
  
  const fieldCount = useMemo(
    () => activeCollections.reduce((sum, item) => sum + item.fields.length, 0),
    [activeCollections]
  );

  const value = {
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
    activeCollections,
    activeEndpoints,
    isLive,
    loading,
  };

  return <DiagramContext.Provider value={value}>{children}</DiagramContext.Provider>;
}
