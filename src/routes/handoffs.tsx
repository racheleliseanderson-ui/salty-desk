import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HANDOFFS, STOREFRONT } from "@/lib/catalog";

export const Route = createFileRoute("/handoffs")({
  component: HandoffsPage,
  head: () => ({
    meta: [
      { title: `Handoffs · ${STOREFRONT.name}` },
      {
        name: "description",
        content:
          "Explicit handoff map for Salty & Clever tools. Results move only when you choose.",
      },
    ],
  }),
});

function HandoffsPage() {
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
        Explicit only
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        Handoff map
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
        Results move between tools only when you choose. Nothing is automatic or server-side
        across the fleet. Vanity is control; vice is chaos without a packet.
      </p>

      <div className="mt-10 rounded-[var(--radius-2xl)] border border-border bg-surface p-6 sm:p-8">
        <h2 className="font-display text-xl font-medium text-fg">
          Carry results forward — never silently
        </h2>
        <p className="mt-2 text-sm text-fg-muted">
          Tools stay independent. When you choose, a public-safe packet can move downstream.
          Nothing is uploaded; nothing is inferred across apps without your action.
        </p>

        <ul className="mt-8 space-y-4">
          {HANDOFFS.map((h) => (
            <li
              key={`${h.fromCode}-${h.toCode}`}
              className="grid gap-3 rounded-[var(--radius-lg)] border border-border bg-bg/40 p-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center"
            >
              <div>
                <p className="font-medium text-fg">{h.from}</p>
                <p className="font-mono text-xs text-fg-subtle">{h.fromCode}</p>
                <p className="mt-2 text-sm text-fg-muted">{h.packet}</p>
                <p className="mt-1 text-xs text-fg-subtle">{h.mode}</p>
              </div>
              <div className="flex items-center justify-center text-bordeaux-soft">
                <ArrowRight className="size-5" aria-hidden />
                {h.optional ? (
                  <span className="ml-2 text-xs text-champagne">Optional</span>
                ) : (
                  <span className="ml-2 text-xs text-fg-subtle">Required path</span>
                )}
              </div>
              <div className="sm:text-right">
                <p className="font-medium text-fg">{h.to}</p>
                <p className="font-mono text-xs text-fg-subtle">{h.toCode}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
