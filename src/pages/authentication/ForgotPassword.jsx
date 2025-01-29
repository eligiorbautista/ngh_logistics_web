import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="w-full max-w-md p-8 space-y-8 sm:bg-white sm:rounded-lg sm:shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center space-x-3">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#C3000A]">Logistics</h2>
            <p className="text-gray-700 text-xl font-semibold">
              Forgot Password
            </p>
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
              className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#1F3987] border border-transparent rounded-md shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
            >
              Request Password Reset
            </button>
          </div>
        </form>
         <div className="text-sm text-center">
          Remembered your password?{" "}
          <a
            href="/"
            className="font-medium text-[#1F3987] hover:text-[#1F3987]"
          >
            Log In
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;