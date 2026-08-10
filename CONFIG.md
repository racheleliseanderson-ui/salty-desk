# Salty Desk deploy config

**CONFIG_VERSION:** `nitro-fluid-v1.1`

## Layers

| Layer | Files |
| --- | --- |
| Build | `vite.config.ts`, `scripts/vercel-build.mjs`, `package.json` |
| Platform | `vercel.json` (Fluid, regions, headers) |
| API probes | `server/api/health.get.ts`, `version.get.ts` |
| Storage | Nitro memory `cache` mount (vite) |

## Rules (fleet baseline)

- Nitro only on `command === "build"` (single-port 8080 dev)
- Nitro 3: explicit imports from `h3` / `nitro` / `nitro/storage`
- Public marketing pages may use ISR; `/api/**` is `no-store`
- Fluid explicit: `"fluid": true`
- Region: `iad1`

## Changelog

### nitro-fluid-v1.1

- Fluid + region pin
- Security headers (preserve saltnotes.blog frame-ancestors)
- ISR for storefront routes
- Health + version probes
- vercel-build.mjs reliable entry
