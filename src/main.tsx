import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/typer-dev/" element={<App />} />
          <Route path="/typer-dev/login" element={<Login />} />
          <Route path="/typer-dev/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
