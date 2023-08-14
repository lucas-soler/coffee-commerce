import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * a{
    text-decoration: none;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  #root{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

`;
