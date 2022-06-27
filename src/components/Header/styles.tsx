import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;

  width: 60vw;

  justify-content: space-between;

  padding: 50px 0;

  div {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;
  }

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    a {
      text-decoration: none;
      color: var(--textStrong);

      transition: 0.15s ease;
      transition-property: color;

      :hover {
        color: var(--primary);
      }
    }
  }

  #singup {
    color: var(--primary);

    transition: 0.15s ease;
    transition-property: color;

    :hover {
      color: var(--primaryHovered);
    }
  }

  #login {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 10px;

    padding: 8px 16px;

    border-radius: 4px;

    color: white;
    background-color: var(--primary);

    transition: 0.15s ease;
    transition-property: background-color;

    :hover {
      background-color: var(--primaryHovered);
    }

    img {
      transform: translateX(-2px);

      transition: 0.15s ease;
      transition-property: transform;
    }

    :hover img {
      transform: translateX(2px);
    }
  }
`;

export default HeaderStyles;
