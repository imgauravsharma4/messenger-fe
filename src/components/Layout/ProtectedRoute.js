import { useUserContext } from "providers/UserProvider";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useUserContext();

  const location = useLocation();

  console.log("isAtuh", isAuth);

  if (!isAuth) {
    // Debugging message
    console.log("User is not authenticated. Redirecting to login...");
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  // Debugging message
  console.log("User is authenticated. Rendering protected route...");

  return <Outlet />;
};

export default ProtectedRoute;
