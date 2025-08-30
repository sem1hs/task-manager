import Header from "../components/Header";
import { Outlet } from "@tanstack/react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
