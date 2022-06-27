import diagonalArrowGray from "../../assets/diagonalArrowGray.svg";

import AboutStyles from "./styles";

function About() {
  return (
    <AboutStyles id="about">
      <header>
        <div className="title">
          <h4 className="title-indicator">About</h4>
          <h1>About this website.</h1>
        </div>
      </header>

      <h4>
        <p>
          <strong>TyperDev</strong> is a project being built by a software engineering student from Brazil.
          <br />
          <br /> The idea came when I (the creator) was looking for a new keyboard, since my ‘N’ key was screwed. When
          watching some reviews on YouTube for a particular keyboard, I got a recommendation for a video of an Asian guy
          typing like a machine. Right away I wanted to check out if I could do at least half of what he was doing. When
          searching for those typing tests websites, I realized that there were none for specifically programmers. Maybe
          it’s because there’s no really need for that, but I wanted to create one anyway.
        </p>
      </h4>
      <a href="https://antoniopataro.dev/" target={"_blank"}>
        <h3>Know more about me</h3> <img src={diagonalArrowGray} alt="" width={15} className="diagonalArrow" />
      </a>
    </AboutStyles>
  );
}

export default About;
