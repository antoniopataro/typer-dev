import React from "react";

import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../pages/App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/typer-dev/" element={<App />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/typer-dev/profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<AuthRoutes />}>
          <Route path="/typer-dev/login" element={<Login />} />
          <Route path="/typer-dev/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
