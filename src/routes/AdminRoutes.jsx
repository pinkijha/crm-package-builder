import React from 'react';
import Sidebar from '../layout/sidebar/Sidebar';
import Header from '../layout/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../component/Dashboard';
import Query from '../component/query/Query';
import Services from '../component/services/Services';
import MyProfile from '../component/profile/MyProfile';
import RevenueReport from '../component/reports/RevenueReport';
import Reports from '../component/reports/Reports';

const PackageBuilder = () => <h1>Package Builder</h1>
const Clients = () => <h1>Clients</h1>
const Invoice = () => <h1>Invoice</h1>

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar (Fixed Width) */}
        <div className="">
          <Sidebar />
        </div>

        {/* Right side: Header on top and content below */}
        <div className="flex flex-col">
          {/* Header (Fixed Height) */}
          <div className="">
            <Header />
          </div>

          {/* Routed Content - Full Remaining Space */}
          <div className="p-4 flex-grow overflow-auto bg-gray-100">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/query" element={<Query />} />
              <Route path="/services" element={<Services />} />
              <Route path="/package-builder" element={<PackageBuilder />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/reports" element={<Reports/>} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/logout" element={<Services />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AdminRoutes;
