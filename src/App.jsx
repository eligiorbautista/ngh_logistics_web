import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Registration from "./pages/authentication/Registration";
import ResetPassword from "./pages/authentication/ResetPassword";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import OTP from "./pages/authentication/OTP";
import Dashboard from "./pages/dashboard/Dashboard";
import Maintenance from "./pages/error/Maintenance";
import NotFound from "./pages/error/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;