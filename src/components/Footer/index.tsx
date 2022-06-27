import githubIcon from "../../assets/githubIcon.svg";

import FooterStyles from "./styles";

function Footer() {
  return (
    <FooterStyles>
      <a href="https://github.com/antoniopataro" target={"_blank"}>
        <img src={githubIcon} alt="Creator's Github Profile" width={40} />
      </a>
      <h4>
        Built by{" "}
        <a href="https://antoniopataro.dev/" target={"_blank"}>
          Antônio
        </a>
      </h4>
    </FooterStyles>
  );
}

export default Footer;
