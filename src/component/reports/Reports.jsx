import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import dropDown from "../../assets/dropDown.svg";
import RevenueReport from "./RevenueReport";
import PackageSummary from "./PackageSummary";

const Reports = () => {
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
        const month = String(d.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="container mx-auto w-full flex flex-col gap-4 py-4 px-8 overflow-hidden">
            <div className="heading flex gap-8 items-center">
                <img src={LeftArrow} alt="" className="size-10 font-bold" />
                <h1 className="text-4xl font-[700]">
                {selections.reportType !== "Select Type" ? selections.reportType : "Report"}
                </h1>
            </div>
            <div className="Body bg-white min-h-[40vh] w-[70vw] rounded-xl shadow-xs px-6 py-4 flex flex-col gap-3">
                <div className="upper flex flex-wrap gap-24 px-6">
                    {/* First row - Two elements */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium text-md capitalize">Report Type</h2>
                        <div className="relative w-full">
                            <button
                                onClick={() => toggleDropdown("reportType")}
                                className="w-[28vw] bg-gray-200 border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-[#656565]"
                            >
                                <span className="px-3">{selections.reportType}</span>
                                <img src={dropDown} alt="Dropdown Icon" />
                            </button>
                            {dropdowns.reportType && (
                                <div className="absolute right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-[11vw]">
                                    {dropdownItems.reportType.map((item) => (
                                        <div
                                            key={item}
                                            className="w-full p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelection("reportType", item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium text-md capitalize">Select State</h2>
                        <div className="relative w-full">
                            <button
                                onClick={() => toggleDropdown("state")}
                                className="w-[28vw] bg-gray-200 border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-[#656565]"
                            >
                                <span className="px-3">{selections.state}</span>
                                <img src={dropDown} alt="Dropdown Icon" />
                            </button>
                            {dropdowns.state && (
                                <div className="absolute right-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-[11vw]">
                                    {dropdownItems.state.map((item) => (
                                        <div
                                            key={item}
                                            className="w-full p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelection("state", item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Second row - Remaining element */}
                <div className="middle px-6 flex flex-col gap-2 mt-4 w-[48%]">
                    <h2 className="font-medium text-md capitalize">Select City</h2>
                    <div className="relative w-full ">
                        <button
                            onClick={() => toggleDropdown("city")}
                            className="w-[28vw] bg-gray-200 border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-[#656565]"
                        >
                            <span className="px-3">{selections.city}</span>
                            <img src={dropDown} alt="Dropdown Icon" />
                        </button>
                        {dropdowns.city && (
                            <div className="absolute right-3 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-[11vw]">
                                {dropdownItems.city.map((item) => (
                                    <div
                                        key={item}
                                        className="w-full p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelection("city", item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Date section From to To Date */}
                <div className="date-section flex gap-24 px-6 mt-4">
                    {/* From Date on the left */}
                    <div className="flex flex-col gap-2 w-[45%]">
                        <h2 className="font-medium text-md capitalize">From Date</h2>
                        <input
                            type="date"
                            className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-[#656565]"
                            onChange={(e) => setSelections({ ...selections, fromDate: e.target.value })}
                        />
                        <span className="text-gray-500 text-sm mt-1">
                            {formatDate(selections.fromDate)}
                        </span>
                    </div>

                    {/* To Date on the right */}
                    <div className="flex flex-col gap-2 w-[45%]">
                        <h2 className="font-medium text-md capitalize">To Date</h2>
                        <input
                            type="date"
                            className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-[#656565]"
                            onChange={(e) => setSelections({ ...selections, toDate: e.target.value })}
                        />
                        <span className="text-gray-500 text-sm mt-1">
                            {formatDate(selections.toDate)}
                        </span>
                    </div>

                </div>
                {/* Buttons Here */}
                <div className="flex gap-24 my-2 items-center justify-center">
                    <button className="bg-[#C4E0FF] px-14 py-2 rounded-md font-[500] text-lg">
                        Search
                    </button>
                    <button className="bg-[#BDC3C9] px-14 py-2 rounded-md font-[500] text-lg">
                        Reset
                    </button>
                </div>

            </div>
            
                {/* Conditionally Render RevenueReport when 'Revenue Report' is selected */}
                {selections.reportType === "Revenue Report" && <RevenueReport />}
                 {/* Conditionally Render RevenueReport when 'Revenue Report' is selected */}
                 {selections.reportType === "Package Summary" && <PackageSummary />}

        </div>
    );
};

export default Reports;
