import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AddServices from './AddServices';
import EditServices from './EditServices'; // Import the edit component

const Services = () => {
  const [addService, setAddService] = useState(false);
  const [editService, setEditService] = useState(null); // Store selected service for editing

  const servicesData = [
    { id: "01", state: "West Bengal", city: "Kolkata", hotel: "The Ritz-Carlton", taxi: "cab", trainFlight: "train" },
    { id: "02", state: "Texas", city: "Houston", hotel: "The Peninsula Hotels", taxi: "cab", trainFlight: "flight" },
    { id: "03", state: "Florida", city: "Miami", hotel: "Radisson Blu", taxi: "cab", trainFlight: "flight" },
    { id: "04", state: "New York", city: "Rochester", hotel: "Hyatt Regency", taxi: "cab", trainFlight: "flight" },
    { id: "05", state: "Illinois", city: "Naperville", hotel: "Radisson Blu", taxi: "cab", trainFlight: "flight" },
    { id: "06", state: "Bihar", city: "Patna", hotel: "The Oberoi Udaivilas", taxi: "cab", trainFlight: "train" },
    { id: "07", state: "Andhra Pradesh", city: "Visakhapatnam", hotel: "Taj Mahal Palace", taxi: "cab", trainFlight: "train" }
  ];

  // If editService is set, render the EditServices component
  if (editService) {
    return <EditServices  onClose={() => setEditService(null)} />;
  }

  // If addService is true, render the AddServices component
  if (addService) {
    return <AddServices onClose={() => setAddService(false)} />;
  }

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[25px] font-semibold">Services</h2>
        <button
          onClick={() => setAddService(true)}
          className="bg-[#C4E0FF] cursor-pointer hover:bg-blue-400 hover:text-white px-6 py-2 rounded-lg font-semibold flex items-center"
        >
          Add Services <span className="ml-2 text-xl"><IoMdAdd /></span>
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-[16px] text-[#54A5FF]">
            <tr>
              <th className="border border-gray-300 px-5 py-3">Sr. No.</th>
              <th className="border border-gray-300 px-5 py-3">State</th>
              <th className="border border-gray-300 px-5 py-3">City</th>
              <th className="border border-gray-300 px-5 py-3">Hotel</th>
              <th className="border border-gray-300 px-5 py-3">Taxi</th>
              <th className="border border-gray-300 px-5 py-3">Train/Flight</th>
              <th className="border border-gray-300 px-5 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service) => (
              <tr key={service.id} className="text-center">
                <td className="border border-gray-300 px-5 py-3">{service.id}</td>
                <td className="border border-gray-300 px-5 py-3">{service.state}</td>
                <td className="border border-gray-300 px-5 py-3">{service.city}</td>
                <td className="border border-gray-300 px-5 py-3">{service.hotel}</td>
                <td className="border border-gray-300 px-5 py-3">{service.taxi}</td>
                <td className="border border-gray-300 px-5 py-3">{service.trainFlight}</td>
                <td className="border border-gray-300 px-5 py-3">
                  <button
                    onClick={() => setEditService(service)} // Set the service to be edited
                    className="text-xl cursor-pointer"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
