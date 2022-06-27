import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";

import LoginStyles from "./styles";

function Login() {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    validateInput() ? navigate("/") : null;
  }

  const validateInput = () => {
    const userEmail = email.current?.value;
    const userPassword = password.current?.value;

    const indexOfAt = userEmail?.split("").indexOf("@");
    const afterAt = userEmail?.slice(indexOfAt, userEmail.length);

    if (!userEmail!.includes("@") || !afterAt!.includes(".")) {
      setEmailError("Your e-mail must have '@' and '.'.");
      return false;
    }
    setEmailError("");

    if (userPassword!.length < 8) {
      setPasswordError("Your password must have at least 8 characters.");
      return false;
    }
    setPasswordError("");

    return true;
  };

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <LoginStyles>
      <Link to="/">
        <img src={leftArrowPurple} alt="Return" width={15} />
        <h4 className="primary-color">Back</h4>
      </Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            ref={email}
            type="email"
            placeholder="Your account's e-mail."
            autoComplete="email"
            style={emailError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{emailError ? emailError : ""}</span>
        </div>
        <div>
          <input
            ref={password}
            type="password"
            placeholder="Your account's password."
            autoComplete="password"
            style={passwordError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{passwordError ? passwordError : ""}</span>
        </div>
        <button type="submit">Login</button>
        <Link to="/signup">Create an account.</Link>
      </form>
    </LoginStyles>
  );
}

export default Login;
