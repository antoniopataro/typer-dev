import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;

  width: 60vw;

  align-items: center;

  gap: 20px;
  padding-bottom: 100px;

  a {
    text-decoration: none;
    color: var(--primary);

    transition: 0.15s ease;
    transition-property: color;

    :hover {
      color: var(--primaryHovered);
    }
  }
`;

export default FooterStyles;
