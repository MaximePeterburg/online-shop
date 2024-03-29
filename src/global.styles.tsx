import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  margin: 0;
  padding: 20px 40px;
  /* font-family: 'Sofia Sans Semi Condensed', sans-serif; */
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media screen and (max-width:800px){
    padding: 1rem 0.5rem;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
