import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: ${theme.fonts};
    color: ${theme.colors.capeCod};
    background: ${theme.colors.athensGray};
  }
  input {
    border: 0;
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.athensGray};
    &:focus {
      outline: 0
    }
  }
  button {
    border: 0;
    background: ${theme.colors.sunsetOrange};
    color: ${theme.colors.white};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.spacing.sm};
    cursor: pointer;
  }
`;

export default GlobalStyle;
