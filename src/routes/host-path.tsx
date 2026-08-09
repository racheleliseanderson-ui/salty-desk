import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HOST_PATH, STOREFRONT, appById } from "@/lib/catalog";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/host-path")({
  component: HostPathPage,
  head: () => ({
    meta: [
      { title: `Host Path · ${STOREFRONT.name}` },
      {
        name: "description",
        content:
          "Guided sequence: Menu Builder → Occasion OS → Restaurant Intelligence. Explicit handoffs only.",
      },
    ],
  }),
});

function HostPathPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Back to desk
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-champagne">
        Guided sequence
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        Host Path
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
        Three tools, in order when hosting is the job. Each step produces a packet you can
        choose to carry forward — nothing moves until you do. Dining out is an intentional
        exit, not a failure of the path.
      </p>

      <ol className="mt-10 space-y-4">
        {HOST_PATH.map((step) => {
          const app = appById(step.appId);
          if (!app) return null;
          return (
            <li
              key={step.step}
              className="rounded-[var(--radius-xl)] border border-border bg-surface p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-sm text-bordeaux-soft">{step.step}</span>
                    <Badge tone={app.status === "Ready" ? "ready" : "preview"}>
                      {app.status}
                    </Badge>
                    <span className="font-mono text-[11px] text-fg-subtle">{app.code}</span>
                  </div>
                  <h2 className="mt-2 font-display text-xl font-medium text-fg">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-champagne">{app.name}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
                    {step.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-sm)] bg-bordeaux px-4 text-sm font-medium text-ivory hover:bg-bordeaux-hover"
                  >
                    Open {app.name.split(" ")[0]}
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={app.detailsPath}
                    className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border-strong px-4 text-sm font-medium text-fg hover:bg-surface-2"
                  >
                    Desk card
                  </a>
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {app.population.slice(0, 3).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[var(--radius-md)] border border-border bg-bg/40 px-3 py-2"
                  >
                    <p className="font-mono text-sm text-fg">{s.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-fg-subtle">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 rounded-[var(--radius-xl)] border border-border bg-surface p-5">
        <h2 className="font-display text-lg font-medium text-fg">After the sequence</h2>
        <p className="mt-2 text-sm text-fg-muted">
          Use the handoff map to see what can move between tools. Restaurant Intelligence stays
          out of the mandatory path until dining out is the honest answer.
        </p>
        <Link
          to="/handoffs"
          className="mt-4 inline-flex text-sm font-medium text-champagne hover:underline"
        >
          View handoff map
        </Link>
      </div>
    </main>
  );
}
