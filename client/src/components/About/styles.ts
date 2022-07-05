import styled from "styled-components";

const AboutStyles = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  gap: 50px;
  padding-top: 100px;
  padding-bottom: 150px;

  text-align: center;

  @media (max-width: 960px) {
    padding-top: 50px;
    padding-bottom: 75px;
  }

  header {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    gap: 50px;

    .title {
      position: relative;

      display: flex;

      align-items: center;
      justify-content: center;

      position: relative;

      width: 100%;

      .title-indicator {
        position: absolute;

        left: 0;
      }
    }
  }

  a {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 4px;

    text-decoration: none;

    color: inherit;

    img {
      transition: 0.15s ease;
      transition-property: transform;
    }

    :hover .diagonalArrow {
      transform: translateX(2px) translateY(-2px);
    }
  }
`;

export default AboutStyles;
