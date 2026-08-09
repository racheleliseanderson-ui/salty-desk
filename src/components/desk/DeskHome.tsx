import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Lock,
  Map,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { AppCard } from "@/components/desk/AppCard";
import {
  APPS,
  BOUNDARY,
  FLEET_STATS,
  HANDOFFS,
  HOST_PATH,
  STOREFRONT,
  SUITES,
  appById,
} from "@/lib/catalog";

export function DeskHome() {
  return (
    <main className="hero-wash">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-champagne/30 bg-champagne/15 px-2.5 py-0.5 text-xs font-medium tracking-wide text-champagne-soft">
              {STOREFRONT.tagline}
            </div>
            <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-[3.25rem]">
              {STOREFRONT.name}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {STOREFRONT.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/host-path"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-bordeaux px-7 text-base font-medium text-ivory transition-colors hover:bg-bordeaux-hover"
              >
                Start Host Path
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/handoffs"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-border-strong bg-transparent px-7 text-base font-medium text-fg transition-colors hover:bg-surface-2"
              >
                <Map className="size-4" aria-hidden />
                Handoff map
              </Link>
            </div>
            <p className="text-xs text-fg-subtle">{STOREFRONT.constraints}</p>
          </div>

          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-border shadow-panel">
            <div className="aspect-[4/3] bg-gradient-to-br from-heritage via-ink-deep to-burnished p-6 sm:p-8">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-champagne">
                    <Sparkles className="size-3.5" aria-hidden />
                    {STOREFRONT.attitude}
                  </span>
                  <span className="font-mono text-[11px] text-fg-subtle">FLEET · 3</span>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium text-ivory sm:text-3xl">
                    Sharp tools for the night you meant to host — not the one that owns you.
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
                    Same intelligence depth on every card. Same population honesty. Same
                    explicit handoffs. No vanity without structure; no vice without a plan.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {FLEET_STATS.slice(0, 3).map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[var(--radius-md)] border border-white/10 bg-black/20 px-2.5 py-2 backdrop-blur-sm"
                    >
                      <p className="font-mono text-sm font-medium text-ivory">{s.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-fg-subtle">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suites + app cards */}
      <section className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
        {SUITES.map((suite) => {
          const apps = APPS.filter((a) => a.suite === suite.id);
          return (
            <div key={suite.id} className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
                    {suite.label}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">
                    {suite.title}
                  </h2>
                </div>
                {suite.id === "host" ? (
                  <UtensilsCrossed
                    className="hidden size-8 text-fg-subtle sm:block"
                    aria-hidden
                  />
                ) : (
                  <Map className="hidden size-8 text-fg-subtle sm:block" aria-hidden />
                )}
              </div>
              <p className="max-w-2xl text-sm text-fg-muted">{suite.blurb}</p>
              <div
                className={
                  apps.length === 1
                    ? "grid gap-4 lg:grid-cols-1 lg:max-w-2xl"
                    : "grid gap-4 sm:grid-cols-2"
                }
              >
                {apps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Guided path */}
        <div className="rounded-[var(--radius-2xl)] border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-champagne">
                Optional guided path
              </p>
              <h2 className="mt-1 font-display text-2xl font-medium tracking-tight text-fg">
                Host Path sequence
              </h2>
              <p className="mt-2 max-w-xl text-sm text-fg-muted">
                Menu Builder → Occasion OS → Restaurant Intelligence when dining wins. Tools
                stay independent — this path sequences the most common host workflow.
              </p>
            </div>
            <Link
              to="/host-path"
              className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-sm)] bg-champagne px-4 text-sm font-medium text-ink-deep hover:bg-champagne-soft"
            >
              Open Host Path
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {HOST_PATH.map((step) => {
              const app = appById(step.appId);
              return (
                <li
                  key={step.step}
                  className="rounded-[var(--radius-lg)] border border-border bg-bg/40 p-4"
                >
                  <p className="font-mono text-xs text-bordeaux-soft">
                    {step.step}. {app?.code}
                  </p>
                  <p className="mt-2 font-medium text-fg">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{step.summary}</p>
                  <p className="mt-3 text-xs text-fg-subtle">Reader chooses when to carry results</p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Intelligence surface */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--radius-2xl)] border border-border bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
              Intelligence surface · fleet
            </p>
            <h2 className="mt-1 font-display text-xl font-medium text-fg">
              Context population — same altitude on every tool
            </h2>
            <p className="mt-2 text-sm text-fg-muted">
              Storefront framing only. Live scoring, case files, and freshness live inside each
              app. Every card here carries real population counts and contract versions.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {FLEET_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[var(--radius-md)] border border-border bg-bg/50 px-3 py-2.5"
                >
                  <p className="font-mono text-lg font-medium tabular-nums text-fg">{s.value}</p>
                  <p className="text-xs font-medium text-fg-muted">{s.label}</p>
                  <p className="mt-0.5 text-[11px] text-fg-subtle">{s.note}</p>
                </div>
              ))}
            </div>
            <Link
              to="/intelligence"
              className="mt-5 inline-flex text-sm font-medium text-champagne hover:underline"
            >
              Full intelligence view
            </Link>
          </div>

          <div className="rounded-[var(--radius-2xl)] border border-border bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-champagne">
              Explicit handoffs only
            </p>
            <h2 className="mt-1 font-display text-xl font-medium text-fg">
              Carry results forward — never silently
            </h2>
            <p className="mt-2 text-sm text-fg-muted">
              Tools stay independent. When you choose, a public-safe packet can move
              downstream. Nothing is uploaded; nothing is inferred across apps without your
              action.
            </p>
            <ul className="mt-5 space-y-3">
              {HANDOFFS.map((h) => (
                <li
                  key={`${h.fromCode}-${h.toCode}`}
                  className="rounded-[var(--radius-md)] border border-border bg-bg/40 px-3 py-2.5 text-sm"
                >
                  <p className="font-medium text-fg">
                    {h.from}{" "}
                    <span className="font-mono text-xs text-fg-subtle">{h.fromCode}</span>
                    <span className="mx-1.5 text-fg-subtle">→</span>
                    {h.to}{" "}
                    <span className="font-mono text-xs text-fg-subtle">{h.toCode}</span>
                    {h.optional ? (
                      <span className="ml-2 text-xs text-champagne">Optional</span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs text-fg-muted">{h.packet}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/handoffs"
              className="mt-5 inline-flex text-sm font-medium text-champagne hover:underline"
            >
              Open handoff map
            </Link>
          </div>
        </div>

        {/* Privacy */}
        <div className="rounded-[var(--radius-2xl)] border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-bordeaux/20 text-bordeaux-soft ring-1 ring-bordeaux/30">
              <ShieldCheck className="size-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
                Shared privacy boundary
              </p>
              <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">
                Local-first · first-party · no forced account
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {BOUNDARY.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-fg-muted">
                    <Lock className="mt-0.5 size-3.5 shrink-0 text-fg-subtle" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/privacy"
                className="mt-4 inline-flex h-9 items-center rounded-[var(--radius-sm)] border border-border-strong px-3 text-xs font-medium text-fg hover:bg-surface-2"
              >
                Read the boundary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
