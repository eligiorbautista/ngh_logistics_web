import React, { useState } from "react";
import profileImage from "../../assets/profile.jpg";
import { toast } from "sonner";

const Settings = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Eli",
    lastName: "Bautista",
    email: "dev.elibautista@gmail.com",
    phone: "123-456-7890",
    address: "123 Main St, Kahit Saan, Philippines",
    profilePicture: profileImage,
  });

  const handleToggleTwoFactor = () => {
    setIsTwoFactorEnabled(!isTwoFactorEnabled);
  };

  const handleToggleEmailNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  const handleChangePassword = () => {
    toast.info("Change password feature is not yet available.");
  };

  const handleProfilePictureChange = (e) => {
    setProfile({
      ...profile,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Settings
        </h2>
        <form>
          {/* Profile Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 flex flex-col items-center">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <label className="relative cursor-pointer mt-1 block w-32 h-32">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleProfilePictureChange}
                />
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-2 border-gray-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm">Change</span>
                </div>
              </label>
              <span className="text-sm text-gray-500 mt-2">
                Click to change or upload your profile picture
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter first name"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter last name"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email address"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter phone number"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter address"
                rows="4"
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Security Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Security
          </h3>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Two-Factor Authentication
            </h3>
            <div className="flex items-center">
              <div
                className={`relative inline-block w-12 h-6 mr-2 align-middle select-none rounded-full border border-gray-400 transition duration-200 ease-in ${
                  isTwoFactorEnabled ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={handleToggleTwoFactor}
              >
                <span
                  className={`absolute block w-6 h-6 bg-white border-2 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in ${
                    isTwoFactorEnabled
                      ? "transform translate-x-6 border-blue-500"
                      : "border-gray-300"
                  }`}
                ></span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              When enabled, you will be required to enter a code sent to your
              email address in addition to your password.
            </p>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full text-white bg-[#1F3987] py-3 px-4 rounded-lg shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987] cursor-pointer"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Notifications Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Notifications
          </h3>
          <div className="mt-6">
            <div className="flex items-center">
              <div
                className={`relative inline-block w-12 h-6 mr-2 align-middle select-none rounded-full border border-gray-400 transition duration-200 ease-in ${
                  isNotificationsEnabled ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={handleToggleEmailNotifications}
              >
                <span
                  className={`absolute block w-6 h-6 bg-white border-2 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in ${
                    isNotificationsEnabled
                      ? "transform translate-x-6 border-blue-500"
                      : "border-gray-300"
                  }`}
                ></span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-white bg-[#1F3987] py-3 px-4 rounded-lg shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987] cursor-pointer"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
