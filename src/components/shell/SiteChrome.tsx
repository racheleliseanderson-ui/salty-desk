import { Link } from "@tanstack/react-router";
import { Menu, Wine, X } from "lucide-react";
import { useState } from "react";
import { STOREFRONT } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Desk" },
  { to: "/host-path", label: "Host Path" },
  { to: "/handoffs", label: "Handoffs" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/privacy", label: "Privacy" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bordeaux/20 text-bordeaux-soft ring-1 ring-bordeaux/30">
            <Wine className="size-4" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight text-fg">
              {STOREFRONT.name}
            </span>
            <span className="hidden truncate text-[11px] text-fg-subtle sm:block">
              {STOREFRONT.brand} · {STOREFRONT.attitude}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg [&.active]:bg-surface-2 [&.active]:text-fg"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/host-path"
            className="hidden h-9 items-center rounded-[var(--radius-sm)] bg-champagne px-3 text-xs font-medium text-ink-deep transition-colors hover:bg-champagne-soft sm:inline-flex"
          >
            Start here
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-fg-muted hover:bg-surface-2 hover:text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-bg px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-[var(--radius-sm)] px-3 py-3 text-sm text-fg-muted hover:bg-surface-2 hover:text-fg [&.active]:bg-surface-2 [&.active]:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/host-path"
                className="mt-1 block rounded-[var(--radius-sm)] bg-bordeaux px-3 py-3 text-center text-sm font-medium text-ivory"
                onClick={() => setOpen(false)}
              >
                Start Host Path
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="max-w-sm">
          <p className="text-sm font-semibold tracking-tight text-fg">
            Education only · {STOREFRONT.name} · {STOREFRONT.brand}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {STOREFRONT.tagline}. {STOREFRONT.constraints}.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-fg-subtle">
            Sold and supported by {STOREFRONT.company} when purchases are enabled.
          </p>
          <a
            href={STOREFRONT.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-champagne hover:underline"
          >
            Back to Salt Notes
          </a>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
              Suite
            </span>
            <Link to="/host-path" className="text-fg-muted hover:text-fg">
              Host Path
            </Link>
            <Link to="/handoffs" className="text-fg-muted hover:text-fg">
              Handoffs
            </Link>
            <Link to="/intelligence" className="text-fg-muted hover:text-fg">
              Intelligence
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
              Legal
            </span>
            <a
              href={`${STOREFRONT.blog}/privacy/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Privacy
            </a>
            <a
              href={`${STOREFRONT.blog}/terms/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Terms
            </a>
            <a
              href={`${STOREFRONT.blog}/accessibility/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Accessibility
            </a>
            <Link to="/privacy" className="text-fg-muted hover:text-fg">
              App privacy boundary
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
              Apps
            </span>
            <a
              href="https://salty-menu-builder.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Menu Builder
            </a>
            <a
              href="https://occasion-operating-system-u9cd.vercel.app/plan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Occasion OS
            </a>
            <a
              href="https://restaurant-intelligence-hub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg"
            >
              Restaurant Intelligence
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            Education only · {STOREFRONT.brand} · {STOREFRONT.attitude}
          </span>
          <span>TanStack Start · Nitro Fluid · Vercel</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-dvh flex-col", className)}>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
