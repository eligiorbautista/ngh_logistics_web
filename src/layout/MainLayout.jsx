import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Home, Box, BarChart2, Activity, Settings, LogOut, ChevronDown } from 'lucide-react';
import profile from "../assets/profile.jpg";
import logo from "../assets/logo.png";

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    };

    const navigationItems = [
        { text: "Dashboard", path: "/dashboard", icon: <Home className="w-5 h-5 mr-2" /> },
        { text: "Inventory", path: "/inventory", icon: <Box className="w-5 h-5 mr-2" /> },
        { text: "Statistics", path: "/statistics", icon: <BarChart2 className="w-5 h-5 mr-2" /> },
        { text: "Demand Forecasting", path: "/demand-forecasting", icon: <Activity className="w-5 h-5 mr-2" /> },
        { text: "Settings", path: "/settings", icon: <Settings className="w-5 h-5 mr-2" /> },
        { text: "Log Out", path: "/logout", icon: <LogOut className="w-5 h-5 mr-2" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"
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
                            <img
                                src={logo}
                                className="w-8 h-8 rounded-full ml-1"
                            />
                            <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
                                Logistics
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent focus:outline-none"
                                />
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        {/* Admin Profile */}
                        <div className="relative flex items-center">
                            <img
                                src={profile}
                                alt="Admin"
                                className="w-8 h-8 rounded-full"
                            />
                            <button
                                onClick={toggleProfileMenu}
                                className="flex items-center focus:outline-none ml-2"
                            >
                                <span className="text-gray-800 hidden md:inline">Eli Bautista</span>
                                <ChevronDown className="w-5 h-5 text-gray-800 ml-1" />
                            </button>

                            {/* Profile Dropdown Menu */}
                            {profileMenuOpen && (
                                <div className="absolute right-0 mt-65 w-48 bg-white rounded-lg shadow-lg py-2">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/help"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Help
                                    </Link>
                                    <Link
                                        to="/settings"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Settings
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            )}
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