import { Outlet } from "react-router-dom";
import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import AppSidebar from "@/components/shared/AppSidebar";

const MainLayout = () => {
  return (
    <div className="page">
      <AppHeader />
      <div className="container">
        <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
          <AppSidebar />
          <main className="content w-full h-full">
            <Outlet />
          </main>
        </main>
      </div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
