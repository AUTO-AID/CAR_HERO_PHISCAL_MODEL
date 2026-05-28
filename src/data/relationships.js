export const relationships = [
  ["users", "vehicles", "User.vehicles / Vehicle.user", "A user owns many vehicles."],
  ["users", "user_subscriptions", "User.activeSubscription / UserSubscription.user", "A user can have a current subscription and a subscription history."],
  ["subscription_plans", "user_subscriptions", "UserSubscription.plan", "A subscription record points to the purchased plan."],
  ["providers", "services", "Provider.services / Service.provider", "A provider can offer provider-specific services."],
  ["users", "orders", "Order.user", "Orders are created by users."],
  ["providers", "orders", "Order.provider", "Orders may be assigned to providers."],
  ["services", "orders", "Order.service", "Orders are for one service."],
  ["vehicles", "orders", "Order.vehicle", "Orders may reference a vehicle."],
  ["orders", "status_histories", "StatusHistory.entityId", "Every status change for an instant order or scheduled booking is appended to the status history timeline."],
  ["users/providers/admins", "status_histories", "StatusHistory.changedBy", "The actor that changed the status is stored polymorphically."],
  ["orders", "chats", "Chat.orderId", "Each order can have a discussion thread."],
  ["chats", "messages", "Message.chatId", "Standalone messages belong to a chat."],
  ["wallets", "transactions", "Transaction.wallet", "Every transaction belongs to a wallet."],
  ["users/providers", "wallets", "Wallet.ownerId + ownerType", "Wallet ownership is polymorphic."],
  ["users/providers", "transactions", "Transaction.ownerId + ownerType", "Transactions duplicate polymorphic owner data for fast queries."],
  ["orders/topups", "transactions", "Transaction.referenceType + referenceId", "Transactions can point to different business objects."],
  ["users", "notifications", "recipientId + recipientType", "Notifications use polymorphic recipients."],
  ["providers/admins", "notifications", "recipientId + recipientType", "Providers and admins can also receive notifications."],
  ["users", "reviews", "Review.user", "Users write reviews."],
  ["providers", "reviews", "Review.provider", "Providers receive reviews."],
  ["orders", "reviews", "Review.order", "An order can have one review through a unique sparse index."],
  ["vehicles", "maintenancerecords", "MaintenanceRecord.vehicle", "A vehicle has maintenance history."],
  ["users", "maintenancerecords", "MaintenanceRecord.user", "Maintenance records belong to a user."],
  ["vehicles", "vehiclereminders", "VehicleReminder.vehicle", "A vehicle has reminders."],
  ["users", "vehiclereminders", "VehicleReminder.user", "Reminders belong to a user."],
  ["users", "logouts", "Logout.userId", "Logout records are tied to users."],
  ["admins", "audit_logs", "AuditLog.admin", "Sensitive admin actions create immutable audit entries."],
  ["users", "ai_recommendation_logs", "AiRecommendationLog.user", "A user can trigger recommendation requests that are logged."],
  ["providers", "provider_metrics", "ProviderMetrics.provider", "A provider has a detailed metrics document for scoring."],
  ["providers", "ai_recommendation_logs", "AiRecommendationLog.recommendations.provider", "Recommendation logs store which providers were recommended to users."],
];

export const diagramRelations = [
  ["users", "vehicles", "owns", "vehicle"],
  ["vehicles", "maintenancerecords", "history", "vehicle"],
  ["vehicles", "vehiclereminders", "reminders", "vehicle"],
  ["users", "orders", "creates", "order"],
  ["vehicles", "orders", "used in", "order"],
  ["services", "orders", "requested", "order"],
  ["providers", "orders", "handles", "order"],
  ["orders", "status_histories", "timeline", "order"],
  ["orders", "reviews", "reviewed", "quality"],
  ["providers", "reviews", "receives", "quality"],
  ["providers", "services", "offers", "provider"],
  ["users", "user_subscriptions", "subscriptions", "subscription"],
  ["subscription_plans", "user_subscriptions", "plan", "subscription"],
  ["wallets", "transactions", "logs", "finance"],
  ["orders", "chats", "discussion", "communication"],
  ["chats", "messages", "contains", "communication"],
  ["users", "notifications", "receives", "communication"],
  ["users", "logouts", "sessions", "auth"],
  ["admins", "audit_logs", "audits", "auth"],
  ["providers", "provider_metrics", "metrics", "ai"],
  ["users", "ai_recommendation_logs", "requests", "ai"],
  ["providers", "ai_recommendation_logs", "logged in", "ai"],
];

export const diagramPositions = {
  // Column 1: Core Accounts & Vehicles
  users: { x: 0, y: 0 },
  vehicles: { x: 0, y: 560 },
  maintenancerecords: { x: 0, y: 1120 },
  vehiclereminders: { x: 0, y: 1680 },

  // Column 2: Subscriptions & Auth
  subscription_plans: { x: 450, y: 0 },
  user_subscriptions: { x: 450, y: 560 },
  logouts: { x: 450, y: 1120 },

  // Column 3: Services, Orders & Reviews
  services: { x: 900, y: 0 },
  orders: { x: 900, y: 560 },
  reviews: { x: 900, y: 1120 },
  status_histories: { x: 900, y: 1680 },

  // Column 4: Providers & Communication
  providers: { x: 1350, y: 0 },
  chats: { x: 1350, y: 560 },
  messages: { x: 1350, y: 1120 },
  notifications: { x: 1350, y: 1680 },

  // Column 5: Finance & Admin
  wallets: { x: 1800, y: 0 },
  transactions: { x: 1800, y: 560 },
  admins: { x: 1800, y: 1120 },
  settings: { x: 1800, y: 1680 },
  audit_logs: { x: 1800, y: 2240 },

  // Column 6: Auth, Extras & AI
  pending_registrations: { x: 2250, y: 0 },
  provider_metrics: { x: 2250, y: 560 },
  ai_recommendation_logs: { x: 2250, y: 1120 },
};

export const edgeColors = {
  vehicle: "#ec4899",
  order: "#38bdf8",
  quality: "#ffffff",
  provider: "#d946ef",
  subscription: "#f59e0b",
  finance: "#34d399",
  communication: "#a78bfa",
  auth: "#a78bfa",
  ai: "#f43f5e",
};
