/**
 * GET /api/health — liveness probe (no-store).
 * CONFIG_VERSION: nitro-fluid-v1.2.1
 * Nitro 3: auto-imports OFF — explicit h3 imports.
 */
import { defineEventHandler, setHeader } from "h3";
import { cacheMounts } from "../utils/cache";

export default defineEventHandler(async (event) => {
  setHeader(event, "cache-control", "no-store");
  setHeader(event, "access-control-allow-origin", "*");

  const mounts = await cacheMounts();

  return {
    ok: true,
    service: "salty-desk",
    version: "1.0.0",
    configVersion: "nitro-fluid-v1.2.1",
    time: new Date().toISOString(),
    storage: { mounts },
  };
});
