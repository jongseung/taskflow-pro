import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import AppSidebar from "@/components/shared/AppSidebar";

function App() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container">
        <AppSidebar />
        <div className="content"></div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
