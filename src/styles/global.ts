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

  html {
    overflow-y: scroll;
  }

  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 2.5rem 10rem;
    max-width: 90rem;
    background-color: ${(props) => props.theme["gray-100"]};

    @media only screen and (max-width: 1025px) {
      padding: 2rem 2rem;
    }

  }

`;
