import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? <Outlet /> : <Navigate to="/typer-dev/login" />;
}

export default PrivateRoutes;
