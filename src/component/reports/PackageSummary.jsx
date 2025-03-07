

import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import dropDown from "../../assets/dropDown.svg";

const PackageSummary = () => {
    const [dropdowns, setDropdowns] = useState({
        reportType: false,
        state: false,
        city: false,
    });
    const [selections, setSelections] = useState({
        reportType: "Select Type",
        state: "Select State",
        city: "Select City",
        fromDate: "",
        toDate: "",
    });

    const toggleDropdown = (key) => {
        setDropdowns({ ...dropdowns, [key]: !dropdowns[key] });
    };

    const handleSelection = (key, value) => {
        setSelections({ ...selections, [key]: value });
        setDropdowns({ ...dropdowns, [key]: false });
    };

    const dropdownItems = {
        reportType: ["Sale Summary", "Revenue Report", "Package Summary"],
        state: ["State 1", "State 2", "State 3"],
        city: ["City 1", "City 2", "City 3"],
    };

    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="container mx-auto flex flex-col gap-6 py-6 px-8">          

            {/* Table */}
            <div className="overflow-x-auto bg-gray-100">
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr className="border border-gray-300">
                            {["Total Pacakges", "Active Packages", "Inactive Packages (Sold Out)", "Destination"].map(
                                (heading) => (
                                    <th key={heading} className="p-4 text-left text-blue-500">{heading}</th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {[["25", "22", "3", "Dubai, UAE" ], ["25", "22", "3", "Dubai, UAE" ]
                        , ["25", "22", "3", "Dubai, UAE" ]
                        , ["25", "22", "3", "Dubai, UAE" ]
                        , ["25", "22", "3", "Dubai, UAE" ]].map((row, index) => (
                            <tr key={index} className="border border-gray-300 bg-white">
                                {row.map((cell, i) => (
                                    <td key={i} className="p-4">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PackageSummary;

