import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 md:w-3/4 h-full px-6 py-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
