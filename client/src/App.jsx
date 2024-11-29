import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar"; // Adjust path as needed
import TutDashboard from "./pages/TutDash";

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/tutDash" element={<TutDashboard />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
};

export default App;