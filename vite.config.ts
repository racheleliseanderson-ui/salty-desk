import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

/**
 * Salty Desk — CONFIG_VERSION: nitro-fluid-v1.1
 * TanStack Start + Nitro Vercel Fluid
 * - Dev: single port 0.0.0.0:8080 (nitro NOT loaded)
 * - Prod: nitro({ preset: "vercel" }) only on build
 */
export default defineConfig(({ command }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    ...(command === "build"
      ? [
          nitro({
            preset: "vercel",
            serverDir: "server",
            imports: {},
            storage: {
              cache: {
                driver: "memory",
                base: "salty-desk",
              },
            },
            devStorage: {
              cache: {
                driver: "fs",
                base: "./.data/cache",
              },
            },
            vercel: {
              functions: {
                runtime: "nodejs22.x",
                regions: ["iad1"],
                maxDuration: 15,
                memory: 512,
                supportsResponseStreaming: true,
              },
              functionRules: {
                "/api/**": {
                  maxDuration: 10,
                  memory: 256,
                },
              },
            },
            routeRules: {
              "/": { isr: 600 },
              "/handoffs": { isr: 600 },
              "/host-path": { isr: 600 },
              "/intelligence": { isr: 600 },
              "/privacy": { isr: 3600 },
              "/api/health": {
                headers: {
                  "cache-control": "no-store",
                  "access-control-allow-origin": "*",
                },
              },
              "/api/version": {
                headers: {
                  "cache-control": "no-store",
                  "access-control-allow-origin": "*",
                },
              },
              "/assets/**": {
                headers: {
                  "cache-control": "public, max-age=31536000, immutable",
                },
              },
            },
          }),
        ]
      : []),
    viteReact(),
  ],
}));
