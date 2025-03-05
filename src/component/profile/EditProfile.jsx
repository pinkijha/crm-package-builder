import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import userProfile from "../../assets/user-profile.png";

const EditProfile = ({ onClose }) => {
  const [image, setImage] = useState(null);
 

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="    ">
      {/* Header with Back Button */}
      <div  className="flex bg-white p-4 items-center space-x-2 mb-4 rounded-lg shadow-sm">
        <AiOutlineArrowLeft
          className="text-blue-500 text-2xl cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-xl font-semibold text-blue-500">Edit Profile</h2>
      </div>

      {/* Profile Details */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg 
      shadow-sm p-6 justify-between">
        {/* Left Side - User Info */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Name</span>
            <input
              type="text"
              value="Genny xyz"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Contact No.</span>
            <input
              type="text"
              value="9875648795"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
             
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Email Id.</span>
            <input
              type="email"
              value="genny@gmail.com"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
              
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Current Password</span>
            <input  placeholder="***********"
              type="password" 
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
             
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">New Password</span>
            <input placeholder="Enter new Password"
              type="password"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
             
            />
          </div>
          <div className="flex items-center">
            <span className="w-1/3 text-lg font-bold">Confirm Password</span>
            <input placeholder="***********"
              type="password"
              className="w-2/3 bg-gray-100 p-2 rounded-md outline-none"
             
            />
          </div>
        </div>

        {/* Right Side - Profile Image Upload */}
        <div className="flex flex-col items-center mr-10">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src={image || userProfile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <label className="mt-3 hover:bg-blue-600 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Upload
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Confirm & Save Button */}
      <div className="mt-6 flex justify-end p-4 rounded-lg">
        <button className="px-6 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
          Confirm & Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
