import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { Outlet, Navigate } from "react-router-dom";

function AuthRoutes() {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? <Navigate to="/typer-dev/" /> : <Outlet />;
}

export default AuthRoutes;
