import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import logoIcon from "../../assets/logoIcon.svg";
import leftArrowWhite from "../../assets/leftArrowWhite.svg";

import placeholderPicture from "../../assets/placeholderPicture.png";

import HeaderStyles from "./styles";

function Header() {
  const { user, isLogged } = useContext(AuthContext);

  return (
    <HeaderStyles>
      <div>
        <img src={logoIcon} alt="TyperDev" width={22} />
        <h2>TyperDev</h2>
      </div>
      <nav>
        <a href="#tips">
          <h3>Tips</h3>
        </a>
        <a href="#about">
          <h3>About</h3>
        </a>
        <a href="#feedback">
          <h3>Feedback</h3>
        </a>
      </nav>
      {isLogged ? (
        <Link to="/typer-dev/profile" id="profile">
          <h3>{user.data?.name.split(" ").slice(0, 1)}</h3>
          <img src={user.data?.picture || placeholderPicture} alt={user.data?.name} width={30} />
        </Link>
      ) : (
        <nav>
          <Link to="/typer-dev/signup" id="singup">
            <h3>Sign Up</h3>
          </Link>
          <Link to="/typer-dev/login" id="login">
            <h3>Login</h3>
            <img src={leftArrowWhite} alt="" width={12} />
          </Link>
        </nav>
      )}
    </HeaderStyles>
  );
}

export default Header;
