export const domainStyles = {
  subscription: {
    label: "اشتراكات",
    color: "#f59e0b",
    soft: "rgba(245, 158, 11, 0.14)",
    glow: "rgba(245, 158, 11, 0.28)",
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
    color: "#2dd4bf",
    soft: "rgba(45, 212, 191, 0.14)",
    glow: "rgba(45, 212, 191, 0.28)",
  },
  platform: {
    label: "النظام",
    color: "#ff3b3b",
    soft: "rgba(255, 59, 59, 0.14)",
    glow: "rgba(255, 59, 59, 0.28)",
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
].map((domain) => ({ domain, ...domainStyles[domain] }));

const collectionDomains = {
  subscription_plans: "subscription",
  user_subscriptions: "subscription",
  subscriptions: "subscription",
  promocodes: "subscription",

  bookingdocuments: "order",
  orders: "order",
  services: "order",

  wallets: "finance",
  transactions: "finance",

  chats: "communication",
  messages: "communication",
  notifications: "communication",

  reviews: "quality",

  vehicles: "vehicle",
  maintenancerecords: "vehicle",
  vehiclereminders: "vehicle",
  providers: "provider",
};

const relationDomains = {
  subscription: "subscription",
  order: "order",
  finance: "finance",
  communication: "communication",
  quality: "quality",
  vehicle: "vehicle",
  provider: "provider",
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
