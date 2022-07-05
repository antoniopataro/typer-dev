import diagonalArrowPink from "../../assets/diagonalArrowPink.svg";
import upArrowPurple from "../../assets/upArrowPurple.svg";

import keyboardPink from "../../assets/keyboardPink.svg";
import trainingPurple from "../../assets/trainingPurple.svg";
import typosPink from "../../assets/typosPink.svg";

import TipsStyles from "./styles";

function Tips() {
  return (
    <TipsStyles id="tips">
      <header>
        <div className="title">
          <h4 className="title-indicator">Tips</h4>
          <h1>How to type faster?</h1>
        </div>
        <h4>Here are some tips if you want to be a fast typer.</h4>
      </header>
      <ul>
        <li>
          <div className="tip-container">
            <div className="secondary-background-faded image">
              <img src={keyboardPink} alt="" width={25} />
            </div>
            <h3>Keyboard</h3>
            <h4>
              Find a keyboard that fits you. If you&apos;re not comfortable with your current, consider changing it.
              Mechanical keyboards are usually better.
            </h4>
          </div>
          <a href="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard" target={"_blank"}>
            <h3 className="secondary-color">Recommended Keyboard </h3>
            <img src={diagonalArrowPink} alt="" className="diagonalArrow" />
          </a>
        </li>
        <li>
          <div className="tip-container">
            <div className="primary-background-faded image">
              <img src={trainingPurple} alt="" width={25} />
            </div>
            <h3>Training</h3>
            <h4>
              Come here for some minutes every day in order to practice your typing skills. Create an account and track
              your evolution.
            </h4>
          </div>
          <a href="#typer">
            <h3 className="primary-color">Start training </h3>
            <img src={upArrowPurple} alt="" width={10} className="upArrow" />
          </a>
        </li>
        <li>
          <div className="tip-container">
            <div className="secondary-background-faded image">
              <img src={typosPink} alt="" width={25} />
            </div>
            <h3>Typos</h3>
            <h4>
              Typos consume a lot of time when typing when we are correcting them. This is even more important in
              programming, since a small error can screw everything up.
            </h4>
          </div>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
            target={"_blank"}
          >
            <h3 className="secondary-color">Spell Checker for VSCode</h3>{" "}
            <img src={diagonalArrowPink} alt="" className="diagonalArrow" />
          </a>
        </li>
      </ul>
    </TipsStyles>
  );
}

export default Tips;
