import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.fonts};
  }
`;

export default GlobalStyle;
