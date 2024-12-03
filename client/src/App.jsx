import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar"; // Adjust path as needed
import TutDashboard from "./pages/TutDash";
import StudDashboard from "./pages/StudDash";
<<<<<<< HEAD
import Pomodoro from "./pages/Pomodoro";
=======
import Login  from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "sonner";
import VerifyUser from "./pages/auth/VerifyUser";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
>>>>>>> 125e3ff30c186ee0d6d37e84d2963f80b819f7f3

const App = () => {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/tutDash" element={<TutDashboard />} />
          <Route path="/StudDash" element={<StudDashboard />} />
<<<<<<< HEAD
          <Route path="/timer" element={<Pomodoro />} />

=======
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/verify" element = {<VerifyUser/>} />
          <Route path = "/forgot-password" element = {<ForgotPassword/>} />
          <Route path = "/reset-password" element = {<ResetPassword/>} />
>>>>>>> 125e3ff30c186ee0d6d37e84d2963f80b819f7f3
        </Routes>
      </Router>
      <Toaster/>
    </SidebarProvider>
  );
};

export default App;