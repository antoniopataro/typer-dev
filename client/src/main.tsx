import React from "react";
import ReactDOM from "react-dom/client";

import AuthProvider from "./context/AuthContext";

import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>,
);
