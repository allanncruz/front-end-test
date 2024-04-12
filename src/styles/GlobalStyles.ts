import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  button{
    cursor: pointer;
  }

  html, body, #root{
    height: 100%;
  }

  a{
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
`;