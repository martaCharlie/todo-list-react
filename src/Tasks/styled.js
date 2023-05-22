import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  /* Keyword values */
  word-break: break-word;
  /* deprecated */

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
