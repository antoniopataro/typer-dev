import styled from "styled-components";

const TipsStyles = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  gap: 100px;
  padding-top: 100px;
  padding-bottom: 150px;

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

  ul {
    display: flex;
    flex-direction: row;

    height: 250px;

    gap: 50px;

    li {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      justify-content: space-between;

      gap: 10px;

      list-style: none;

      .tip-container {
        display: flex;
        flex-direction: column;

        list-style: none;

        width: 100%;

        gap: 10px;

        .image {
          display: grid;
          place-items: center;

          width: 50px;
          height: 50px;

          border-radius: 4px;
        }
      }

      a {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 4px;

        text-decoration: none;

        img {
          transition: 0.15s ease;
          transition-property: transform;
        }

        :hover .diagonalArrow {
          transform: translateX(2px) translateY(-2px);
        }

        :hover .upArrow {
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export default TipsStyles;
