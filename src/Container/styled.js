import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
