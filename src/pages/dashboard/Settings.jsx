import React, { useState } from "react";
import profileImage from "../../assets/profile.jpg";
import { toast } from "sonner";

const ProfileField = ({ label, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
      placeholder={`Enter ${label.toLowerCase()}`}
      value={value}
      onChange={onChange}
    />
  </div>
);

const ProfilePicture = ({ profilePicture, onChange }) => (
  <div className="md:col-span-2 flex flex-col items-center">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Profile Picture
    </label>
    <label className="relative cursor-pointer mt-1 block w-32 h-32">
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={onChange}
      />
      <img
        src={profilePicture}
        alt="Profile"
        className="w-full h-full rounded-full object-cover border-2 border-gray-300"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-sm">Update Profile</span>
      </div>
    </label>
    <span className="text-sm text-gray-500 mt-2">
      Click to change your profile picture
    </span>
  </div>
);

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
    <div className="min-h-screen p-2 flex items-center justify-center">
      <div className="w-full max-w-4xl md:bg-white md:shadow-lg rounded-lg md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Settings
        </h2>
        <form>
          <hr className="my-6 border-gray-300" />
          {/* Profile Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfilePicture
              profilePicture={profile.profilePicture}
              onChange={handleProfilePictureChange}
            />
            <ProfileField
              label="First name"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
            <ProfileField
              label="Last name"
              value={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
            />
            <ProfileField
              label="Email address"
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <ProfileField
              label="Phone number"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                placeholder="Enter address"
                rows="4"
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-0 w-full">
              <button
                type="submit"
                className="w-full text-white bg-[#1F3987] py-3 px-4 rounded-lg shadow-sm hover:bg-[#1F3987] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F3987] cursor-pointer"
              >
                Apply Changes
              </button>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Security Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Security
          </h3>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Two-Factor Authentication
            </label>
            <div
              className={`relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in ${
                isTwoFactorEnabled ? "bg-blue-500" : "bg-gray-300"
              } rounded-full`}
              onClick={handleToggleTwoFactor}
            >
              <span
                className={`absolute left-0 inline-block w-6 h-6 transform bg-white border-2 rounded-full transition-transform duration-200 ease-in ${
                  isTwoFactorEnabled
                    ? "translate-x-6 border-blue-500"
                    : "border-gray-300"
                }`}
              ></span>
            </div>
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
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Push Notifications
            </label>
            <div
              className={`relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in ${
                isNotificationsEnabled ? "bg-blue-500" : "bg-gray-300"
              } rounded-full`}
              onClick={handleToggleEmailNotifications}
            >
              <span
                className={`absolute left-0 inline-block w-6 h-6 transform bg-white border-2 rounded-full transition-transform duration-200 ease-in ${
                  isNotificationsEnabled
                    ? "translate-x-6 border-blue-500"
                    : "border-gray-300"
                }`}
              ></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;