import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useCreateUserMutation } from "../../graphql/generated";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";

import SignUpStyles from "./styles";

function SignUp() {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [createUser] = useCreateUserMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const userName = name.current?.value || "";
    const userEmail = email.current?.value || "";
    const userPassword = password.current?.value || "";

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
    const userName = name.current?.value;
    const userEmail = email.current?.value;
    const userPassword = password.current?.value;

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

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

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
            ref={name}
            type="name"
            placeholder="Your name."
            autoComplete="name"
            style={nameError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{nameError ? nameError : ""}</span>
        </div>
        <div>
          <input
            ref={email}
            type="email"
            placeholder="Your e-mail."
            autoComplete="email"
            style={emailError ? { outlineColor: "var(--secondary)" } : { outlineColor: "transparent" }}
          />
          <span>{emailError ? emailError : ""}</span>
        </div>
        <div>
          <input
            ref={password}
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
