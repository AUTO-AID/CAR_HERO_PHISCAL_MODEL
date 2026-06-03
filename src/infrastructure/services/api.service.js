const BACKEND_BASE_URL = "http://localhost:3001";
const SCHEMAS_URL = `${BACKEND_BASE_URL}/api/v1/system/schemas`;
const SWAGGER_JSON_URL = `${BACKEND_BASE_URL}/api-docs-json`;

/**
 * Fetch mongoose schemas from the live backend
 * @returns {Promise<Array>} List of schemas
 */
export async function fetchLiveSchemas() {
  const response = await fetch(SCHEMAS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch live schemas: ${response.statusText}`);
  }
  return await response.json();
}

/**
 * Fetch OpenAPI Swagger specification and convert it to EndpointsSection format
 * @param {Array<string>} collectionNames - List of known collections for mapping
 * @returns {Promise<Array>} List of endpoints
 */
export async function fetchLiveEndpoints(collectionNames) {
  const response = await fetch(SWAGGER_JSON_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch live OpenAPI: ${response.statusText}`);
  }
  const openapi = await response.json();
  return parseOpenApi(openapi, collectionNames);
}

/**
 * Parse OpenAPI JSON into target dashboard format
 */
function parseOpenApi(openapi, collectionNames) {
  const endpoints = [];
  if (!openapi || !openapi.paths) return endpoints;

  for (const [pathKey, pathItem] of Object.entries(openapi.paths)) {
    for (const [methodKey, operation] of Object.entries(pathItem)) {
      const method = methodKey.toUpperCase();
      const summary = operation.summary || "لا يوجد وصف متاح";
      const description = operation.description || "";
      const operationId = operation.operationId || "";
      
      const controllerClass = operationId.includes("_") 
        ? operationId.split("_")[0] 
        : "Controller";
      const handlerMethod = operationId.includes("_") 
        ? operationId.split("_")[1] 
        : "handler";
      
      const tag = operation.tags && operation.tags.length ? operation.tags[0] : "General";
      const isSecured = operation.security && operation.security.length > 0;
      const auth = isSecured ? "JWT" : "Public";

      const params = [];
      const query = [];
      if (operation.parameters) {
        operation.parameters.forEach((p) => {
          if (p.in === "path") params.push(p.name);
          if (p.in === "query") query.push({ name: p.name, required: p.required || false });
        });
      }

      let body = null;
      if (operation.requestBody) {
        body = { dto: `${controllerClass}Dto`, fields: [] };
      }

      // Match collections based on path containment or special logic
      const matchedCollections = collectionNames.filter((c) => {
        const cleanPath = pathKey.toLowerCase();
        const cleanCollection = c.toLowerCase();
        
        if (cleanPath.includes(`/${cleanCollection}`)) return true;
        // Singular fallback mapping
        if (cleanCollection === "users" && cleanPath.includes("/user")) return true;
        if (cleanCollection === "providers" && cleanPath.includes("/provider")) return true;
        if (cleanCollection === "vehicles" && cleanPath.includes("/vehicle")) return true;
        if (cleanCollection === "orders" && cleanPath.includes("/order")) return true;
        if (cleanCollection === "wallets" && cleanPath.includes("/wallet")) return true;
        if (cleanCollection === "chats" && cleanPath.includes("/chat")) return true;
        return false;
      });

      // Default to "system" if no matching collection
      const finalCollections = matchedCollections.length > 0 ? matchedCollections : ["system"];

      endpoints.push({
        id: `${method}_${pathKey.replace(/\//g, "_").replace(/:/g, "")}`,
        method,
        path: pathKey,
        summary,
        description,
        module: tag.toLowerCase(),
        controller: controllerClass,
        handler: handlerMethod,
        tag,
        auth,
        collections: finalCollections,
        params,
        query,
        body,
        source: `src/modules/${tag.toLowerCase()}/presentation/controllers/${controllerClass.toLowerCase().replace("controller", "")}.controller.ts`,
        line: 1,
      });
    }
  }

  return endpoints;
}
