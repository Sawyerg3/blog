import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateAdminRoute() {
  const userType = localStorage.getItem("type");

  return !userType || userType.toLowerCase() !== "admin" ? (
    <Navigate to="/admin/login" />
  ) : (
    <Outlet />
  );
}

export default PrivateAdminRoute;
