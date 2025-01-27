import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ngh-logo.png";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResendOtp = () => {
    setTimer(120);
    setIsResendDisabled(true);
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
            <p className="text-gray-700 text-xl font-semibold">
              Two-Factor Authentication
            </p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Enter OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              autoComplete="one-time-code"
              required
              placeholder="Enter the OTP sent to your email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#1F3987] border border-transparent rounded-md shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
            >
              Verify OTP
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Didn't receive the OTP?{" "}
          <button
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className={`font-medium cursor-pointer${
              isResendDisabled
                ? "cursor-wait text-gray-400"
                : " text-[#1F3987] hover:text-[#1F3987] "
            }`}
          >
            {isResendDisabled
              ? `Resend OTP in ${Math.floor(timer / 60)}:${
                  timer % 60 < 10 ? `0${timer % 60}` : timer % 60
                }`
              : "Resend OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;