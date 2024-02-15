import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Open Sans;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 33px;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 28px;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 23px;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
  }
`;

export default GlobalStyles;
