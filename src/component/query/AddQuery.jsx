
import React from "react";
import { IoClose } from "react-icons/io5";

const AddQuery = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-6 w-[500px] relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white rounded-full cursor-pointer text-3xl"
          onClick={onClose}
        >
          <IoClose />
        </button>

        {/* Form Fields */}
        <form>
          {[
            "ID",
            "Query Information",
            "Client",
            "Priority",
            "Assigned To",
          ].map((label, index) => (
            <div key={index} className="mb-4">
              <label className="block font-semibold mb-1">{label}</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Save Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-2 rounded-lg w-auto font-semibold hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuery;

