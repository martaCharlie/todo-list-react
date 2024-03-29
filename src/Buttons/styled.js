import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileFeature}px) {
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: filter 0.3s;
  flex-wrap: wrap;

  &:hover {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileFeature}px) {
    flex-wrap: wrap;
    align-self: center;
    flex-basis: 100%;
  }
`;
