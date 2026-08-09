import { ArrowUpRight, CircleCheck } from "lucide-react";
import type { AppCard as AppCardType } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AppCard({ app, className }: { app: AppCardType; className?: string }) {
  return (
    <article
      id={`app-${app.id}`}
      className={cn(
        "fleet-card group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface shadow-panel",
        className,
      )}
    >
      {app.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
          <img
            src={app.image}
            alt={app.imageAlt ?? app.name}
            className="size-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[color-mix(in_oklab,var(--color-surface)_25%,transparent)] to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center gap-2">
            <Badge tone={app.status === "Ready" ? "ready" : "preview"} className="fleet-sheen">
              {app.status}
            </Badge>
            {app.badges.slice(0, 1).map((b) => (
              <Badge key={b} tone="muted">
                {b}
              </Badge>
            ))}
            <span className="ml-auto font-mono text-[11px] tracking-wide text-ivory/80">
              {app.code}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2 px-5 pt-5 sm:px-6 sm:pt-6">
          <Badge tone={app.status === "Ready" ? "ready" : "preview"}>{app.status}</Badge>
          {app.badges.slice(0, 2).map((b) => (
            <Badge key={b} tone="muted">
              {b}
            </Badge>
          ))}
          <span className="ml-auto font-mono text-[11px] tracking-wide text-fg-subtle">
            {app.code}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-medium tracking-tight text-fg sm:text-2xl">
          {app.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-champagne">{app.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{app.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {app.population.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-md)] border border-border bg-bg/50 px-2.5 py-2 transition-colors duration-200 group-hover:border-[color-mix(in_oklab,var(--color-champagne)_30%,var(--color-border))]"
            >
              <p className="font-mono text-sm font-medium tabular-nums text-fg">{stat.value}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-fg-subtle">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-5 space-y-1.5">
          {app.intelligence.slice(0, 4).map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-fg-muted">
              <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-bordeaux-soft" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs leading-relaxed text-fg-subtle">
          <span className="font-medium text-fg-muted">Does not: </span>
          {app.doesNot.join(" · ")}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <a
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-bordeaux px-4 text-sm font-medium text-ivory transition-colors hover:bg-bordeaux-hover"
          >
            Launch tool
            <ArrowUpRight className="size-4 fleet-arrow" aria-hidden />
          </a>
          <a
            href={app.detailsPath}
            className="inline-flex h-10 items-center justify-center rounded-[var(--radius-sm)] border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
          >
            Desk card
          </a>
        </div>
      </div>
    </article>
  );
}
