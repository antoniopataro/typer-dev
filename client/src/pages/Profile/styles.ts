import styled from "styled-components";

const ProfileStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  align-items: center;

  gap: 20px;

  header {
    display: flex;
    flex-direction: row;

    width: 60vw;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    a {
      display: flex;
      flex-direction: row;

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

    #user-info {
      display: flex;
      flex-direction: row;

      width: 60vw;

      align-items: center;

      gap: 20px;
      padding: 50px 0;

      img {
        aspect-ratio: 1;
        border-radius: 50%;

        cursor: pointer;

        transition: 0.15s ease;
        transition-property: filter;

        :hover {
          filter: brightness(75%);
        }
      }

      h2 {
        font-size: 20px;
      }

      #user-email {
        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 10px;

        color: var(--text);

        img {
          border-radius: 0;
        }
      }

      button {
        display: flex;

        width: fit-content;

        padding: 8px 16px;

        outline: none;
        border: none;

        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 500;

        border-radius: 4px;

        cursor: pointer;

        color: white;
        background-color: var(--primary);

        transition: 0.15s ease;
        transition-property: background-color color;

        :hover {
          background-color: var(--primaryHovered);
        }
      }
    }
  }

  main {
    width: 60vw;

    padding: 50px 0;

    table {
      width: 100%;

      thead tr th h3 {
        color: var(--text);
      }

      tbody tr {
        background-color: #eaeaeb;
      }

      tbody tr td h4 {
        text-align: left;

        padding: 0 50px;

        overflow: hidden;
      }

      th,
      td {
        :first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        :last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        padding: 8px 0px;

        text-align: center;

        color: var(--textHovered);
      }
    }
  }

  #change-avatar-modal-container {
    position: fixed;

    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;

    opacity: ${(props) => (props["aria-modal"] ? "1" : "0")};
    pointer-events: ${(props) => (props["aria-modal"] ? "auto" : "none")};

    transition: 0.15s ease;

    background-color: rgba(0, 0, 0, 0.25);

    #change-avatar-modal {
      position: fixed;

      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 10px;

      opacity: ${(props) => (props["aria-modal"] ? "1" : "0")};
      transform: ${(props) => (props["aria-modal"] ? "scale(1.1)" : "scale(1)")};

      transition: 0.15s ease;
      transition-property: opacity transform;

      #close-button {
        position: absolute;

        right: -30px;

        display: grid;
        place-items: center;

        padding: 8px;

        outline: none;
        border: none;

        cursor: pointer;

        background-color: transparent;
      }

      input {
        padding: 8px 16px;

        outline: none;
        border: none;

        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 500;

        border-radius: 4px;

        color: var(--textHovered);

        transition: 0.15s ease;
        transition-property: background-color color;
      }

      #submit-button {
        padding: 8px 16px;

        outline: none;
        border: none;

        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 500;

        border-radius: 4px;

        cursor: pointer;

        color: white;
        background-color: var(--primary);

        transition: 0.15s ease;
        transition-property: background-color color;

        :hover {
          background-color: var(--primaryHovered);
        }
      }
    }
  }
`;

export default ProfileStyles;
