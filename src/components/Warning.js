import React from "react";
import styled from "styled-components";
import AlertIcon from "../assets/alert-triangle.svg";

const WarningStyles = styled.div`
  max-width: 65ch;
  background-color: var(--white);
  color: var(--warning);
  border: 2px solid var(--warning);
  padding: 0 1rem;
  border-radius: var(--roundedCorner);
  display: grid;
  gap: 5px;
  grid-template-columns: 5% 15% auto;
  align-items: center;

  /* font-weight: 600; */

  span {
    font-weight: 600;
  }
`;

export const Warning = ({ children }) => {
  return (
    <WarningStyles>
      <img src={AlertIcon} />
      <span>Warning!</span>
      <p>{children}</p>
    </WarningStyles>
  );
};
