import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const AddServices = ({ onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState({
    shower: true,
    "safe box": false,
    luggage: true,
    concierge: false,
    "morning sunlight": true,
    "sea view": true,
    refrigerator: false,
    "air conditioner": true,
    "tv cable": true,
    internet: true,
  });

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages([...selectedImages, ...imageUrls]);
  };

  const toggleAmenity = (amenity) => {
    setRoomAmenities((prev) => ({ ...prev, [amenity]: !prev[amenity] }));
  };
  return (
    <div>
      {/* Header with Back Button */}
      <div className="flex  p-4 items-center space-x-2 mb-4">
        <AiOutlineArrowLeft
          className=" text-2xl cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-2xl font-semibold ">Add Services</h2>
      </div>
      {/* Form part */}
      <div className="p-6 bg-white min-h-screen">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col space-y-2">
            <label className="text-lg">State</label>
            <select className="p-2 border bg-gray-200  rounded">
              <option>Select State</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">City</label>
            <select className="p-2 border bg-gray-200  rounded">
              <option>Select City</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg">Area</label>
            <select className="p-2 border bg-gray-200 rounded">
              <option>Select Area</option>
            </select>
          </div>
        </div>
        {/* Add Hotel */}
        <h2 className="text-2xl font-semibold mb-4">Add Hotels</h2>
        <div className="flex gap-4 mb-6">
          {selectedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Hotel"
              className="w-32 h-24 object-cover rounded"
            />
          ))}
          <label className="w-32 h-24 flex items-center justify-center border-2 border-dashed rounded cursor-pointer">
            <FaPlus className="text-gray-400" />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-6">
          <h1 className="mb-2 font-semibold text-xl">Room Details</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Price</label>
              <input
                type="text"
                placeholder="/night"
                className="p-2 border rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-lg">Reservation Status</label>
              <select className="p-2 border  rounded-xl">
                <option>Not Reserved</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Type</label>
              <select className="p-2 border  rounded-xl">
                <option>Deluxe(3*)</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Number</label>
              <input
                type="text"
                placeholder="Room Number"
                className="p-2 border rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Status</label>
              <select className="p-2 border rounded-xl">
                <option>Clean</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Return Status</label>
              <select className="p-2 border rounded-xl">
                <option>Ready</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">FO Status</label>
              <select className="p-2 border rounded-xl">
                <option>Vacant</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Class</label>
              <select className="p-2 border rounded-xl">
                <option>Main</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Room Capacity</label>
              <select className="p-2 border rounded-xl">
                <option>2-4 Guests</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Bed Type</label>
              <select className="p-2 border  rounded-xl">
                <option>King Size</option>
              </select>
            </div>
          </div>
        </div>

        {/* Room Amenities */}
        <h3 className="text-lg font-semibold mb-2">Room Amenities</h3>
        <div className="grid grid-cols-5 gap-4 mb-6">
          {Object.keys(roomAmenities).map((amenity, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                className="w-5 h-5"
                type="checkbox"
                checked={roomAmenities[amenity]}
                onChange={() => toggleAmenity(amenity)}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>

        {/* Add Taxi */}
        <h2 className="text-2xl font-semibold mb-4">Add Taxi</h2>
        <div className="flex gap-4 mb-6">
          {selectedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Hotel"
              className="w-32 h-24 object-cover rounded"
            />
          ))}
          <label className="w-32 h-24 flex items-center justify-center border-2 border-dashed rounded cursor-pointer">
            <FaPlus className="text-gray-400" />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="mb-6">
          <h1 className=" font-semibold text-xl mb-4">Taxi Details</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Taxi Owner Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 border rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-lg">Contact Number</label>
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="p-2 border rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Vehicle Type</label>
              <select className="p-2 border  rounded-xl">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Vehicle Number</label>
              <input
                type="text"
                placeholder="Enter Number"
                className="p-2 border rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">OutStation Cabs</label>
              <select className="p-2 border rounded-xl">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Hourly Rentals</label>
              <select className="p-2 border rounded-xl">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Women-Only Cabs</label>
              <select className="p-2 border rounded-xl">
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg">Charges</label>
              <input
                type="text"
                placeholder="Enter Charges"
                className="p-2 border rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="cursor-pointer flex items-center mb-6 bg-gray-200 p-2">
        <FaPlus className=" mr-2" /> <span className="font-semibold">Add Additional Services</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => setClickEdit(true)}
            className="bg-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white border border-gray-400"
          >
            Close
          </button>
          <button className="bg-[#C4E0FF] text-black px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
