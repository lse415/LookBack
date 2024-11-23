import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f7f3;
    color: #3e3e3e;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden; 
  }

  h1 {
    font-family: 'Noto Serif', serif;
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
