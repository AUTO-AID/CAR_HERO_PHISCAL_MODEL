export const backendEndpoints = [
  {
    "id": "GET_api_v1",
    "method": "GET",
    "path": "/api/v1",
    "route": "/",
    "summary": "GetHello",
    "description": "",
    "module": "app",
    "controller": "AppController",
    "handler": "getHello",
    "tag": "App",
    "auth": "Public",
    "collections": [
      "system"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/app.controller.ts",
    "line": 8
  },
  {
    "id": "DELETE_api_v1_admin_id",
    "method": "DELETE",
    "path": "/api/v1/admin/:id",
    "route": "/admin/:id",
    "summary": "Delete an admin account",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "deleteAdmin",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 427
  },
  {
    "id": "PATCH_api_v1_admin_id_permissions",
    "method": "PATCH",
    "path": "/api/v1/admin/:id/permissions",
    "route": "/admin/:id/permissions",
    "summary": "Update admin permissions",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateAdminPermissions",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 403
  },
  {
    "id": "PATCH_api_v1_admin_id_status",
    "method": "PATCH",
    "path": "/api/v1/admin/:id/status",
    "route": "/admin/:id/status",
    "summary": "Toggle admin active status",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "toggleAdminStatus",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 415
  },
  {
    "id": "GET_api_v1_admin_audit_logs",
    "method": "GET",
    "path": "/api/v1/admin/audit-logs",
    "route": "/admin/audit-logs",
    "summary": "List admin audit logs",
    "module": "audit",
    "controller": "AuditLogController",
    "handler": "findAll",
    "tag": "Audit Logs",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "body": null,
    "params": [],
    "query": [
      "action",
      "entityType",
      "entityId",
      "admin",
      "page",
      "limit"
    ],
    "source": "src/modules/audit/presentation/controllers/audit-log.controller.ts"
  },
  {
    "id": "GET_api_v1_admin_audit_logs_entity_entityType_entityId",
    "method": "GET",
    "path": "/api/v1/admin/audit-logs/entity/:entityType/:entityId",
    "route": "/admin/audit-logs/entity/:entityType/:entityId",
    "summary": "List audit logs for a specific entity",
    "module": "audit",
    "controller": "AuditLogController",
    "handler": "findByEntity",
    "tag": "Audit Logs",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "body": null,
    "params": [
      "entityType",
      "entityId"
    ],
    "query": [
      "page",
      "limit"
    ],
    "source": "src/modules/audit/presentation/controllers/audit-log.controller.ts"
  },
  {
    "id": "POST_api_v1_admin_create",
    "method": "POST",
    "path": "/api/v1/admin/create",
    "route": "/admin/create",
    "summary": "Create a new admin account",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "createAdmin",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "audit_logs"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "any",
      "fields": []
    },
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 394
  },
  {
    "id": "GET_api_v1_admin_list",
    "method": "GET",
    "path": "/api/v1/admin/list",
    "route": "/admin/list",
    "summary": "List all administrative accounts",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "listAdmins",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 385
  },
  {
    "id": "POST_api_v1_admin_login",
    "method": "POST",
    "path": "/api/v1/admin/login",
    "route": "/admin/login",
    "summary": "Admin login",
    "description": "Login successful",
    "module": "admin",
    "controller": "AdminController",
    "handler": "login",
    "tag": "Admin",
    "auth": "Public",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "AdminLoginDto",
      "fields": []
    },
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 23
  },
  {
    "id": "POST_api_v1_admin_logout",
    "method": "POST",
    "path": "/api/v1/admin/logout",
    "route": "/admin/logout",
    "summary": "Admin logout",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "logout",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 40
  },
  {
    "id": "GET_api_v1_admin_me",
    "method": "GET",
    "path": "/api/v1/admin/me",
    "route": "/admin/me",
    "summary": "Get current admin profile",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getProfile",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 49
  },
  {
    "id": "GET_api_v1_admin_providers",
    "method": "GET",
    "path": "/api/v1/admin/providers",
    "route": "/admin/providers",
    "summary": "Get all providers",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getAllProviders",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 118
  },
  {
    "id": "GET_api_v1_admin_providers_id",
    "method": "GET",
    "path": "/api/v1/admin/providers/:id",
    "route": "/admin/providers/:id",
    "summary": "Get provider by ID",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getProviderById",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 131
  },
  {
    "id": "PATCH_api_v1_admin_providers_id",
    "method": "PATCH",
    "path": "/api/v1/admin/providers/:id",
    "route": "/admin/providers/:id",
    "summary": "Update provider data",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateProvider",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 161
  },
  {
    "id": "PATCH_api_v1_admin_providers_id_approve",
    "method": "PATCH",
    "path": "/api/v1/admin/providers/:id/approve",
    "route": "/admin/providers/:id/approve",
    "summary": "Approve provider registration",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "approveProvider",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 140
  },
  {
    "id": "PATCH_api_v1_admin_providers_id_reject",
    "method": "PATCH",
    "path": "/api/v1/admin/providers/:id/reject",
    "route": "/admin/providers/:id/reject",
    "summary": "Reject provider registration",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "rejectProvider",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 149
  },
  {
    "id": "POST_api_v1_admin_refresh_token",
    "method": "POST",
    "path": "/api/v1/admin/refresh-token",
    "route": "/admin/refresh-token",
    "summary": "Refresh admin tokens",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "refreshToken",
    "tag": "Admin",
    "auth": "Public",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": null,
      "fields": [
        "refreshToken"
      ]
    },
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 33
  },
  {
    "id": "GET_api_v1_admin_services",
    "method": "GET",
    "path": "/api/v1/admin/services",
    "route": "/admin/services",
    "summary": "Get all system services",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getAllServices",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "services"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 177
  },
  {
    "id": "POST_api_v1_admin_services",
    "method": "POST",
    "path": "/api/v1/admin/services",
    "route": "/admin/services",
    "summary": "Create new system service",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "createService",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "services",
      "audit_logs"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "any",
      "fields": []
    },
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 186
  },
  {
    "id": "DELETE_api_v1_admin_services_id",
    "method": "DELETE",
    "path": "/api/v1/admin/services/:id",
    "route": "/admin/services/:id",
    "summary": "Delete system service",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "deleteService",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "services",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 207
  },
  {
    "id": "PATCH_api_v1_admin_services_id",
    "method": "PATCH",
    "path": "/api/v1/admin/services/:id",
    "route": "/admin/services/:id",
    "summary": "Update system service",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateService",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "services",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 195
  },
  {
    "id": "GET_api_v1_admin_settings",
    "method": "GET",
    "path": "/api/v1/admin/settings",
    "route": "/admin/settings",
    "summary": "Get application settings",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getSettings",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "settings"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 361
  },
  {
    "id": "PATCH_api_v1_admin_settings_maintenance",
    "method": "PATCH",
    "path": "/api/v1/admin/settings/maintenance",
    "route": "/admin/settings/maintenance",
    "summary": "Toggle maintenance mode",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateMaintenanceMode",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "maintenancerecords",
      "settings",
      "audit_logs"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 370
  },
  {
    "id": "GET_api_v1_admin_stats",
    "method": "GET",
    "path": "/api/v1/admin/stats",
    "route": "/admin/stats",
    "summary": "Get general platform statistics",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getGeneralStats",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 266
  },
  {
    "id": "GET_api_v1_admin_stats_orders",
    "method": "GET",
    "path": "/api/v1/admin/stats/orders",
    "route": "/admin/stats/orders",
    "summary": "Get order statistics by status",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getOrderStats",
    "auth": true,
    "collections": [
      "admins",
      "orders"
    ],
    "body": null,
    "params": [],
    "query": [],
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts"
  },
  {
    "id": "GET_api_v1_admin_stats_revenue",
    "method": "GET",
    "path": "/api/v1/admin/stats/revenue",
    "route": "/admin/stats/revenue",
    "summary": "Get monthly revenue statistics",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getMonthlyRevenue",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 284
  },
  {
    "id": "GET_api_v1_admin_stats_top_services",
    "method": "GET",
    "path": "/api/v1/admin/stats/top-services",
    "route": "/admin/stats/top-services",
    "summary": "Get top requested services",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getTopServices",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 293
  },
  {
    "id": "GET_api_v1_admin_status_histories",
    "method": "GET",
    "path": "/api/v1/admin/status-histories",
    "route": "/admin/status-histories",
    "summary": "List status history records for admin",
    "module": "status-history",
    "controller": "StatusHistoryController",
    "handler": "findAll",
    "tag": "Status Histories",
    "auth": "JWT",
    "collections": [
      "admins",
      "orders",
      "status_histories"
    ],
    "body": null,
    "params": [],
    "query": [
      "entityType",
      "entityId",
      "toStatus",
      "changedBy",
      "page",
      "limit"
    ],
    "source": "src/modules/status-history/presentation/controllers/status-history.controller.ts"
  },
  {
    "id": "GET_api_v1_admin_subscription_plans",
    "method": "GET",
    "path": "/api/v1/admin/subscription-plans",
    "route": "/admin/subscription-plans",
    "summary": "Get all subscription plans",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getAllMembershipPlans",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 306
  },
  {
    "id": "POST_api_v1_admin_subscription_plans",
    "method": "POST",
    "path": "/api/v1/admin/subscription-plans",
    "route": "/admin/subscription-plans",
    "summary": "Create new subscription plan",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "createMembershipPlan",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions",
      "audit_logs"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateMembershipPlanDto",
      "fields": []
    },
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 315
  },
  {
    "id": "DELETE_api_v1_admin_subscription_plans_id",
    "method": "DELETE",
    "path": "/api/v1/admin/subscription-plans/:id",
    "route": "/admin/subscription-plans/:id",
    "summary": "Delete subscription plan",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "deleteMembershipPlan",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 336
  },
  {
    "id": "PATCH_api_v1_admin_subscription_plans_id",
    "method": "PATCH",
    "path": "/api/v1/admin/subscription-plans/:id",
    "route": "/admin/subscription-plans/:id",
    "summary": "Update subscription plan",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateMembershipPlan",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 324
  },
  {
    "id": "GET_api_v1_admin_subscriptions",
    "method": "GET",
    "path": "/api/v1/admin/subscriptions",
    "route": "/admin/subscriptions",
    "summary": "Get all user subscriptions",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getMembershipSubscribers",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 345
  },
  {
    "id": "GET_api_v1_admin_users",
    "method": "GET",
    "path": "/api/v1/admin/users",
    "route": "/admin/users",
    "summary": "Get all users",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getAllUsers",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "users"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 63
  },
  {
    "id": "DELETE_api_v1_admin_users_id",
    "method": "DELETE",
    "path": "/api/v1/admin/users/:id",
    "route": "/admin/users/:id",
    "summary": "Delete user",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "deleteUser",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "users",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 105
  },
  {
    "id": "GET_api_v1_admin_users_id",
    "method": "GET",
    "path": "/api/v1/admin/users/:id",
    "route": "/admin/users/:id",
    "summary": "Get user by ID",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "getUserById",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "users"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 84
  },
  {
    "id": "PATCH_api_v1_admin_users_id",
    "method": "PATCH",
    "path": "/api/v1/admin/users/:id",
    "route": "/admin/users/:id",
    "summary": "Update user (Admin only)",
    "description": "User updated successfully",
    "module": "users",
    "controller": "AdminUsersController",
    "handler": "update",
    "tag": "Admin - Users",
    "auth": "JWT",
    "collections": [
      "admins",
      "users",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": "UpdateUserDto",
      "fields": []
    },
    "source": "src/modules/users/presentation/controllers/admin-users.controller.ts",
    "line": 57
  },
  {
    "id": "PATCH_api_v1_admin_users_id_status",
    "method": "PATCH",
    "path": "/api/v1/admin/users/:id/status",
    "route": "/admin/users/:id/status",
    "summary": "Activate/Deactivate user",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "updateUserStatus",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "users",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 93
  },
  {
    "id": "GET_api_v1_admin_users_search",
    "method": "GET",
    "path": "/api/v1/admin/users/search",
    "route": "/admin/users/search",
    "summary": "Search users by name or phone",
    "description": "",
    "module": "admin",
    "controller": "AdminController",
    "handler": "searchUsers",
    "tag": "Admin",
    "auth": "JWT",
    "collections": [
      "admins",
      "users"
    ],
    "params": [],
    "query": [
      {
        "name": "query",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/admin/presentation/controllers/admin.controller.ts",
    "line": 75
  },
  {
    "id": "GET_api_v1_admin_vehicles",
    "method": "GET",
    "path": "/api/v1/admin/vehicles",
    "route": "/admin/vehicles",
    "summary": "Get all vehicles in the system (Admin only)",
    "description": "Page number",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getAllVehicles",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 48
  },
  {
    "id": "DELETE_api_v1_admin_vehicles_id",
    "method": "DELETE",
    "path": "/api/v1/admin/vehicles/:id",
    "route": "/admin/vehicles/:id",
    "summary": "Delete a vehicle (Admin only)",
    "description": "Vehicle deleted successfully",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "deleteVehicle",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 129
  },
  {
    "id": "GET_api_v1_admin_vehicles_id",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/:id",
    "route": "/admin/vehicles/:id",
    "summary": "Get vehicle details by ID (Admin only)",
    "description": "Vehicle details",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getVehicleById",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 116
  },
  {
    "id": "GET_api_v1_admin_vehicles_distribution",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/distribution",
    "route": "/admin/vehicles/distribution",
    "summary": "Get vehicle distribution by brand (Admin only)",
    "description": "Vehicle distribution with percentages",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getDistribution",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 92
  },
  {
    "id": "GET_api_v1_admin_vehicles_stats",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/stats",
    "route": "/admin/vehicles/stats",
    "summary": "Get vehicle statistics by brand (Admin only)",
    "description": "Vehicle statistics by brand",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getVehicleStats",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 65
  },
  {
    "id": "GET_api_v1_admin_vehicles_top_models",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/top-models",
    "route": "/admin/vehicles/top-models",
    "summary": "Get top vehicle models by usage (Admin only)",
    "description": "Number of models to return",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getTopModels",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [],
    "query": [
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 77
  },
  {
    "id": "GET_api_v1_admin_vehicles_user_userId",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/user/:userId",
    "route": "/admin/vehicles/user/:userId",
    "summary": "Get all vehicles for a specific user (Admin only)",
    "description": "Page number",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getUserVehicles",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [
      "userId"
    ],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 143
  },
  {
    "id": "GET_api_v1_admin_vehicles_year_stats",
    "method": "GET",
    "path": "/api/v1/admin/vehicles/year-stats",
    "route": "/admin/vehicles/year-stats",
    "summary": "Get vehicle statistics by year (Admin only)",
    "description": "Vehicle statistics by manufacturing year",
    "module": "vehicles",
    "controller": "AdminVehiclesController",
    "handler": "getYearStats",
    "tag": "Admin - Vehicles",
    "auth": "JWT",
    "collections": [
      "admins",
      "vehicles"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/admin-vehicles.controller.ts",
    "line": 104
  },
  {
    "id": "POST_api_v1_auth_forgot_password",
    "method": "POST",
    "path": "/api/v1/auth/forgot-password",
    "route": "/auth/forgot-password",
    "summary": "Forgot password",
    "description": "Request OTP to reset password",
    "module": "auth",
    "controller": "AuthController",
    "handler": "forgotPassword",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "ForgotPasswordDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 127
  },
  {
    "id": "POST_api_v1_auth_login",
    "method": "POST",
    "path": "/api/v1/auth/login",
    "route": "/auth/login",
    "summary": "Login",
    "description": "Login with phone number and password",
    "module": "auth",
    "controller": "AuthController",
    "handler": "login",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "LoginDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 99
  },
  {
    "id": "POST_api_v1_auth_logout",
    "method": "POST",
    "path": "/api/v1/auth/logout",
    "route": "/auth/logout",
    "summary": "Logout",
    "description": "Logout and invalidate refresh token",
    "module": "auth",
    "controller": "AuthController",
    "handler": "logout",
    "tag": "Authentication",
    "auth": "JWT",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 201
  },
  {
    "id": "GET_api_v1_auth_me",
    "method": "GET",
    "path": "/api/v1/auth/me",
    "route": "/auth/me",
    "summary": "Get current user info",
    "description": "Get authenticated user information from JWT token",
    "module": "auth",
    "controller": "AuthController",
    "handler": "getMe",
    "tag": "Authentication",
    "auth": "JWT",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 186
  },
  {
    "id": "POST_api_v1_auth_refresh_token",
    "method": "POST",
    "path": "/api/v1/auth/refresh-token",
    "route": "/auth/refresh-token",
    "summary": "Refresh access token",
    "description": "Get new access token using refresh token",
    "module": "auth",
    "controller": "AuthController",
    "handler": "refreshToken",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "RefreshTokenDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 113
  },
  {
    "id": "POST_api_v1_auth_register",
    "method": "POST",
    "path": "/api/v1/auth/register",
    "route": "/auth/register",
    "summary": "Register new account",
    "description": "Create a new user account and send OTP via WhatsApp",
    "module": "auth",
    "controller": "AuthController",
    "handler": "register",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "RegisterDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 57
  },
  {
    "id": "POST_api_v1_auth_resend_otp",
    "method": "POST",
    "path": "/api/v1/auth/resend-otp",
    "route": "/auth/resend-otp",
    "summary": "Resend OTP code",
    "description": "Resend OTP to phone number via WhatsApp",
    "module": "auth",
    "controller": "AuthController",
    "handler": "resendOtp",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": null,
      "fields": [
        "phoneNumber"
      ]
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 85
  },
  {
    "id": "POST_api_v1_auth_reset_password",
    "method": "POST",
    "path": "/api/v1/auth/reset-password",
    "route": "/auth/reset-password",
    "summary": "Reset password",
    "description": "Reset password using OTP code",
    "module": "auth",
    "controller": "AuthController",
    "handler": "resetPassword",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "ResetPasswordDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 141
  },
  {
    "id": "POST_api_v1_auth_restore_confirm",
    "method": "POST",
    "path": "/api/v1/auth/restore/confirm",
    "route": "/auth/restore/confirm",
    "summary": "Confirm OTP and restore account",
    "description": "Verify OTP and restore deleted account",
    "module": "auth",
    "controller": "AuthController",
    "handler": "confirmRestore",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "ConfirmRestoreOtpDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 169
  },
  {
    "id": "POST_api_v1_auth_restore_request_otp",
    "method": "POST",
    "path": "/api/v1/auth/restore/request-otp",
    "route": "/auth/restore/request-otp",
    "summary": "Request OTP to restore deleted account",
    "description": "Send OTP to restore soft-deleted account",
    "module": "auth",
    "controller": "AuthController",
    "handler": "requestRestoreOtp",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "RequestRestoreOtpDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 155
  },
  {
    "id": "POST_api_v1_auth_verify_otp",
    "method": "POST",
    "path": "/api/v1/auth/verify-otp",
    "route": "/auth/verify-otp",
    "summary": "Verify OTP code",
    "description": "Verify OTP and activate account",
    "module": "auth",
    "controller": "AuthController",
    "handler": "verifyOtp",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "VerifyOtpDto",
      "fields": []
    },
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 71
  },
  {
    "id": "GET_api_v1_auth_whatsapp_status",
    "method": "GET",
    "path": "/api/v1/auth/whatsapp/status",
    "route": "/auth/whatsapp/status",
    "summary": "Check WhatsApp connection status",
    "description": "",
    "module": "auth",
    "controller": "AuthController",
    "handler": "checkWhatsAppStatus",
    "tag": "Authentication",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations",
      "logouts"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/auth/presentation/controllers/auth.controller.ts",
    "line": 40
  },
  {
    "id": "GET_api_v1_bookings",
    "method": "GET",
    "path": "/api/v1/bookings",
    "route": "/bookings",
    "summary": "Get scheduled bookings backed by the orders collection",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getAllBookings",
    "auth": true,
    "collections": [
      "orders"
    ],
    "body": null,
    "params": [],
    "query": [
      "page",
      "limit",
      "status"
    ],
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts"
  },
  {
    "id": "POST_api_v1_bookings",
    "method": "POST",
    "path": "/api/v1/bookings",
    "route": "/bookings",
    "summary": "Create a scheduled booking backed by the orders collection",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "createBooking",
    "auth": true,
    "collections": [
      "orders",
      "status_histories"
    ],
    "body": {
      "serviceId": "60b8d295f1d293001f3e4c8b",
      "providerId": "60b8d295f1d293001f3e4c8c",
      "vehicleId": "60b8d295f1d293001f3e4c8d",
      "scheduleTime": "2026-05-20T10:00:00.000Z",
      "location": {
        "coordinates": [
          36.2765,
          33.5138
        ]
      },
      "notes": "??? ???? ???? ?????"
    },
    "params": [],
    "query": [],
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts"
  },
  {
    "id": "GET_api_v1_bookings_id",
    "method": "GET",
    "path": "/api/v1/bookings/:id",
    "route": "/bookings/:id",
    "summary": "Get scheduled booking details by ID",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getBookingById",
    "auth": true,
    "collections": [
      "orders"
    ],
    "body": null,
    "params": [
      "id"
    ],
    "query": [],
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts"
  },
  {
    "id": "GET_api_v1_notifications",
    "method": "GET",
    "path": "/api/v1/notifications",
    "route": "/notifications",
    "summary": "Get user notifications",
    "description": "",
    "module": "notifications",
    "controller": "NotificationsController",
    "handler": "getNotifications",
    "tag": "Notifications",
    "auth": "JWT",
    "collections": [
      "notifications"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/notifications/presentation/controllers/notifications.controller.ts",
    "line": 25
  },
  {
    "id": "PATCH_api_v1_notifications_id_read",
    "method": "PATCH",
    "path": "/api/v1/notifications/:id/read",
    "route": "/notifications/:id/read",
    "summary": "Mark notification as read",
    "description": "",
    "module": "notifications",
    "controller": "NotificationsController",
    "handler": "markAsRead",
    "tag": "Notifications",
    "auth": "JWT",
    "collections": [
      "notifications"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/notifications/presentation/controllers/notifications.controller.ts",
    "line": 46
  },
  {
    "id": "PATCH_api_v1_notifications_read_all",
    "method": "PATCH",
    "path": "/api/v1/notifications/read-all",
    "route": "/notifications/read-all",
    "summary": "Mark all notifications as read",
    "description": "",
    "module": "notifications",
    "controller": "NotificationsController",
    "handler": "markAllAsRead",
    "tag": "Notifications",
    "auth": "JWT",
    "collections": [
      "notifications"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/notifications/presentation/controllers/notifications.controller.ts",
    "line": 56
  },
  {
    "id": "GET_api_v1_notifications_unread_count",
    "method": "GET",
    "path": "/api/v1/notifications/unread-count",
    "route": "/notifications/unread-count",
    "summary": "Get unread notifications count",
    "description": "",
    "module": "notifications",
    "controller": "NotificationsController",
    "handler": "getUnreadCount",
    "tag": "Notifications",
    "auth": "JWT",
    "collections": [
      "notifications"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/notifications/presentation/controllers/notifications.controller.ts",
    "line": 39
  },
  {
    "id": "GET_api_v1_orders",
    "method": "GET",
    "path": "/api/v1/orders",
    "route": "/orders",
    "summary": "Get all orders (Paginated)",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getAllOrders",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      },
      {
        "name": "status",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 57
  },
  {
    "id": "POST_api_v1_orders",
    "method": "POST",
    "path": "/api/v1/orders",
    "route": "/orders",
    "summary": "Create a new service order",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "createOrder",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders",
      "status_histories"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateOrderDto",
      "fields": []
    },
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 47
  },
  {
    "id": "DELETE_api_v1_orders_id",
    "method": "DELETE",
    "path": "/api/v1/orders/:id",
    "route": "/orders/:id",
    "summary": "Delete an order permanently",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "deleteOrder",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 188
  },
  {
    "id": "GET_api_v1_orders_id",
    "method": "GET",
    "path": "/api/v1/orders/:id",
    "route": "/orders/:id",
    "summary": "Get order details by ID",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getOrderById",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 108
  },
  {
    "id": "PATCH_api_v1_orders_id",
    "method": "PATCH",
    "path": "/api/v1/orders/:id",
    "route": "/orders/:id",
    "summary": "Update order details",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "updateOrder",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 128
  },
  {
    "id": "POST_api_v1_orders_id_cancel",
    "method": "POST",
    "path": "/api/v1/orders/:id/cancel",
    "route": "/orders/:id/cancel",
    "summary": "Cancel an order with a reason",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "cancelOrder",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders",
      "status_histories"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 164
  },
  {
    "id": "PATCH_api_v1_orders_id_location",
    "method": "PATCH",
    "path": "/api/v1/orders/:id/location",
    "route": "/orders/:id/location",
    "summary": "Update provider live location",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "updateLocation",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 140
  },
  {
    "id": "POST_api_v1_orders_id_payment_verify",
    "method": "POST",
    "path": "/api/v1/orders/:id/payment/verify",
    "route": "/orders/:id/payment/verify",
    "summary": "Verify and confirm payment for an order",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "verifyPayment",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 152
  },
  {
    "id": "POST_api_v1_orders_id_review",
    "method": "POST",
    "path": "/api/v1/orders/:id/review",
    "route": "/orders/:id/review",
    "summary": "Review and rate an order",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "reviewOrder",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders",
      "reviews"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 176
  },
  {
    "id": "PATCH_api_v1_orders_id_status",
    "method": "PATCH",
    "path": "/api/v1/orders/:id/status",
    "route": "/orders/:id/status",
    "summary": "Update order status",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "updateStatus",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders",
      "status_histories"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 116
  },
  {
    "id": "GET_api_v1_orders_id_status_transitions",
    "method": "GET",
    "path": "/api/v1/orders/:id/status-transitions",
    "route": "/orders/:id/status-transitions",
    "summary": "Get allowed next statuses for an order",
    "description": "Returns allowed next statuses from the centralized OrderStateMachine.",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getAllowedStatusTransitions",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders",
      "status_histories"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 155
  },
  {
    "id": "GET_api_v1_orders_orderId_status_history",
    "method": "GET",
    "path": "/api/v1/orders/:orderId/status-history",
    "route": "/orders/:orderId/status-history",
    "summary": "Get status history for an order or scheduled booking",
    "module": "status-history",
    "controller": "StatusHistoryController",
    "handler": "findForOrder",
    "tag": "Status Histories",
    "auth": "JWT",
    "collections": [
      "orders",
      "status_histories"
    ],
    "body": null,
    "params": [
      "orderId"
    ],
    "query": [],
    "source": "src/modules/status-history/presentation/controllers/status-history.controller.ts"
  },
  {
    "id": "GET_api_v1_orders_report",
    "method": "GET",
    "path": "/api/v1/orders/report",
    "route": "/orders/report",
    "summary": "Export orders report",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "exportReport",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 88
  },
  {
    "id": "GET_api_v1_orders_search",
    "method": "GET",
    "path": "/api/v1/orders/search",
    "route": "/orders/search",
    "summary": "Search orders by various fields",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "searchOrders",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [],
    "query": [
      {
        "name": "query",
        "required": true
      }
    ],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 79
  },
  {
    "id": "GET_api_v1_orders_stats",
    "method": "GET",
    "path": "/api/v1/orders/stats",
    "route": "/orders/stats",
    "summary": "Get order statistics",
    "description": "",
    "module": "orders",
    "controller": "OrdersController",
    "handler": "getStats",
    "tag": "Orders",
    "auth": "JWT",
    "collections": [
      "orders"
    ],
    "params": [],
    "query": [
      {
        "name": "period",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/orders/presentation/controllers/orders.controller.ts",
    "line": 100
  },
  {
    "id": "GET_api_v1_providers",
    "method": "GET",
    "path": "/api/v1/providers",
    "route": "/providers",
    "summary": "Get all providers",
    "description": "List of providers",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "findAll",
    "tag": "Providers",
    "auth": "Public",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 68
  },
  {
    "id": "GET_api_v1_providers_id",
    "method": "GET",
    "path": "/api/v1/providers/:id",
    "route": "/providers/:id",
    "summary": "Get provider by ID",
    "description": "Provider details",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "findOne",
    "tag": "Providers",
    "auth": "Public",
    "collections": [
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 231
  },
  {
    "id": "POST_api_v1_providers_id_approve",
    "method": "POST",
    "path": "/api/v1/providers/:id/approve",
    "route": "/providers/:id/approve",
    "summary": "Approve provider (Admin only)",
    "description": "Provider approved",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "approve",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 240
  },
  {
    "id": "POST_api_v1_providers_admin",
    "method": "POST",
    "path": "/api/v1/providers/admin",
    "route": "/providers/admin",
    "summary": "Create provider (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "create",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateProviderDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 178
  },
  {
    "id": "DELETE_api_v1_providers_admin_id",
    "method": "DELETE",
    "path": "/api/v1/providers/admin/:id",
    "route": "/providers/admin/:id",
    "summary": "Deactivate provider (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "delete",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 223
  },
  {
    "id": "GET_api_v1_providers_admin_id",
    "method": "GET",
    "path": "/api/v1/providers/admin/:id",
    "route": "/providers/admin/:id",
    "summary": "Get provider by ID for admin",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "adminFindOne",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 187
  },
  {
    "id": "PATCH_api_v1_providers_admin_id",
    "method": "PATCH",
    "path": "/api/v1/providers/admin/:id",
    "route": "/providers/admin/:id",
    "summary": "Update provider (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "adminUpdate",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": "UpdateProviderDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 196
  },
  {
    "id": "PATCH_api_v1_providers_admin_id_reject",
    "method": "PATCH",
    "path": "/api/v1/providers/admin/:id/reject",
    "route": "/providers/admin/:id/reject",
    "summary": "Reject provider registration (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "reject",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": "RejectProviderDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 214
  },
  {
    "id": "PATCH_api_v1_providers_admin_id_status",
    "method": "PATCH",
    "path": "/api/v1/providers/admin/:id/status",
    "route": "/providers/admin/:id/status",
    "summary": "Activate/deactivate provider (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "setActive",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": null,
      "fields": [
        "isActive"
      ]
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 205
  },
  {
    "id": "GET_api_v1_providers_admin_stats",
    "method": "GET",
    "path": "/api/v1/providers/admin/stats",
    "route": "/providers/admin/stats",
    "summary": "Get provider statistics (Admin only)",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "stats",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "admins",
      "providers"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 169
  },
  {
    "id": "GET_api_v1_providers_me",
    "method": "GET",
    "path": "/api/v1/providers/me",
    "route": "/providers/me",
    "summary": "Get current provider profile",
    "description": "Provider profile",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "getProfile",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 93
  },
  {
    "id": "PUT_api_v1_providers_me",
    "method": "PUT",
    "path": "/api/v1/providers/me",
    "route": "/providers/me",
    "summary": "Update current provider profile",
    "description": "Updated provider profile",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateProfile",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateProviderDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 103
  },
  {
    "id": "PUT_api_v1_providers_me_bank_account",
    "method": "PUT",
    "path": "/api/v1/providers/me/bank-account",
    "route": "/providers/me/bank-account",
    "summary": "Update current provider bank account",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateMyBankAccount",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateProviderBankAccountDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 160
  },
  {
    "id": "PUT_api_v1_providers_me_documents",
    "method": "PUT",
    "path": "/api/v1/providers/me/documents",
    "route": "/providers/me/documents",
    "summary": "Update current provider verification documents",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateMyDocuments",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateProviderDocumentsDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 151
  },
  {
    "id": "PUT_api_v1_providers_me_location",
    "method": "PUT",
    "path": "/api/v1/providers/me/location",
    "route": "/providers/me/location",
    "summary": "Update provider location",
    "description": "Location updated",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateLocation",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateLocationDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 113
  },
  {
    "id": "PUT_api_v1_providers_me_services",
    "method": "PUT",
    "path": "/api/v1/providers/me/services",
    "route": "/providers/me/services",
    "summary": "Update current provider services and categories",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateMyServices",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers",
      "services"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateProviderServicesDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 133
  },
  {
    "id": "PUT_api_v1_providers_me_status",
    "method": "PUT",
    "path": "/api/v1/providers/me/status",
    "route": "/providers/me/status",
    "summary": "Update provider status",
    "description": "Status updated",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateStatus",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateStatusDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 123
  },
  {
    "id": "PUT_api_v1_providers_me_working_hours",
    "method": "PUT",
    "path": "/api/v1/providers/me/working-hours",
    "route": "/providers/me/working-hours",
    "summary": "Update current provider working hours",
    "description": "",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "updateMyWorkingHours",
    "tag": "Providers",
    "auth": "JWT",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "UpdateProviderWorkingHoursDto",
      "fields": []
    },
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 142
  },
  {
    "id": "GET_api_v1_providers_nearby",
    "method": "GET",
    "path": "/api/v1/providers/nearby",
    "route": "/providers/nearby",
    "summary": "Find nearby providers",
    "description": "List of nearby providers",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "findNearby",
    "tag": "Providers",
    "auth": "Public",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 76
  },
  {
    "id": "GET_api_v1_providers_top_rated",
    "method": "GET",
    "path": "/api/v1/providers/top-rated",
    "route": "/providers/top-rated",
    "summary": "Get top rated approved providers",
    "description": "Top rated providers",
    "module": "providers",
    "controller": "ProvidersController",
    "handler": "topRated",
    "tag": "Providers",
    "auth": "Public",
    "collections": [
      "providers"
    ],
    "params": [],
    "query": [
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/providers/presentation/controllers/providers.controller.ts",
    "line": 84
  },
  {
    "id": "POST_api_v1_reviews",
    "method": "POST",
    "path": "/api/v1/reviews",
    "route": "/reviews",
    "summary": "Create a new review for an order",
    "description": "",
    "module": "reviews",
    "controller": "ReviewsController",
    "handler": "createReview",
    "tag": "Reviews",
    "auth": "JWT",
    "collections": [
      "reviews"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateReviewDto",
      "fields": []
    },
    "source": "src/modules/reviews/presentation/controllers/reviews.controller.ts",
    "line": 20
  },
  {
    "id": "DELETE_api_v1_reviews_id",
    "method": "DELETE",
    "path": "/api/v1/reviews/:id",
    "route": "/reviews/:id",
    "summary": "Delete a review",
    "description": "",
    "module": "reviews",
    "controller": "ReviewsController",
    "handler": "deleteReview",
    "tag": "Reviews",
    "auth": "JWT",
    "collections": [
      "reviews"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/reviews/presentation/controllers/reviews.controller.ts",
    "line": 50
  },
  {
    "id": "PATCH_api_v1_reviews_id_respond",
    "method": "PATCH",
    "path": "/api/v1/reviews/:id/respond",
    "route": "/reviews/:id/respond",
    "summary": "Provider response to a review",
    "description": "",
    "module": "reviews",
    "controller": "ReviewsController",
    "handler": "respondToReview",
    "tag": "Reviews",
    "auth": "JWT",
    "collections": [
      "reviews"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/reviews/presentation/controllers/reviews.controller.ts",
    "line": 38
  },
  {
    "id": "GET_api_v1_reviews_provider_providerId",
    "method": "GET",
    "path": "/api/v1/reviews/provider/:providerId",
    "route": "/reviews/provider/:providerId",
    "summary": "Get all reviews for a specific provider",
    "description": "",
    "module": "reviews",
    "controller": "ReviewsController",
    "handler": "getProviderReviews",
    "tag": "Reviews",
    "auth": "Public",
    "collections": [
      "providers",
      "reviews"
    ],
    "params": [
      "providerId"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/reviews/presentation/controllers/reviews.controller.ts",
    "line": 29
  },
  {
    "id": "GET_api_v1_services",
    "method": "GET",
    "path": "/api/v1/services",
    "route": "/services",
    "summary": "Get all active services",
    "description": "List of services",
    "module": "services",
    "controller": "ServicesController",
    "handler": "findAll",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "services"
    ],
    "params": [],
    "query": [
      {
        "name": "category",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 28
  },
  {
    "id": "GET_api_v1_services_id",
    "method": "GET",
    "path": "/api/v1/services/:id",
    "route": "/services/:id",
    "summary": "Get active service details by ID",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "findOne",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "services"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 120
  },
  {
    "id": "POST_api_v1_services_admin",
    "method": "POST",
    "path": "/api/v1/services/admin",
    "route": "/services/admin",
    "summary": "Admin: create service",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "create",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateServiceDto",
      "fields": []
    },
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 86
  },
  {
    "id": "DELETE_api_v1_services_admin_id",
    "method": "DELETE",
    "path": "/api/v1/services/admin/:id",
    "route": "/services/admin/:id",
    "summary": "Admin: deactivate service",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "delete",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 113
  },
  {
    "id": "GET_api_v1_services_admin_id",
    "method": "GET",
    "path": "/api/v1/services/admin/:id",
    "route": "/services/admin/:id",
    "summary": "Admin: get service details by ID including inactive services",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "adminFindOne",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 77
  },
  {
    "id": "PATCH_api_v1_services_admin_id",
    "method": "PATCH",
    "path": "/api/v1/services/admin/:id",
    "route": "/services/admin/:id",
    "summary": "Admin: update service",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "update",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": "UpdateServiceDto",
      "fields": []
    },
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 95
  },
  {
    "id": "PATCH_api_v1_services_admin_id_status",
    "method": "PATCH",
    "path": "/api/v1/services/admin/:id/status",
    "route": "/services/admin/:id/status",
    "summary": "Admin: activate or deactivate service",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "setStatus",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": {
      "dto": null,
      "fields": [
        "isActive"
      ]
    },
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 104
  },
  {
    "id": "GET_api_v1_services_admin_list",
    "method": "GET",
    "path": "/api/v1/services/admin/list",
    "route": "/services/admin/list",
    "summary": "Admin: list services with filters and pagination",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "adminList",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 59
  },
  {
    "id": "GET_api_v1_services_admin_stats",
    "method": "GET",
    "path": "/api/v1/services/admin/stats",
    "route": "/services/admin/stats",
    "summary": "Admin: get service catalog statistics",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "adminStats",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "admins",
      "services"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 68
  },
  {
    "id": "GET_api_v1_services_categories",
    "method": "GET",
    "path": "/api/v1/services/categories",
    "route": "/services/categories",
    "summary": "Get active service categories with counts",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "categories",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "services"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 36
  },
  {
    "id": "GET_api_v1_services_emergency",
    "method": "GET",
    "path": "/api/v1/services/emergency",
    "route": "/services/emergency",
    "summary": "Get all active emergency services",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "emergency",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "services"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 43
  },
  {
    "id": "GET_api_v1_services_search",
    "method": "GET",
    "path": "/api/v1/services/search",
    "route": "/services/search",
    "summary": "Search active services",
    "description": "",
    "module": "services",
    "controller": "ServicesController",
    "handler": "search",
    "tag": "Services",
    "auth": "Public",
    "collections": [
      "services"
    ],
    "params": [],
    "query": [
      {
        "name": "query",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/services/presentation/controllers/services.controller.ts",
    "line": 50
  },
  {
    "id": "GET_api_v1_subscriptions_admin_stats",
    "method": "GET",
    "path": "/api/v1/subscriptions/admin/stats",
    "route": "/subscriptions/admin/stats",
    "summary": "Admin: get subscription statistics",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "getStats",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "admins",
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 135
  },
  {
    "id": "POST_api_v1_subscriptions_cancel",
    "method": "POST",
    "path": "/api/v1/subscriptions/cancel",
    "route": "/subscriptions/cancel",
    "summary": "Cancel current user subscription or disable auto renewal",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "cancel",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CancelSubscriptionDto",
      "fields": []
    },
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 98
  },
  {
    "id": "GET_api_v1_subscriptions_history",
    "method": "GET",
    "path": "/api/v1/subscriptions/history",
    "route": "/subscriptions/history",
    "summary": "Get current user subscription history",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "getHistory",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 117
  },
  {
    "id": "GET_api_v1_subscriptions_plans",
    "method": "GET",
    "path": "/api/v1/subscriptions/plans",
    "route": "/subscriptions/plans",
    "summary": "Get all available subscription plans",
    "description": "List of subscription plans",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "getPlans",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [
      {
        "name": "activeOnly",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 45
  },
  {
    "id": "GET_api_v1_subscriptions_plans_id",
    "method": "GET",
    "path": "/api/v1/subscriptions/plans/:id",
    "route": "/subscriptions/plans/:id",
    "summary": "Get subscription plan details",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "getPlanById",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 54
  },
  {
    "id": "POST_api_v1_subscriptions_renew",
    "method": "POST",
    "path": "/api/v1/subscriptions/renew",
    "route": "/subscriptions/renew",
    "summary": "Renew current user active subscription",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "renew",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "Partial",
      "fields": []
    },
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 75
  },
  {
    "id": "GET_api_v1_subscriptions_status",
    "method": "GET",
    "path": "/api/v1/subscriptions/status",
    "route": "/subscriptions/status",
    "summary": "Check current user subscription status",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "checkStatus",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 109
  },
  {
    "id": "POST_api_v1_subscriptions_subscribe",
    "method": "POST",
    "path": "/api/v1/subscriptions/subscribe",
    "route": "/subscriptions/subscribe",
    "summary": "Subscribe the current user to a plan",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "subscribe",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "SubscribeDto",
      "fields": []
    },
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 64
  },
  {
    "id": "POST_api_v1_subscriptions_upgrade",
    "method": "POST",
    "path": "/api/v1/subscriptions/upgrade",
    "route": "/subscriptions/upgrade",
    "summary": "Upgrade current user to another subscription plan",
    "description": "",
    "module": "subscriptions",
    "controller": "SubscriptionsController",
    "handler": "upgrade",
    "tag": "Subscriptions",
    "auth": "Public",
    "collections": [
      "subscription_plans",
      "user_subscriptions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "SubscribeDto",
      "fields": []
    },
    "source": "src/modules/subscriptions/presentation/controllers/subscriptions.controller.ts",
    "line": 87
  },
  {
    "id": "DELETE_api_v1_users_me",
    "method": "DELETE",
    "path": "/api/v1/users/me",
    "route": "/users/me",
    "summary": "Delete current user account",
    "description": "Account deleted successfully",
    "module": "users",
    "controller": "UsersController",
    "handler": "deleteAccount",
    "tag": "Users",
    "auth": "JWT",
    "collections": [
      "users"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/users/presentation/controllers/users.controller.ts",
    "line": 49
  },
  {
    "id": "GET_api_v1_users_me",
    "method": "GET",
    "path": "/api/v1/users/me",
    "route": "/users/me",
    "summary": "Get current user profile",
    "description": "User profile retrieved successfully",
    "module": "users",
    "controller": "UsersController",
    "handler": "getProfile",
    "tag": "Users",
    "auth": "JWT",
    "collections": [
      "users"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/users/presentation/controllers/users.controller.ts",
    "line": 32
  },
  {
    "id": "PATCH_api_v1_users_me",
    "method": "PATCH",
    "path": "/api/v1/users/me",
    "route": "/users/me",
    "summary": "Update current user profile",
    "description": "User profile updated successfully",
    "module": "users",
    "controller": "UsersController",
    "handler": "updateProfile",
    "tag": "Users",
    "auth": "JWT",
    "collections": [
      "users"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/users/presentation/controllers/users.controller.ts",
    "line": 39
  },
  {
    "id": "GET_api_v1_users_me_stats",
    "method": "GET",
    "path": "/api/v1/users/me/stats",
    "route": "/users/me/stats",
    "summary": "Get user statistics",
    "description": "User statistics retrieved successfully",
    "module": "users",
    "controller": "UsersController",
    "handler": "getStats",
    "tag": "Users",
    "auth": "JWT",
    "collections": [
      "users"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/users/presentation/controllers/users.controller.ts",
    "line": 57
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_ownerId",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/:ownerId",
    "route": "/v1/admin/wallet/:ownerId",
    "summary": "GetWallet",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getWallet",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [
      "ownerId"
    ],
    "query": [
      {
        "name": "type",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 69
  },
  {
    "id": "POST_api_v1_v1_admin_wallet_ownerId_adjust",
    "method": "POST",
    "path": "/api/v1/v1/admin/wallet/:ownerId/adjust",
    "route": "/v1/admin/wallet/:ownerId/adjust",
    "summary": "AdjustBalance",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "adjustBalance",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions",
      "audit_logs"
    ],
    "params": [
      "ownerId"
    ],
    "query": [],
    "body": {
      "dto": "any",
      "fields": []
    },
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 86
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_ownerId_transactions",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/:ownerId/transactions",
    "route": "/v1/admin/wallet/:ownerId/transactions",
    "summary": "GetTransactions",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getTransactions",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [
      "ownerId"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 75
  },
  {
    "id": "PATCH_api_v1_v1_admin_wallet_payouts_id",
    "method": "PATCH",
    "path": "/api/v1/v1/admin/wallet/payouts/:id",
    "route": "/v1/admin/wallet/payouts/:id",
    "summary": "HandlePayout",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "handlePayout",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions",
      "audit_logs"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 44
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_platform",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/platform",
    "route": "/v1/admin/wallet/platform",
    "summary": "GetPlatformWallet",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getPlatformWallet",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 54
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_platform_transactions",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/platform/transactions",
    "route": "/v1/admin/wallet/platform/transactions",
    "summary": "GetPlatformTransactions",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getPlatformTransactions",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 60
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_stats",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/stats",
    "route": "/v1/admin/wallet/stats",
    "summary": "GetStats",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getStats",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 28
  },
  {
    "id": "GET_api_v1_v1_admin_wallet_transactions_all",
    "method": "GET",
    "path": "/api/v1/v1/admin/wallet/transactions/all",
    "route": "/v1/admin/wallet/transactions/all",
    "summary": "GetAllTransactions",
    "description": "",
    "module": "wallet",
    "controller": "AdminWalletController",
    "handler": "getAllTransactions",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "admins",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/admin-wallet.controller.ts",
    "line": 34
  },
  {
    "id": "GET_api_v1_v1_chat_chatId_messages",
    "method": "GET",
    "path": "/api/v1/v1/chat/:chatId/messages",
    "route": "/v1/chat/:chatId/messages",
    "summary": "GetMessages",
    "description": "",
    "module": "chat",
    "controller": "ChatController",
    "handler": "getMessages",
    "tag": "Chat",
    "auth": "JWT",
    "collections": [
      "chats",
      "messages"
    ],
    "params": [
      "chatId"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/chat/presentation/controllers/chat.controller.ts",
    "line": 38
  },
  {
    "id": "GET_api_v1_v1_chat_conversations",
    "method": "GET",
    "path": "/api/v1/v1/chat/conversations",
    "route": "/v1/chat/conversations",
    "summary": "GetMyConversations",
    "description": "",
    "module": "chat",
    "controller": "ChatController",
    "handler": "getMyConversations",
    "tag": "Chat",
    "auth": "JWT",
    "collections": [
      "chats",
      "messages"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/chat/presentation/controllers/chat.controller.ts",
    "line": 32
  },
  {
    "id": "POST_api_v1_v1_chat_conversations",
    "method": "POST",
    "path": "/api/v1/v1/chat/conversations",
    "route": "/v1/chat/conversations",
    "summary": "StartConversation",
    "description": "",
    "module": "chat",
    "controller": "ChatController",
    "handler": "startConversation",
    "tag": "Chat",
    "auth": "JWT",
    "collections": [
      "chats",
      "messages"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateChatDto",
      "fields": []
    },
    "source": "src/modules/chat/presentation/controllers/chat.controller.ts",
    "line": 26
  },
  {
    "id": "POST_api_v1_v1_chat_upload",
    "method": "POST",
    "path": "/api/v1/v1/chat/upload",
    "route": "/v1/chat/upload",
    "summary": "DiskStorage",
    "description": "",
    "module": "chat",
    "controller": "ChatController",
    "handler": "diskStorage",
    "tag": "Chat",
    "auth": "JWT",
    "collections": [
      "chats",
      "messages"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/chat/presentation/controllers/chat.controller.ts",
    "line": 49
  },
  {
    "id": "GET_api_v1_v1_provider_wallet_me",
    "method": "GET",
    "path": "/api/v1/v1/provider/wallet/me",
    "route": "/v1/provider/wallet/me",
    "summary": "GetMyWallet",
    "description": "",
    "module": "wallet",
    "controller": "ProviderWalletController",
    "handler": "getMyWallet",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "providers",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/provider-wallet.controller.ts",
    "line": 24
  },
  {
    "id": "POST_api_v1_v1_provider_wallet_payout",
    "method": "POST",
    "path": "/api/v1/v1/provider/wallet/payout",
    "route": "/v1/provider/wallet/payout",
    "summary": "RequestPayoutMethod",
    "description": "",
    "module": "wallet",
    "controller": "ProviderWalletController",
    "handler": "requestPayoutMethod",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "providers",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "WithdrawDto",
      "fields": []
    },
    "source": "src/modules/wallet/presentation/controllers/provider-wallet.controller.ts",
    "line": 36
  },
  {
    "id": "GET_api_v1_v1_provider_wallet_transactions",
    "method": "GET",
    "path": "/api/v1/v1/provider/wallet/transactions",
    "route": "/v1/provider/wallet/transactions",
    "summary": "GetTransactions",
    "description": "",
    "module": "wallet",
    "controller": "ProviderWalletController",
    "handler": "getTransactions",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "providers",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/provider-wallet.controller.ts",
    "line": 42
  },
  {
    "id": "POST_api_v1_v1_provider_wallet_withdraw",
    "method": "POST",
    "path": "/api/v1/v1/provider/wallet/withdraw",
    "route": "/v1/provider/wallet/withdraw",
    "summary": "Withdraw",
    "description": "",
    "module": "wallet",
    "controller": "ProviderWalletController",
    "handler": "withdraw",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "providers",
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "WithdrawDto",
      "fields": []
    },
    "source": "src/modules/wallet/presentation/controllers/provider-wallet.controller.ts",
    "line": 30
  },
  {
    "id": "POST_api_v1_v1_wallet_deposit",
    "method": "POST",
    "path": "/api/v1/v1/wallet/deposit",
    "route": "/v1/wallet/deposit",
    "summary": "Deposit",
    "description": "",
    "module": "wallet",
    "controller": "UserWalletController",
    "handler": "deposit",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "DepositDto",
      "fields": []
    },
    "source": "src/modules/wallet/presentation/controllers/user-wallet.controller.ts",
    "line": 28
  },
  {
    "id": "GET_api_v1_v1_wallet_me",
    "method": "GET",
    "path": "/api/v1/v1/wallet/me",
    "route": "/v1/wallet/me",
    "summary": "GetMyWallet",
    "description": "",
    "module": "wallet",
    "controller": "UserWalletController",
    "handler": "getMyWallet",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/user-wallet.controller.ts",
    "line": 22
  },
  {
    "id": "GET_api_v1_v1_wallet_transactions",
    "method": "GET",
    "path": "/api/v1/v1/wallet/transactions",
    "route": "/v1/wallet/transactions",
    "summary": "GetTransactions",
    "description": "",
    "module": "wallet",
    "controller": "UserWalletController",
    "handler": "getTransactions",
    "tag": "Wallet",
    "auth": "JWT",
    "collections": [
      "wallets",
      "transactions"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/wallet/presentation/controllers/user-wallet.controller.ts",
    "line": 34
  },
  {
    "id": "POST_api_v1_vehicles",
    "method": "POST",
    "path": "/api/v1/vehicles",
    "route": "/vehicles",
    "summary": "Add a new vehicle for the user",
    "description": "Vehicle created successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "createVehicle",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [],
    "query": [],
    "body": {
      "dto": "CreateVehicleDto",
      "fields": []
    },
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 69
  },
  {
    "id": "DELETE_api_v1_vehicles_id",
    "method": "DELETE",
    "path": "/api/v1/vehicles/:id",
    "route": "/vehicles/:id",
    "summary": "Delete a vehicle",
    "description": "Vehicle deleted successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "deleteVehicle",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 149
  },
  {
    "id": "GET_api_v1_vehicles_id",
    "method": "GET",
    "path": "/api/v1/vehicles/:id",
    "route": "/vehicles/:id",
    "summary": "Get vehicle details by ID",
    "description": "Vehicle details",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "getVehicleById",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 119
  },
  {
    "id": "PATCH_api_v1_vehicles_id",
    "method": "PATCH",
    "path": "/api/v1/vehicles/:id",
    "route": "/vehicles/:id",
    "summary": "Update vehicle details",
    "description": "Vehicle updated successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "updateVehicle",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 132
  },
  {
    "id": "GET_api_v1_vehicles_id_maintenance",
    "method": "GET",
    "path": "/api/v1/vehicles/:id/maintenance",
    "route": "/vehicles/:id/maintenance",
    "summary": "Get all maintenance records for a vehicle",
    "description": "Page number",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "getVehicleMaintenance",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "maintenancerecords"
    ],
    "params": [
      "id"
    ],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 197
  },
  {
    "id": "POST_api_v1_vehicles_id_maintenance",
    "method": "POST",
    "path": "/api/v1/vehicles/:id/maintenance",
    "route": "/vehicles/:id/maintenance",
    "summary": "Add a maintenance record for a vehicle",
    "description": "Maintenance record created successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "createMaintenanceRecord",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "maintenancerecords"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 179
  },
  {
    "id": "GET_api_v1_vehicles_id_reminders",
    "method": "GET",
    "path": "/api/v1/vehicles/:id/reminders",
    "route": "/vehicles/:id/reminders",
    "summary": "Get all maintenance reminders for a vehicle",
    "description": "Page number",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "getVehicleReminders",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "vehiclereminders"
    ],
    "params": [
      "id"
    ],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 277
  },
  {
    "id": "POST_api_v1_vehicles_id_reminders",
    "method": "POST",
    "path": "/api/v1/vehicles/:id/reminders",
    "route": "/vehicles/:id/reminders",
    "summary": "Add a maintenance reminder for a vehicle",
    "description": "Reminder created successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "createReminder",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "vehiclereminders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 258
  },
  {
    "id": "PATCH_api_v1_vehicles_id_set_default",
    "method": "PATCH",
    "path": "/api/v1/vehicles/:id/set-default",
    "route": "/vehicles/:id/set-default",
    "summary": "Set vehicle as default",
    "description": "Vehicle set as default successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "setDefaultVehicle",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 164
  },
  {
    "id": "DELETE_api_v1_vehicles_maintenance_id",
    "method": "DELETE",
    "path": "/api/v1/vehicles/maintenance/:id",
    "route": "/vehicles/maintenance/:id",
    "summary": "Delete a maintenance record",
    "description": "Maintenance record deleted successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "deleteMaintenanceRecord",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "maintenancerecords"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 239
  },
  {
    "id": "PATCH_api_v1_vehicles_maintenance_id",
    "method": "PATCH",
    "path": "/api/v1/vehicles/maintenance/:id",
    "route": "/vehicles/maintenance/:id",
    "summary": "Update a maintenance record",
    "description": "Maintenance record updated successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "updateMaintenanceRecord",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "maintenancerecords"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 222
  },
  {
    "id": "GET_api_v1_vehicles_my",
    "method": "GET",
    "path": "/api/v1/vehicles/my",
    "route": "/vehicles/my",
    "summary": "Get all vehicles for the authenticated user",
    "description": "Page number",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "getMyVehicles",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [],
    "query": [
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 82
  },
  {
    "id": "DELETE_api_v1_vehicles_reminders_id",
    "method": "DELETE",
    "path": "/api/v1/vehicles/reminders/:id",
    "route": "/vehicles/reminders/:id",
    "summary": "Delete a maintenance reminder",
    "description": "Reminder deleted successfully",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "deleteReminder",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles",
      "vehiclereminders"
    ],
    "params": [
      "id"
    ],
    "query": [],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 302
  },
  {
    "id": "GET_api_v1_vehicles_search",
    "method": "GET",
    "path": "/api/v1/vehicles/search",
    "route": "/vehicles/search",
    "summary": "Search vehicles by brand, model, or plate number",
    "description": "Search query",
    "module": "vehicles",
    "controller": "VehiclesController",
    "handler": "searchVehicles",
    "tag": "Vehicles",
    "auth": "JWT",
    "collections": [
      "vehicles"
    ],
    "params": [],
    "query": [
      {
        "name": "q",
        "required": true
      },
      {
        "name": "page",
        "required": false
      },
      {
        "name": "limit",
        "required": false
      }
    ],
    "body": null,
    "source": "src/modules/vehicles/presentation/controllers/vehicles.controller.ts",
    "line": 99
  },
  {
    "id": "GET_api_v1_whatsapp_login",
    "method": "GET",
    "path": "/api/v1/whatsapp/login",
    "route": "/whatsapp/login",
    "summary": "LoginPage",
    "description": "",
    "module": "whatsapp",
    "controller": "WhatsAppController",
    "handler": "loginPage",
    "tag": "WhatsApp",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/whatsapp/presentation/controllers/whatsapp.controller.ts",
    "line": 32
  },
  {
    "id": "GET_api_v1_whatsapp_qr",
    "method": "GET",
    "path": "/api/v1/whatsapp/qr",
    "route": "/whatsapp/qr",
    "summary": "Get QR Code for WhatsApp login",
    "description": "",
    "module": "whatsapp",
    "controller": "WhatsAppController",
    "handler": "getQRCode",
    "tag": "WhatsApp",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/whatsapp/presentation/controllers/whatsapp.controller.ts",
    "line": 78
  },
  {
    "id": "POST_api_v1_whatsapp_restart",
    "method": "POST",
    "path": "/api/v1/whatsapp/restart",
    "route": "/whatsapp/restart",
    "summary": "Restart WhatsApp client",
    "description": "",
    "module": "whatsapp",
    "controller": "WhatsAppController",
    "handler": "restart",
    "tag": "WhatsApp",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/whatsapp/presentation/controllers/whatsapp.controller.ts",
    "line": 174
  },
  {
    "id": "POST_api_v1_whatsapp_send_message",
    "method": "POST",
    "path": "/api/v1/whatsapp/send-message",
    "route": "/whatsapp/send-message",
    "summary": "Send WhatsApp message (Protected)",
    "description": "",
    "module": "whatsapp",
    "controller": "WhatsAppController",
    "handler": "sendMessage",
    "tag": "WhatsApp",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/whatsapp/presentation/controllers/whatsapp.controller.ts",
    "line": 137
  },
  {
    "id": "GET_api_v1_whatsapp_status",
    "method": "GET",
    "path": "/api/v1/whatsapp/status",
    "route": "/whatsapp/status",
    "summary": "Check WhatsApp connection status",
    "description": "",
    "module": "whatsapp",
    "controller": "WhatsAppController",
    "handler": "getStatus",
    "tag": "WhatsApp",
    "auth": "Public",
    "collections": [
      "users",
      "pending_registrations"
    ],
    "params": [],
    "query": [],
    "body": null,
    "source": "src/modules/whatsapp/presentation/controllers/whatsapp.controller.ts",
    "line": 114
  }
];
