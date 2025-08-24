import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import AppSidebar from "@/components/shared/AppSidebar";

function App() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container w-full h-full flex justify-start items-center">
        <AppSidebar />
        <div className="content w-full h-full"></div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
