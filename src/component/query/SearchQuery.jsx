
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SearchQuery = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-auto">
        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm mb-4">
          <input
            type="text"
            placeholder="Search By ID, Client, Priority, Dealer, etc...."
            className="flex-grow outline-none text-lg p-2"
          />
          <button className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-full flex items-center gap-2">
            <FaSearch /> Search
          </button>
          <button onClick={onClose} className="cursor-pointer ml-2  p-2  bg-blue-500 text-white rounded-full">
            <IoClose />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {['Start Date', 'End Date', 'Query ID', 'Subject,Name', 'Status', 'Select Destination'].map((filter) => (
            <button
              key={filter}
              className={`p-2 border rounded-lg text-lg font-medium ${filter === 'Query ID' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchQuery;

