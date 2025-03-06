
import React from "react";

const EditQuery = ({ isOpen, onClose, tableItem }) => {
  if (!isOpen || !tableItem) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[500px] p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{tableItem.tId}</h2>
          <button className="text-3xl px-2 py-1  bg-blue-500 text-white rounded-full cursor-pointer " onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Query Information */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Query Information</h3>
          <div className="border rounded-lg p-3 mt-2 bg-gray-100">
            <p className="font-bold">{tableItem.QInfo}</p>
          </div>
        </div>

        {/* Client Information */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Client</h3>
          <div className="border rounded-lg p-3 mt-2 bg-gray-100">
            <p className="font-bold">{tableItem.clientName}</p>
            <p>Email: {tableItem.clientMail}</p>
            <p>Mobile: {tableItem.clientMobile}</p>
            <p>Adults: {tableItem.adlt}</p>
            <p>Last Contact: {tableItem.clientLst}</p>
          </div>
        </div>

        {/* Priority and Assigned To */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Priority</h3>
          <input
            className="w-full border p-2 rounded-lg mt-1"
            value={tableItem.priority}
            readOnly
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Assigned To</h3>
          <input
            className="w-full border p-2 rounded-lg mt-1"
            value={tableItem.AsignedTo}
            readOnly
          />
        </div>

        {/* Footer */}
        <div className="mt-6">
          <button
            className="w-auto px-8 cursor-pointer bg-blue-500 text-white py-2 rounded-lg text-lg"
            onClick={onClose}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditQuery;

