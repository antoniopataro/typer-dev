import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useCreateUserMutation } from "../../graphql/generated";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";

import SignUpStyles from "./styles";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [createUser] = useCreateUserMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const userName = name || "";
    const userEmail = email || "";
    const userPassword = password || "";

    if (validateInput()) {
      await createUser({
        variables: {
          name: userName,
          email: userEmail,
          password: userPassword,
        },
      });

      navigate("/typer-dev/login");
      return;
    }
    return;
  }

  const validateInput = () => {
    const userName = name;
    const userEmail = email;
    const userPassword = password;

    if (userName!.length === 0) {
      setNameError("You must type in your name.");
      return false;
    }
    setNameError("");

    if (!userEmail!.includes("@") || !userEmail!.includes(".")) {
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

  return (
    <SignUpStyles>
      <Link to="/typer-dev/">
        <img src={leftArrowPurple} alt="Return" width={15} />
        <h4 className="primary-color">Back</h4>
      </Link>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Your name."
            autoComplete="name"
            style={nameError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{nameError ? nameError : ""}</span>
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your e-mail."
            autoComplete="email"
            style={emailError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{emailError ? emailError : ""}</span>
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password."
            autoComplete="current-password"
            style={passwordError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{passwordError ? passwordError : ""}</span>
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/typer-dev/login">Log in with existing account.</Link>
      </form>
    </SignUpStyles>
  );
}

export default SignUp;
