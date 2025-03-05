import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/120");

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Function to trigger file input when clicking the profile image
  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="">
      {/* Back Button */}
      <div className="flex bg-white p-4 items-center space-x-2 mb-4 rounded-lg shadow-sm">
        <AiOutlineArrowLeft className="text-blue-500 text-xl cursor-pointer" />
        <h2 className="text-xl font-semibold text-blue-500">My Profile</h2>
      </div>

      {/* Profile Details */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm p-6 md:items-start justify-between">
        
        {/* Left Side - User Info */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Name</span>
            <input
              type="text"
              value="Genny xyz"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              disabled
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Contact No.</span>
            <input
              type="text"
              value="9875648795"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              disabled
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Email Id.</span>
            <input
              type="email"
              value="genny@gmail.com"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              disabled
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Profile Password</span>
            <input
              type="password"
              value="********"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              disabled
            />
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="flex flex-col items-center">
          {/* Clickable Profile Image */}
          <div className="relative cursor-pointer" onClick={handleImageClick}>
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
            />
          </div>

          <p className="text-2xl font-bold mt-2">Genny</p>

          {/* Hidden File Input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit Profile
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
