export const relationships = [
  ["users", "vehicles", "User.vehicles / Vehicle.user", "A user owns many vehicles."],
  ["users", "user_subscriptions", "User.activeSubscription / UserSubscription.user", "A user can have a current subscription and a subscription history."],
  ["subscription_plans", "user_subscriptions", "UserSubscription.plan", "A subscription record points to the purchased plan."],
  ["providers", "services", "Provider.services / Service.provider", "A provider can offer provider-specific services."],
  ["users", "bookingdocuments", "BookingDocument.user", "Bookings are created by users."],
  ["providers", "bookingdocuments", "BookingDocument.provider", "Bookings may be assigned to providers."],
  ["vehicles", "bookingdocuments", "BookingDocument.vehicle", "Bookings may reference a user's vehicle."],
  ["services", "bookingdocuments", "BookingDocument.service", "Bookings are for one service."],
  ["users", "orders", "Order.user", "Orders are created by users."],
  ["providers", "orders", "Order.provider", "Orders may be assigned to providers."],
  ["services", "orders", "Order.service", "Orders are for one service."],
  ["vehicles", "orders", "Order.vehicle", "Orders may reference a vehicle."],
  ["orders", "chats", "Chat.orderId", "Each order can have a discussion thread."],
  ["chats", "messages", "Message.chatId", "Standalone messages belong to a chat."],
  ["wallets", "transactions", "Transaction.wallet", "Every transaction belongs to a wallet."],
  ["users/providers", "wallets", "Wallet.ownerId + ownerType", "Wallet ownership is polymorphic."],
  ["users/providers", "transactions", "Transaction.ownerId + ownerType", "Transactions duplicate polymorphic owner data for fast queries."],
  ["orders/bookings/topups", "transactions", "Transaction.referenceType + referenceId", "Transactions can point to different business objects."],
  ["users", "notifications", "recipientId + recipientType", "Notifications use polymorphic recipients."],
  ["providers/admins", "notifications", "recipientId + recipientType", "Providers and admins can also receive notifications."],
  ["users", "reviews", "Review.user", "Users write reviews."],
  ["providers", "reviews", "Review.provider", "Providers receive reviews."],
  ["orders", "reviews", "Review.order", "An order can have one review through a unique sparse index."],
  ["bookingdocuments", "reviews", "Review.booking", "A booking can have one review through a unique sparse index."],
  ["vehicles", "maintenancerecords", "MaintenanceRecord.vehicle", "A vehicle has maintenance history."],
  ["users", "maintenancerecords", "MaintenanceRecord.user", "Maintenance records belong to a user."],
  ["vehicles", "vehiclereminders", "VehicleReminder.vehicle", "A vehicle has reminders."],
  ["users", "vehiclereminders", "VehicleReminder.user", "Reminders belong to a user."],
  ["users", "logouts", "Logout.userId", "Logout records are tied to users."],
];

export const diagramRelations = [
  ["users", "vehicles", "owns", "vehicle"],
  ["vehicles", "maintenancerecords", "history", "vehicle"],
  ["vehicles", "vehiclereminders", "reminders", "vehicle"],
  ["users", "bookingdocuments", "books", "order"],
  ["vehicles", "bookingdocuments", "used in", "order"],
  ["services", "bookingdocuments", "requested", "order"],
  ["providers", "bookingdocuments", "handles", "order"],
  ["users", "orders", "creates", "order"],
  ["vehicles", "orders", "used in", "order"],
  ["services", "orders", "requested", "order"],
  ["providers", "orders", "handles", "order"],
  ["orders", "reviews", "reviewed", "quality"],
  ["bookingdocuments", "reviews", "reviewed", "quality"],
  ["providers", "reviews", "receives", "quality"],
  ["providers", "services", "offers", "provider"],
  ["users", "user_subscriptions", "subscriptions", "subscription"],
  ["subscription_plans", "user_subscriptions", "plan", "subscription"],
  ["wallets", "transactions", "logs", "finance"],
  ["orders", "chats", "discussion", "communication"],
  ["chats", "messages", "contains", "communication"],
  ["users", "notifications", "receives", "communication"],
  ["users", "logouts", "sessions", "auth"],
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

  // Column 3: Services, Bookings & Orders
  services: { x: 900, y: 0 },
  bookingdocuments: { x: 900, y: 560 },
  orders: { x: 900, y: 1120 },
  reviews: { x: 900, y: 1680 },

  // Column 4: Providers & Communication
  providers: { x: 1350, y: 0 },
  chats: { x: 1350, y: 560 },
  messages: { x: 1350, y: 1120 },
  notifications: { x: 1350, y: 1680 },

  // Column 5: Finance & Admin
  wallets: { x: 1800, y: 0 },
  transactions: { x: 1800, y: 560 },
  wallets: { x: 1800, y: 0 },
  transactions: { x: 1800, y: 560 },
  admins: { x: 1800, y: 1120 },
  settings: { x: 1800, y: 1680 },

  // Column 6: Auth & Extras
  pending_registrations: { x: 2250, y: 0 },
  promocodes: { x: 2250, y: 560 },
};

export const edgeColors = {
  vehicle: "#2dd4bf",
  order: "#38bdf8",
  quality: "#ffffff",
  provider: "#d946ef",
  subscription: "#f59e0b",
  finance: "#34d399",
  communication: "#a78bfa",
  auth: "#a78bfa",
};
