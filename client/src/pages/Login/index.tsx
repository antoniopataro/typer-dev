import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import api from "../../../../server/services/api";

import { AuthContext } from "../../context/AuthContext";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";

import LoginStyles from "./styles";

function Login() {
  const { setUser, setIsLogged } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isUserAuthenticated = await authenticateUser();

    if (isUserAuthenticated) {
      navigate("/typer-dev/");
      setIsLogged(true);

      const user = await api.get("/user", {
        params: {
          email: email,
        },
      });

      setUser(user);
      return;
    }

    return;
  }

  const authenticateUser = async () => {
    const user = {
      email: email,
      password: password,
    };

    setEmailError("");
    setPasswordError("");
    try {
      await api.post("/login", user);
    } catch (error: any) {
      switch (error.response.data.error) {
        case "Are you sure about this e-mail?":
          setEmailError(error.response.data.error);
          return;
        case "Incorrect password.":
          setPasswordError(error.response.data.error);
          return;
        default:
          return;
      }
    }

    return true;
  };

  return (
    <LoginStyles>
      <Link to="/typer-dev/">
        <img src={leftArrowPurple} alt="Return" width={15} />
        <h4 className="primary-color">Back</h4>
      </Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your account's e-mail."
            autoComplete="email"
            style={emailError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{emailError ? emailError : ""}</span>
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your account's password."
            autoComplete="password"
            style={passwordError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{passwordError ? passwordError : ""}</span>
        </div>
        <button type="submit">Login</button>
        <Link to="/typer-dev/signup">Create an account.</Link>
      </form>
    </LoginStyles>
  );
}

export default Login;
