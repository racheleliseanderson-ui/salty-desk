import { createFileRoute } from "@tanstack/react-router";
import { DeskHome } from "@/components/desk/DeskHome";
import { STOREFRONT } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  component: DeskHome,
  head: () => ({
    meta: [
      { title: `${STOREFRONT.name} · ${STOREFRONT.brand} field tools` },
      { name: "description", content: STOREFRONT.description },
    ],
  }),
});
