import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { APPS, FLEET_STATS, STOREFRONT } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/intelligence")({
  component: IntelligencePage,
  head: () => ({
    meta: [
      { title: `Intelligence · ${STOREFRONT.name}` },
      {
        name: "description",
        content:
          "Fleet intelligence and data population for Occasion Operating System and Restaurant Intelligence — same altitude on every tool.",
      },
    ],
  }),
});

function IntelligencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Back to desk
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
        Fleet intelligence
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        Same altitude. Full population.
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
        Every app on this desk is first-class: real engine contracts, real case-file counts,
        real hard stops. No thin marketing shells. No uneven “beta” feeling between tools.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {FLEET_STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-[var(--radius-lg)] border border-border bg-surface px-3 py-3"
          >
            <p className="font-mono text-xl font-medium tabular-nums text-fg">{s.value}</p>
            <p className="mt-1 text-xs font-medium text-fg-muted">{s.label}</p>
            <p className="text-[11px] text-fg-subtle">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        {APPS.map((app) => (
          <article
            key={app.id}
            className="rounded-[var(--radius-2xl)] border border-border bg-surface p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={app.status === "Ready" ? "ready" : "preview"}>{app.status}</Badge>
              <span className="font-mono text-[11px] text-fg-subtle">{app.code}</span>
              {app.handoffContract ? (
                <Badge tone="wine">{app.handoffContract}</Badge>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-medium text-fg">{app.name}</h2>
                <p className="mt-1 text-sm text-champagne">{app.tagline}</p>
              </div>
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-sm)] bg-bordeaux px-4 text-sm font-medium text-ivory hover:bg-bordeaux-hover"
              >
                Launch
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                  Intelligence
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-fg-muted">
                  {app.intelligence.map((line) => (
                    <li key={line} className="leading-relaxed">
                      · {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
                  Population
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {app.population.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[var(--radius-md)] border border-border bg-bg/40 px-2.5 py-2"
                    >
                      <p className="font-mono text-sm text-fg">{s.value}</p>
                      <p className="text-[11px] uppercase tracking-wider text-fg-subtle">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-fg-subtle">
                  <span className="font-medium text-fg-muted">Does not: </span>
                  {app.doesNot.join(" · ")}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
