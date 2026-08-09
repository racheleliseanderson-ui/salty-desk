import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "@/styles.css?url";
import { SiteChrome } from "@/components/shell/SiteChrome";
import { STOREFRONT } from "@/lib/catalog";

const APP_NAME = `${STOREFRONT.name} · ${STOREFRONT.brand}`;
const APP_DESCRIPTION = STOREFRONT.description;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { name: "theme-color", content: "#081A2C" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: STOREFRONT.name },
      { property: "og:description", content: APP_DESCRIPTION },
      { property: "og:site_name", content: STOREFRONT.brand },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: STOREFRONT.name },
      { name: "twitter:description", content: APP_DESCRIPTION },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
