import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
        <div className="h-screen flex flex-col w-full md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 w-full h-full px-4 md:px-6 py-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
