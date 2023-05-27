import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Monserrat', sans-serif;
  background: ${({ theme }) => theme.color.gallery};

  button {
    cursor: pointer;
  }
}
`;
