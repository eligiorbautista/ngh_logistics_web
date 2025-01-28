import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Maintenance = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md sm:p-8 space-y-8 sm:bg-white sm:rounded-lg sm:shadow-lg">
        <div className="flex items-center justify-center space-x-3">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#C3000A]">Logistics</h2>
            <p className="text-gray-700 text-xl font-semibold">Maintenance</p>
          </div>
        </div>
        <p className="text-xl font-semibold text-center text-gray-700">
          This page is currently under maintenance. Please check back later.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleGoBack}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-[#1F3987] border border-transparent rounded-md shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;