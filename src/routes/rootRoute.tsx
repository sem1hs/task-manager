import { createRootRoute } from "@tanstack/react-router";
import MainLayout from "../layout/MainLayout";

const RootRoute = createRootRoute({
  component: MainLayout,
});

export default RootRoute;
