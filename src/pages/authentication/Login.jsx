import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ngh-logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center space-x-3">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#C3000A]">Logistics</h2>
            <p className="text-gray-700 text-xl font-semibold">Admin Login</p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <div
                  className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoEyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <IoEye className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-31 ">
            <div className="flex items-center hidden sm:flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-[#1F3987] border-gray-300 rounded focus:ring-[#1F3987]"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-medium text-[#1F3987] hover:text-[#1F3987]"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#1F3987] border border-transparent rounded-md shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Don't have an account?{" "}
          <a
            href="/registration"
            className="font-medium text-[#1F3987] hover:text-[#1F3987]"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;