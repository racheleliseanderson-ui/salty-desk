import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Lock } from "lucide-react";
import { BOUNDARY, STOREFRONT } from "@/lib/catalog";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy boundary · ${STOREFRONT.name}` },
      {
        name: "description",
        content:
          "Shared privacy and trust boundary for Salty Desk tools — local-first, first-party, educational only.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Back to desk
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
        Shared privacy boundary
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        Local-first · first-party · no forced account
      </h1>
      <p className="mt-3 text-base leading-relaxed text-fg-muted">
        {STOREFRONT.name} is a storefront for educational planning tools. Core tools do not
        require an account. Data movement between apps is explicit. Dietary and allergen fields
        are planning filters — never safety guarantees.
      </p>

      <ul className="mt-8 space-y-3">
        {BOUNDARY.map((line) => (
          <li
            key={line}
            className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-3 text-sm text-fg-muted"
          >
            <Lock className="mt-0.5 size-4 shrink-0 text-bordeaux-soft" aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 space-y-2 text-sm text-fg-muted">
        <p>
          Full legal policies live on Salt Notes:{" "}
          <a
            href={`${STOREFRONT.blog}/privacy/`}
            className="text-champagne hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          ,{" "}
          <a
            href={`${STOREFRONT.blog}/terms/`}
            className="text-champagne hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          ,{" "}
          <a
            href={`${STOREFRONT.blog}/editorial-food-beverage-disclaimer/`}
            className="text-champagne hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Food & beverage disclaimer
          </a>
          .
        </p>
      </div>
    </main>
  );
}
