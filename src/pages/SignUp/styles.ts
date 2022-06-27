import styled from "styled-components";

const SignUpStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  gap: 50px;

  a {
    display: flex;
    flex-direction: row;

    width: 60vw;

    gap: 10px;

    text-decoration: none;

    img {
      transform: translateX(2px);

      transition: 0.15s ease;
      transition-property: transform;
    }

    :hover img {
      transform: translateX(-2px);
    }
  }

  form {
    display: flex;
    flex-direction: column;

    width: 300px;

    align-items: center;

    gap: 20px;

    div {
      position: relative;

      display: flex;
      flex-direction: row;

      width: 100%;

      align-items: center;

      input {
        width: 300px;

        border: none;
        outline: 2px solid transparent;

        padding: 12px 16px;

        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 500;

        border-radius: 4px;

        background-color: rgba(40, 42, 54, 0.1);

        transition: 0.15s ease;
        transition-property: outline-color;

        :focus {
          outline-color: var(--primary);
        }
      }

      span {
        position: absolute;

        width: fit-content;

        left: 300px;

        margin-left: 20px;

        font-size: 12px;
        color: var(--secondary);
      }
    }

    button {
      width: fit-content;

      border: none;
      outline: none;

      padding: 8px 16px;

      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 600;

      border-radius: 4px;

      cursor: pointer;

      color: white;
      background-color: var(--primary);

      transition: 0.15s ease;
      transition-property: background-color;

      :hover {
        background-color: var(--primaryHovered);
      }
    }

    a {
      width: fit-content;

      text-decoration: none;
      color: var(--textStrong);

      transition: 0.15s ease;
      transition-property: color;

      :hover {
        color: var(--primary);
      }
    }
  }
`;

export default SignUpStyles;
