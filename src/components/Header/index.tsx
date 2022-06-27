import { Link } from "react-router-dom";

import logoIcon from "../../assets/logoIcon.svg";
import leftArrowWhite from "../../assets/leftArrowWhite.svg";

import HeaderStyles from "./styles";

function Header() {
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
      <nav>
        <Link to="/signup" id="singup">
          <h3>Sign Up</h3>
        </Link>
        <Link to="/login" id="login">
          <h3>Login</h3>
          <img src={leftArrowWhite} alt="" width={12} />
        </Link>
      </nav>
    </HeaderStyles>
  );
}

export default Header;
