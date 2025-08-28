import { createRoute } from "@tanstack/react-router";
import RootRoute from "./rootRoute";
import Home from "../pages/Home";

export const indexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});
