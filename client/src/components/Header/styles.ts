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

    gap: 10px;
  }

  nav {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    @media (max-width: 735px) {
      display: none;
    }

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

  #profile {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 10px;

    text-decoration: none;

    :hover {
      h3 {
        color: var(--primaryHovered);
      }

      img {
        transform: scale(1.05);
      }
    }

    h3 {
      color: var(--primary);

      transition: 0.15s ease;
      transition-property: color;

      @media (max-width: 375px) {
        display: none;
      }
    }

    img {
      border-radius: 50%;

      transition: 0.15s ease;
      transition-property: transform;
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
