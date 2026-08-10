/**
 * Dynamic Nitro storage mounts — salty-desk.
 * CONFIG_VERSION: nitro-fluid-v1.2.1
 *
 * Base `cache` is memory (vite/nitro storage). On Vercel, upgrade to
 * vercel-runtime-cache. Optional redis when env is present.
 *
 * Nitro 3: auto-imports OFF — explicit imports from nitro / nitro/storage.
 */
import { definePlugin } from "nitro";
import { useStorage } from "nitro/storage";

async function mountStorageAdapters() {
  const storage = useStorage();

  if (process.env.VERCEL) {
    try {
      const runtimeCache = await import(
        "unstorage/drivers/vercel-runtime-cache"
      );
      storage.mount(
        "cache",
        runtimeCache.default({
          base: "salty-desk",
          ttl: 300,
          tags: ["salty-desk", "v1.2"],
        }),
      );
    } catch (err) {
      console.warn(
        "[salty-desk] vercel-runtime-cache unavailable; keeping memory cache:",
        err,
      );
    }
  }

  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const redisUrl = process.env.REDIS_URL;

  if (upstashUrl && upstashToken) {
    try {
      const mod = await import("unstorage/drivers/upstash").catch(() => null);
      if (mod?.default) {
        storage.mount(
          "redis",
          mod.default({
            url: upstashUrl,
            token: upstashToken,
            base: "salty-desk",
          }),
        );
      } else if (redisUrl) {
        const redis = await import("unstorage/drivers/redis");
        storage.mount(
          "redis",
          redis.default({ url: redisUrl, base: "salty-desk", ttl: 600 }),
        );
      }
    } catch (err) {
      console.warn("[salty-desk] redis mount skipped:", err);
    }
  } else if (redisUrl) {
    try {
      const redis = await import("unstorage/drivers/redis");
      storage.mount(
        "redis",
        redis.default({ url: redisUrl, base: "salty-desk", ttl: 600 }),
      );
    } catch (err) {
      console.warn("[salty-desk] redis mount skipped:", err);
    }
  }
}

export default definePlugin(() => {
  void mountStorageAdapters();
});
