import Header from "../components/Header";
import { Outlet } from "@tanstack/react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
