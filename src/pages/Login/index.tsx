import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useGetUserQuery } from "../../graphql/generated";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";

import LoginStyles from "./styles";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const userEmail = email || "";

  const { data } = useGetUserQuery({
    variables: {
      email: userEmail,
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    authenticateUser();

    authenticateUser() ? navigate("/typer-dev/") : null;
  }

  const authenticateUser = () => {
    const userPassword = password;

    if (!data?.userData?.email) {
      setEmailError("Are you sure about this e-mail?");
      return false;
    }
    setEmailError("");

    if (data?.userData?.password !== userPassword) {
      setPasswordError("Incorrect password.");
      return false;
    }
    setPasswordError("");

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
