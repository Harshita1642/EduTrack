import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar"; 
import TutDashboard from "./pages/TutDash";
import StudDashboard from "./pages/StudDash";
import Pomodoro from "./pages/Pomodoro";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "sonner";
import VerifyUser from "./pages/auth/VerifyUser";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import TutSchedule from "./pages/TutSchedule"

const App = () => {

  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/tutDash" element={<TutDashboard />} />
          <Route path="/StudDash" element={<StudDashboard />} />
          <Route path="/timer" element={<Pomodoro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyUser />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/TutSchedule" element={<TutSchedule />}/>
          
        </Routes>
      </Router>
      <Toaster />
    </SidebarProvider>
  );
};

export default App;