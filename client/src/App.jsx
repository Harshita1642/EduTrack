import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar"; // Adjust path as needed
import TutDashboard from "./pages/TutDash";
import StudDashboard from "./pages/StudDash";
import Pomodoro from "./pages/Pomodoro";

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/tutDash" element={<TutDashboard />} />
          <Route path="/StudDash" element={<StudDashboard />} />
          <Route path="/timer" element={<Pomodoro />} />

        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;