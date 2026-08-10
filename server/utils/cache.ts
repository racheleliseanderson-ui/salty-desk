/**
 * Thin wrapper over Nitro useStorage("cache").
 * CONFIG_VERSION: nitro-fluid-v1.1
 * Nitro 3: explicit imports.
 */
import { useStorage } from "nitro/storage";

export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const v = await useStorage("cache").getItem<T>(key);
    return (v as T) ?? null;
  } catch {
    return null;
  }
}

export async function cacheSet<T>(
  key: string,
  value: T,
  ttlSeconds = 300,
): Promise<void> {
  try {
    await useStorage("cache").setItem(key, value as never, {
      ttl: ttlSeconds,
    } as never);
  } catch (err) {
    console.warn("[salty-desk] cache set failed:", key, err);
  }
}

export async function cacheMounts(): Promise<string[]> {
  try {
    const known = ["cache", "redis", "blob"] as const;
    const out: string[] = [];
    for (const m of known) {
      try {
        await useStorage(m).hasItem("__probe__");
        out.push(m);
      } catch {
        // not mounted
      }
    }
    return out.length ? out : ["cache"];
  } catch {
    return ["cache"];
  }
}
