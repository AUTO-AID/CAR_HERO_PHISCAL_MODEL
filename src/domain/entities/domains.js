export const domainStyles = {
  subscription: {
    label: "اشتراكات",
    color: "#ea580c",
    soft: "rgba(234, 88, 12, 0.14)",
    glow: "rgba(234, 88, 12, 0.28)",
  },
  order: {
    label: "طلبات",
    color: "#38bdf8",
    soft: "rgba(56, 189, 248, 0.14)",
    glow: "rgba(56, 189, 248, 0.28)",
  },
  finance: {
    label: "محافظ",
    color: "#34d399",
    soft: "rgba(52, 211, 153, 0.14)",
    glow: "rgba(52, 211, 153, 0.28)",
  },
  communication: {
    label: "شات",
    color: "#a78bfa",
    soft: "rgba(167, 139, 250, 0.14)",
    glow: "rgba(167, 139, 250, 0.28)",
  },
  quality: {
    label: "تقييمات",
    color: "#ffffff",
    soft: "rgba(255, 255, 255, 0.14)",
    glow: "rgba(255, 255, 255, 0.28)",
  },
  provider: {
    label: "مزودين",
    color: "#d946ef",
    soft: "rgba(217, 70, 239, 0.14)",
    glow: "rgba(217, 70, 239, 0.28)",
  },
  vehicle: {
    label: "سيارات",
    color: "#ec4899",
    soft: "rgba(236, 72, 153, 0.14)",
    glow: "rgba(236, 72, 153, 0.28)",
  },
  platform: {
    label: "النظام",
    color: "#ff3b3b",
    soft: "rgba(255, 59, 59, 0.14)",
    glow: "rgba(255, 59, 59, 0.28)",
  },
  ai: {
    label: "الذكاء الاصطناعي",
    color: "#facc15",
    soft: "rgba(250, 204, 21, 0.14)",
    glow: "rgba(250, 204, 21, 0.28)",
  },
};

export const domainLegend = [
  "platform",
  "subscription",
  "order",
  "finance",
  "communication",
  "provider",
  "quality",
  "vehicle",
  "ai",
].map((domain) => ({ domain, ...domainStyles[domain] }));

const collectionDomains = {
  subscription_plans: "subscription",
  user_subscriptions: "subscription",
  orders: "order",
  status_histories: "order",
  services: "order",

  wallets: "finance",
  transactions: "finance",
  payment_intents: "finance",

  chats: "communication",
  messages: "communication",
  notifications: "communication",

  reviews: "quality",

  vehicles: "vehicle",
  maintenancerecords: "vehicle",
  vehiclereminders: "vehicle",
  providers: "provider",
  audit_logs: "platform",
  provider_metrics: "ai",
  ai_recommendation_logs: "ai",
};

const relationDomains = {
  subscription: "subscription",
  order: "order",
  finance: "finance",
  communication: "communication",
  quality: "quality",
  vehicle: "vehicle",
  provider: "provider",
  ai: "ai",
};

export function getCollectionDomain(collection) {
  return collectionDomains[collection] || "platform";
}

export function getRelationDomain(group) {
  return relationDomains[group] || "platform";
}

export function getDomainStyle(domain) {
  return domainStyles[domain] || domainStyles.platform;
}
