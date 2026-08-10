/**
 * GET /api/version — deploy/config identity (no-store).
 * CONFIG_VERSION: nitro-fluid-v1.2.1
 */
import { defineEventHandler, setHeader } from "h3";

export default defineEventHandler((event) => {
  setHeader(event, "cache-control", "no-store");
  setHeader(event, "access-control-allow-origin", "*");
  return {
    service: "salty-desk",
    version: "1.0.0",
    configVersion: "nitro-fluid-v1.2.1",
    stack: "tanstack-start/nitro-vercel-fluid",
    features: {
      fluid: true,
      storageCache: true,
    },
    node: process.versions.node,
  };
});
