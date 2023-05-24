import styled, { css } from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileFeature}) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray};
  }
`;
