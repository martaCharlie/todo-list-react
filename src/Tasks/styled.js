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
  border-bottom: 1px solid ${({ theme }) => theme.color.grayish};
  /* Keyword values */
  word-break: break-word;
  /* deprecated */

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0px;
  transition: filter 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: ${({ theme }) => theme.color.forestGreen};

      &:hover {
        filter: brightness(120%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.crimson};

      &:hover {
        filter: brightness(120%);
      }
    `}
`;
