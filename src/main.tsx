import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router.tsx";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} initialIsOpen={false} />
  </StrictMode>
);
