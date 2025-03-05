import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Configuration: Define which items appear on each page
  const headerConfig = {
    "/profile": { search: false, notification: false, profile: true },
    "/query": { search: true, notification: true, profile: true },
    "/services": { search: true, notification: false, profile: true },
  };

  // Get current config based on route, default to showing all
  const { search, notification, profile } = headerConfig[location.pathname] || { 
    search: true, 
    notification: true, 
    profile: true 
  };

  return (
    <div className="w-[80vw] h-[90px] flex justify-between items-center p-[20px] bg-white shadow-md">

      {/* Left Side (Search Bar) */}
      {search && (
        <div className="relative">
          <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <AiOutlineSearch size={20} />
          </span>
          <input
            type="text"
            className="w-[255px] pl-10 rounded-lg outline-none border border-[#D2D2D2] p-2"
            placeholder="Enter hotel name or location"
          />
        </div>
      )}

      {/* Right Side (Icons & Profile) */}
      <div className="flex space-x-6 items-center">
        {/* Notification Bell */}
        {notification && (
          <div className="relative cursor-pointer">
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
              1
            </span>
            <CiBellOn className="text-4xl text-gray-700" />
          </div>
        )}

        {/* User Profile Dropdown */}
        {profile && (
          <div  className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 hover:rounded-lg 
            ${location.pathname === "/profile" ? "absolute right-5" : ""}`}>
            <LuCircleUserRound className="text-4xl text-gray-700" />
            <select
              className="outline-none p-2 text-lg bg-transparent cursor-pointer"
              onChange={(e) => {
                if (e.target.value === "profile") {
                  navigate("/profile"); // Navigate to profile page
                }
              }}
            >
              <option value="">Select</option>
              <option value="profile">Profile</option>
              <option value="logout">Logout</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
