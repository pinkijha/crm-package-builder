import React from 'react';
import { MdDashboard } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FaGears } from "react-icons/fa6";
import { TiGroup } from "react-icons/ti";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { RiBookMarkedLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const SidebarItems = [
        { id: 1, icon: <MdDashboard />, name: 'Dashboard', path: '/dashboard' },
        { id: 2, icon: <TbMessages />, name: 'Query', path: '/query' },
        { id: 3, icon: <FaGears />, name: 'Services', path: '/services' },
        { id: 4, icon: <RiBookMarkedLine />, name: 'Package Builder', path: '/package-builder' },
        { id: 5, icon: <TiGroup />, name: 'Clients', path: '/clients' },
        { id: 6, icon: <LiaFileInvoiceDollarSolid />, name: 'Invoice', path: '/invoice' },
        { id: 7, icon: <BsFileEarmarkBarGraph />, name: 'Reports', path: '/reports' },
        { id: 8, icon: <IoLogOut />, name: 'Logout', path: '/logout' },
    ];

    return (
        <div className='w-[300px] h-[100vh]'>
            {/* Header */}
            <div className='flex border h-[90px] border-b-black justify-between items-center bg-[#54A5FF] text-white pl-[22px] p-[20px]'>
                <h1 className='text-[18px] flex flex-col py-2'>
                    <span>The</span>
                    <span>Travel</span>
                    <span>Package</span>
                </h1>
                <span className='cursor-pointer font-bold text-xl'>
                    <FaArrowLeft />
                </span>
            </div>

            {/* Sidebar Menu */}
            <div className='bg-white space-y-3 m-5'>
                {SidebarItems.map((item) => (
                    <NavLink 
                        key={item.id} 
                        to={item.path} 
                        className={({ isActive }) => 
                            `flex cursor-pointer space-x-4 items-center text-[18px] shadow-2xs rounded-lg px-3 py-2 font-semibold border 
                            border-[#BDBDBD] transition-all duration-300 ease-in-out
                            ${isActive ? "bg-[#C4E0FF] text-[#2196F3] shadow-xl" : "bg-[#F2F3F5] text-[#2196F3] hover:bg-[#C4E0FF]"}`
                        }>
                        <span className='text-2xl'>{item.icon}</span>
                        <p>{item.name}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
