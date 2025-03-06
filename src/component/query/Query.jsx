import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import AddQuery from "./AddQuery";
import EditQuery from "./EditQuery";

const Query = () => {
  const [addQuery, setAddQuery] = useState(false);
  const [editQuery, setEditQuery] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const cardItem = [
    { id: 1, count: 80, name: "New Leads", color: "#FFB400" },
    { id: 2, count: 0, name: "Active Leads", color: "#4FA5F0" },
    { id: 3, count: 0, name: "No Response", color: "#5C73E7" },
    { id: 4, count: 1, name: "Hot Leads", color: "#14A2B8" },
    { id: 5, count: 0, name: "Confirm", color: "#34C38E" },
    { id: 6, count: 0, name: "Cancel", color: "#F4696C" },
    { id: 7, count: 0, name: "Lost", color: "Black" },
  ];

  const tableItem = [
    {
      id: 1,
      tId: "TP0001",
      QInfo:
        "KATRA-AMRITSARStart: 13-May-2024, End: 19-May-2024Duration: 7 DaysRoute: Amritsar PackageBooking: 26-Apr-2024",
      clientName: "CHHAYABEN",
      clientMail: "Email:chaya.patel@gmail.com",
      clientMobile: "Mobile: 9974716373",
      adlt: "Adults:3",
      clientLst: "Last Contact: 24-Apr-2024 09:15 am",
      priority: "High",
      AsignedTo: "Rajesh Verma",
    },
    {
      id: 2,
      tId: "TP0002",
      QInfo:
        "ADI KAILASH-MUNSIYARIStart: 24-May-2024, End: 31-May-2024Duration: 8 DaysRoute: Dharehula To Nainital Complete PackageBooking: 19-Apr-2024",
      clientName: "RAJESH SOLANKI",
      clientMail: "Email:rajesh.solanki@hotmail.com",
      clientMobile: "Mobile: 9974716373",
      adlt: "Adults:3",
      clientLst: "Last Contact: 24-Apr-2024 09:15 am",
      priority: "Low",
      AsignedTo: "Pinki Jha",
    },
    {
      id: 3,
      tId: "TP0003",
      QInfo:
        "ADI KAILASH-MUNSIYARIStart: 24-May-2024, End: 31-May-2024Duration: 8 DaysRoute: Dharehula To Nainital Complete PackageBooking: 19-Apr-2024",
      clientName: "RAJESH SOLANKI",
      clientMail: "Email:rajesh.solanki@hotmail.com",
      clientMobile: "Mobile: 9974716373",
      adlt: "Adults:3",
      clientLst: "Last Contact: 24-Apr-2024 09:15 am",
      priority: "Medium",
      AsignedTo: "Pinki Jha",
    },
  ];

  // Set color to priority element
  const priorityColor = {
    high: "text-red-500",
    medium: "text-orange-400",
    low: "text-green-500",
  };

  return (
    <div>
      {/* Header Buttons section */}
      <div className="flex space-x-2 mb-6">
        <div>
          <button
            onClick={() => setAddQuery(true)}
            className="bg-[#D63B05] text-white text-lg cursor-pointer py-2 px-6 flex items-center gap-2 rounded-lg"
          >
            <FaPlus />
            Add Query
          </button>
          <AddQuery isOpen={addQuery} onClose={() => setAddQuery(false)} />
        </div>
        <button className="bg-[#23C55F] text-white text-lg cursor-pointer px-6 py-2 flex items-center gap-2 rounded-lg">
          <FaSearch />
          Search
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex text-lg gap-4 mb-6">
        {cardItem.map((item) => (
          <div
            style={{ backgroundColor: item.color }}
            key={item.id}
            className="flex flex-col px-10 py-2 text-white items-center"
          >
            <p>{item.count}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-none">
          {/* Table Head */}
          <thead className="border-b-2">
            <tr className="px-4 py-2">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Query Information</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Priority</th>
              <th className="px-4 py-2">Assigned To</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="border-b-2">
            {tableItem.map((item) => (
              <tr key={item.id} className="">
                <td className="border-b-2 px-6 py-6 text-justify">{item.tId}</td>
                <td className="border-b-2 px-6 py-6 text-justify w-[269px]">
                  {item.QInfo}
                </td>
                <td className="border-b-2 px-6 py-6 w-[269px]">
                  <span className="font-bold">{item.clientName}</span>
                  <br />
                  <span>{item.clientMail}</span>
                  <br />
                  <span>{item.clientMobile}</span>
                  <br />
                  <span>{item.adlt}</span>
                  <br />
                  <span>{item.clientLst}</span>
                </td>
                <td
                  className={`border-b-2 border-black font-bold px-6 py-6 ${
                    priorityColor[item.priority.toLowerCase()] || "text-gray-500"
                  }`}
                >
                  {item.priority}
                </td>
                <td className="border-b-2 px-6 py-6">{item.AsignedTo}</td>
                <td className="border-b-2 space-x-3 px-6 py-6">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setEditQuery(true);
                    }}
                    className="cursor-pointer text-lg"
                  >
                    <FaEdit />
                  </button>
                  <button className="cursor-pointer text-lg">
                    <FiDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Query Modal */}
      {editQuery && selectedItem && (
        <EditQuery isOpen={editQuery} onClose={() => setEditQuery(false)} tableItem={selectedItem} />
      )}
    </div>
  );
};

export default Query;
