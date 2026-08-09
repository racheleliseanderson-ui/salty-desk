import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "ready" | "preview" | "brass" | "wine" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tone === "default" && "border-border bg-surface-2 text-fg-muted",
        tone === "ready" && "border-ok/30 bg-ok/15 text-ok",
        tone === "preview" && "border-brass/30 bg-brass/15 text-champagne",
        tone === "brass" && "border-brass/30 bg-brass/15 text-champagne",
        tone === "wine" && "border-bordeaux/35 bg-bordeaux/20 text-bordeaux-soft",
        tone === "muted" && "border-border bg-transparent text-fg-subtle",
        className,
      )}
    >
      {children}
    </span>
  );
}
