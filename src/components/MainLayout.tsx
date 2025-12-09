import { Outlet } from "react-router";
import MainHeader from "../components/MainHeader.tsx";

const MainLayout = () => {
  return (
    <main className="flex mx-auto py-5 gap-5 flex-col min-w-7xl no-scrollbar">
      <MainHeader />
      <Outlet />
    </main>
  );
};

export default MainLayout;
