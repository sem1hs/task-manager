import { createRoute } from "@tanstack/react-router";
import RootRoute from "./rootRoute";
import TaskPage from "../pages/TaskPage";

export const indexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: TaskPage,
});
