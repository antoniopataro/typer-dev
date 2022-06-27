import styled from "styled-components";

const TyperStyles = styled.section`
  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  gap: 150px;
  padding-top: 50px;
  padding-bottom: 50px;

  text-align: center;

  h1 {
    padding: 0 100px;
  }

  #typer-container {
    display: flex;
    flex-direction: column;

    width: 450px;

    align-items: center;

    gap: 10px;

    #info {
      display: flex;
      flex-direction: row;

      width: 100%;

      gap: 20px;
      padding: 0 20px;

      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: row;

        gap: 20px;
      }

      span {
        display: flex;
        flex-direction: row;
      }
    }

    #typer-box {
      text-align: left;

      width: 100%;
      min-height: 200px;
      height: fit-content;

      padding: 20px;

      font-family: "Fira Code", sans-serif;
      font-size: 16px;
      font-weight: 500;

      resize: none;

      border-radius: 4px;

      color: white;
      background-color: var(--textStrong);

      transition: 0.15s ease;
      transition-property: transform;

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }

      span {
        :first-child {
          border-top-left-radius: 4px;
        }

        :last-child {
          border-bottom-right-radius: 4px;
        }
      }

      .correct {
        color: var(--primary);
      }

      .incorrect {
        background-color: var(--secondary-background-faded);
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: var(--secondary);
      }
    }

    #try-again {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 10px;

      cursor: pointer;

      :hover img {
        transform: rotate(180deg);
      }

      img {
        transform: rotate(90deg);

        transition: 0.15s ease;
        transition-property: transform;
      }
    }
  }

  #know-more {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 10px;
  }
`;

export default TyperStyles;
