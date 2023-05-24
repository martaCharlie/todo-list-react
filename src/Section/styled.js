import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grayish};
`;

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.grayish};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.color.mobileFeature}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const StyledBody = styled.div`
  padding: 20px;
`;
