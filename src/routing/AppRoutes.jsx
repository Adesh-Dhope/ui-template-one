import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import AddDetails from "../pages/AddDetails";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import Subject from "../pages/Subject";
import UploadFiles from "../pages/UploadFiles";
import Entrance from "../Auth/Entrance";
import ForgetPassword from "../Auth/ForgetPassword";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Entrance />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route path="/add-student" element={<Student />} />
          <Route path="/add-teacher" element={<Teacher />} />
          <Route path="/add-subject" element={<Subject />} />
          <Route path="/add-details" element={<AddDetails />} />
          <Route path="/upload-files" element={<UploadFiles />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
