import { createRouter, RouterProvider } from "@tanstack/react-router";
import RootRoute from "./rootRoute";
import { indexRoute } from "./taskRoutes";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const routeTree = RootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

// TypeScript tip güvenliği
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function AppLayout() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} initialIsOpen={false} />
    </>
  );
}
