import React from "react";
import styled from "styled-components";
import ClipboardIcon from "../assets/clipboard.svg";

const TipStyles = styled.div`
  max-width: 65ch;
  background-color: var(--accent);
  padding: 0 1rem;
  border-radius: var(--roundedCorner);
  display: grid;
  gap: 5px;
  grid-template-columns: 5% 10% auto;
  align-items: center;

  span {
    font-weight: 600;
  }
`;

export const Tip = ({ children }) => {
  return (
    <TipStyles>
      <img src={ClipboardIcon} />
      <span>Tip!</span>
      <p>{children}</p>
    </TipStyles>
  );
};
