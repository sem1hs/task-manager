import { createRouter } from "@tanstack/react-router";
import RootRoute from "./rootRoute";
import { indexRoute } from "./taskRoutes";

const routeTree = RootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

// TypeScript tip güvenliği
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
