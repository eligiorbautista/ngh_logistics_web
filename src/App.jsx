import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Registration from "./pages/authentication/Registration";
import ResetPassword from "./pages/authentication/ResetPassword";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import OTP from "./pages/authentication/OTP";
import Maintenance from "./pages/error/Maintenance";
import NotFound from "./pages/error/NotFound";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;