import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar"; 
import TutDashboard from "./pages/TutDash";
import StudDashboard from "./pages/StudDash";
import Pomodoro from "./pages/Pomodoro";
import { UserContextProvider, UserData } from './context/UserContext'; // Ensure this path is correct
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "sonner";
import VerifyUser from "./pages/auth/VerifyUser";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import TakeABreakPage from "./pages/TakeABreakPage";
import HomePage from './pages/HomePage';
import CourseDescription from "./components/Courses/CourseDescription";
import PaymentSuccess from "./components/Courses/PaymentSuccess";
import CourseStudy from "./components/Courses/CourseStudy"

const App = () => {
  const { isAuth, user, loading } = UserData();
  return (
    <UserContextProvider>
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutDash" element={isAuth ? <TutDashboard /> : <Login/>} />
          <Route path="/StudDash" element={isAuth ? <StudDashboard /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyUser />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/takeabreak" element={isAuth ?<TakeABreakPage /> : <Login/>} />
          <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            />
<Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
          <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />

        </Routes>
      </Router>
      <Toaster />
    </SidebarProvider>
    </UserContextProvider>
  );
};

export default App;