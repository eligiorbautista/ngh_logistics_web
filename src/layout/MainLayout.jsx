import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Home,
  Box,
  BarChart2,
  Activity,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
  Search,
  X,
  User,
  HelpCircle,
} from "lucide-react";
import profile from "../assets/profile.jpg";
import logo from "../assets/logo.png";

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const drawerRef = useRef(null);
  const profileMenuRef = useRef(null);
  const searchRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setDrawerOpen(false);
    }
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setProfileMenuOpen(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigationItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <Home className="w-5 h-5 mr-2" />,
    },
    {
      text: "Inventory",
      path: "/inventory",
      icon: <Box className="w-5 h-5 mr-2" />,
    },
    {
      text: "Statistics",
      path: "/statistics",
      icon: <BarChart2 className="w-5 h-5 mr-2" />,
    },
    {
      text: "Demand Forecasting",
      path: "/demand-forecasting",
      icon: <Activity className="w-5 h-5 mr-2" />,
    },
    {
      text: "Settings",
      path: "/settings",
      icon: <Settings className="w-5 h-5 mr-2" />,
    },
    {
      text: "Log Out",
      path: "/logout",
      icon: <LogOut className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-30`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={toggleDrawer}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="mt-4">
            <ul>
              {navigationItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Hamburger Menu and Logo */}
            <div className="flex items-center">
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
              <img src={logo} className="w-8 h-8 rounded-full ml-1" />
              <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
                Logistics
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex justify-center md:justify-end mx-4 search-container">
              {!isMobile && (
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent focus:outline-none w-full md:w-auto"
                  />
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
              )}
            </div>

            {/* Admin Profile and Search Icon */}
            <div className="flex items-center relative">
              {isMobile && (
                <div className="relative" ref={searchRef}>
                  <button
                    onClick={toggleSearch}
                    className="md:hidden flex items-center justify-center mr-2"
                  >
                    {searchOpen ? (
                      <X className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Search className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {searchOpen && (
                    <div className="absolute right-0 mt-6 w-64 bg-white rounded-md shadow-lg py-2 px-2 z-100">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-[#1F3987] focus:border-[#1F3987] sm:text-sm"
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="relative flex items-center" ref={profileMenuRef}>
                <img
                  src={profile}
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center focus:outline-none ml-2"
                >
                  <span className="text-gray-800 hidden md:inline">
                    Eli Bautista
                  </span>
                  {profileMenuOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-800 ml-1 cursor-pointer" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-800 ml-1 cursor-pointer" />
                  )}
                </button>

                {/* Profile Dropdown Menu */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-65 w-48 bg-white rounded-lg shadow-lg py-2 z-100">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <User className="w-5 h-5 mr-2" />
                      Profile
                    </Link>
                    <Link
                      to="/help"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <HelpCircle className="w-5 h-5 mr-2" />
                      Help
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <Settings className="w-5 h-5 mr-2" />
                      Settings
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="w-5 h-5 mr-2" />
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
