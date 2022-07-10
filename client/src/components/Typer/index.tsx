import React, { useState, useEffect, useCallback, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import api from "../../../../server/services/api";

import repeatIcon from "../../assets/repeatIcon.svg";
import downArrowGray from "../../assets/downArrowGray.svg";

import TyperStyles from "./styles";

const sample: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

function Typer() {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(3600);
  const [isActive, setIsActive] = useState(false);
  const [isClear, setIsClear] = useState(true);

  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);

  const seconds = timer / 60;
  const miliSeconds = timer % 60;

  const { user, isLogged } = useContext(AuthContext);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      const initialSampleCharacter = sample[0];

      if (key === initialSampleCharacter && !isActive) {
        setIsActive(true);
      } else if (!isActive) return;

      e.preventDefault();
      handleInput(e);
    },
    [isActive],
  );

  const handleInput = (e: KeyboardEvent) => {
    const key = e.key;
    const ctrlKey = e.ctrlKey;

    if (ctrlKey && key === "Backspace") {
      setInput((prev) =>
        prev[prev.length - 1] === " "
          ? prev
              .split(" ")
              .splice(0, prev.split(" ").length - 2)
              .join(" ") + " "
          : prev
              .split(" ")
              .splice(0, prev.split(" ").length - 1)
              .join(" ") + " ",
      );

      return;
    }

    if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (key === "Escape" || (ctrlKey && key.toUpperCase() === "R")) {
      handleTryAgain();
      return;
    }

    if (key.length !== 1) return;

    setInput((prev) => prev + key);
  };

  const handleEventListeners = useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  const handleFinish = useEffect(() => {
    if (input === sample && timer > 0 && isActive) {
      setIsActive(false);
      submitScore();
      return;
    }

    if (timer === 0 && isActive && input) {
      setIsActive(false);
      submitScore();
      return;
    }
  }, [input, timer]);

  const submitScore = () => {
    const score = {
      accuracy: accuracy,
      elapsedTime: `${60 - Math.floor(seconds)}:${miliSeconds >= 10 ? miliSeconds : "0" + miliSeconds}`,
      errors: errors,
      wpm: speed,
    };

    if (isLogged) {
      api.post("/userScores", { score: score, email: user.data.email });
      return;
    }

    console.log(score);
  };

  const handleTimer = useEffect(() => {
    if (isActive && timer > 0) {
      setTimeout(() => setTimer((prev) => prev - 1), 12.8125);
      setIsClear(false);
    }

    if (timer === 0) {
      setIsActive(false);
    }
  }, [timer, isActive]);

  const handleInfo = useEffect(() => {
    handleSpeed();
    handleAccuracy();
    handleErrors();
  }, [input, isActive]);

  const handleSpeed = () => {
    const words = input.split(" ").length;
    const elapsedTime = 60 - seconds;

    setSpeed(words !== 1 ? Math.floor((words * 60) / elapsedTime) : 0);
  };

  const handleAccuracy = () => {
    const sampleCharacters = sample.split("");
    const inputCharacters = input.split("");

    if (inputCharacters.length === 0) {
      setAccuracy(100);
      return;
    }

    const correctCharacters = inputCharacters.filter((character, index) => {
      if (character === sampleCharacters[index]) {
        return character;
      }
      return;
    });

    setAccuracy((correctCharacters.length / inputCharacters.length) * 100);
  };

  const handleErrors = () => {
    const sampleWords = sample.split(" ").slice(0, -1);
    const inputWords = input.split(" ").slice(0, -1);

    const incorrectWords = inputWords.filter((word, index) => {
      if (word === sampleWords[index]) {
        return;
      }
      return word;
    });

    setErrors(incorrectWords.length);
  };

  const handleVisualStatus = (character: string, index: number) => {
    const isCorrect = input[index] === character;
    const wasNotTyped = index >= input.length;

    if (wasNotTyped) {
      return;
    }

    if (isCorrect) {
      return "correct";
    }
    return "incorrect";
  };

  function StatusBar() {
    if (isActive) {
      return (
        <h4>{`${seconds >= 10 ? Math.floor(seconds) : +"0" + Math.floor(seconds)}:${
          miliSeconds >= 10 ? miliSeconds : "0" + miliSeconds
        }`}</h4>
      );
    } else {
      return isClear ? (
        <h4>start typing to begin</h4>
      ) : (
        <span id="try-again" onClick={handleTryAgain}>
          <h4 className="primary-color">try again</h4>
          <img src={repeatIcon} alt="Try again!" width={20} />
        </span>
      );
    }
  }

  const handleTryAgain = () => {
    setInput("");
    setTimer(3600);
    setIsActive(false);
    setIsClear(true);

    setSpeed(0);
    setAccuracy(100);
    setErrors(0);
  };

  return (
    <TyperStyles id="typer">
      <h1>
        Test your typing speed with <span className="primary-color">development</span> keywords.
      </h1>
      <div id="typer-container">
        <div id="info">
          <div>
            <span>
              <h4>≈</h4>
              <h3> {speed}</h3>
              <h4> words per minute</h4>
            </span>
            <span>
              <h3>{accuracy.toFixed(0)}</h3>
              <h4>% accuracy</h4>
            </span>
          </div>
          <div>
            <span>
              <h3 className="secondary-color">{errors}</h3>
              <h4> errors</h4>
            </span>
          </div>
        </div>
        <div id="typer-box" style={isActive ? { transform: "scale(1.01)" } : { transform: "scale(1)" }}>
          {sample.split("").map((character: string, index: number) => {
            return (
              <span key={index} className={handleVisualStatus(character, index)}>
                {character}
              </span>
            );
          })}
        </div>
        <StatusBar />
      </div>
      <div id="know-more">
        <h4>know more</h4>
        <img src={downArrowGray} alt="" width={40} />
      </div>
    </TyperStyles>
  );
}

export default Typer;
