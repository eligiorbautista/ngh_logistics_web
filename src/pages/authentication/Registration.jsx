import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTermsAccepted) {
      navigate("/dashboard");
    } else {
      alert("You must accept the terms and policy to register.");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl sm:p-8 space-y-8 sm:bg-white sm:rounded-lg sm:shadow-lg">
        <div className="flex items-center justify-center space-x-3">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#C3000A]">Logistics</h2>
            <p className="text-gray-700 text-xl font-semibold">
              Admin Registration
            </p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                First name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                placeholder="Enter your first name"
                className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Last name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                placeholder="Enter your last name"
                className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Phone number
              </label>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Enter your phone number"
                className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                  autoComplete="new-password"
                  required
                  placeholder="Enter your password"
                  className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
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
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Confirm your password"
                  className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword && (
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <IoEye className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                autoComplete="street-address"
                required
                rows={3}
                placeholder="Enter your address"
                className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="w-4 h-4 text-[#1F3987] border-gray-300 rounded focus:ring-[#1F3987] mt-1"
              checked={isTermsAccepted}
              onChange={(e) => setIsTermsAccepted(e.target.checked)}
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-900 text-start"
            >
              By completing your registration, you acknowledge and agree to our{" "}
              <button
                type="button"
                onClick={openModal}
                className="text-[#1F3987] hover:text-[#1F3987] underline"
              >
                terms and policy
              </button>
              . You may receive email notifications from us and can opt out at
              any time.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#1F3987] border border-transparent rounded-md shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <a
            href="/"
            className="font-medium text-[#1F3987] hover:text-[#1F3987]"
          >
            Log In
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000090] ">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Terms and Policy</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-96 px-5">
              <p className="text-sm text-gray-700 mb-4">
                By using our services, you agree to the following terms and conditions:
              </p>
              <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
              <p className="text-sm text-gray-700 mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <h3 className="text-lg font-semibold">2. Privacy Policy</h3>
              <p className="text-sm text-gray-700 mb-4">
                We are committed to protecting your privacy. Our privacy policy explains how we collect, use, and disclose information about you.
              </p>
              <h3 className="text-lg font-semibold">3. User Responsibilities</h3>
              <p className="text-sm text-gray-700 mb-4">
                You are responsible for your use of our services and for any consequences thereof. You agree to use our services in compliance with all applicable laws and regulations.
              </p>
              <h3 className="text-lg font-semibold">4. Limitation of Liability</h3>
              <p className="text-sm text-gray-700 mb-4">
                We shall not be liable for any damages or losses arising from your use of our services.
              </p>
              <h3 className="text-lg font-semibold">5. Changes to Terms</h3>
              <p className="text-sm text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-[#1F3987] text-white rounded-md hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;