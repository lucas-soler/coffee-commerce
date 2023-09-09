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
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  #root{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    padding: 2.5rem 10rem;
    max-width: 90rem;
    background-color: ${(props) => props.theme["gray-100"]};

    @media only screen and (max-width: 1025px) {
      padding: 2rem 2rem;
    }

  }

`;
