import styled from "styled-components";

const FeedbackStyles = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  gap: 50px;
  padding-top: 100px;
  padding-bottom: 150px;

  text-align: center;

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

  #email {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;
    padding-left: 20px;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    background-color: rgba(40, 42, 54, 0.1);

    transition: 0.15s ease;
    transition-property: color;

    button {
      border: none;
      outline: none;

      padding: 12px 16px;

      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 600;

      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;

      cursor: pointer;

      color: white;
      background-color: var(--primary);

      transition: 0.15s ease;
      transition-property: background-color;

      :hover {
        background-color: var(--primaryHovered);
      }
    }
  }
`;

export default FeedbackStyles;
