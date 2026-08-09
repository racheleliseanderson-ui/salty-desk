import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-bordeaux-soft">
        Something broke
      </p>
      <h1 className="mt-2 font-display text-2xl font-medium text-fg">Desk error</h1>
      <p className="mt-3 text-sm text-fg-muted">
        {error instanceof Error ? error.message : "Unexpected error"}
      </p>
      <a
        href="/"
        className="mt-6 inline-flex h-10 items-center rounded-[var(--radius-sm)] bg-bordeaux px-4 text-sm font-medium text-ivory"
      >
        Back to desk
      </a>
    </div>
  );
}
