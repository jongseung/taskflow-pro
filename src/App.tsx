import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Tasks from "./features/tasks/Tasks";
import Calendar from "./features/calendar/Calender";
import Analytics from "./features/analytics/Analytics";
import Dashboard from "./features/dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
        {/* <Route path="/tasks/projects/:projectId" element={<ProjectTasks />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
