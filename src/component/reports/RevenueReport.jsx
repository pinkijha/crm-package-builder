import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow.svg";
import dropDown from "../../assets/dropDown.svg";

const RevenueReport = () => {

    return (
        <div className="container mx-auto flex flex-col gap-6 py-6 px-8">          

            {/* Table */}
            <div className="overflow-x-auto bg-gray-100 ">
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr className="border border-gray-300">
                            {["Month", "Gross Amount", "Markup Amount", "Total Revenue", "Total Bookings"].map(
                                (heading) => (
                                    <th key={heading} className="p-4 text-left text-blue-500">{heading}</th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {[["February-25", "₹22000", "₹2000", "₹24000", "106"], ["January-25", "₹15000", "₹1000", "₹16000", "80"]].map((row, index) => (
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

export default RevenueReport;
