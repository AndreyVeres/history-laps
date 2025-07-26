import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

*::before,
*::after {
  box-sizing: border-box;
}

body , html {
  min-height: 100vh;
  font-weight: 500;
  height: 100%;
 
}

html {
  background-color: #f4f5f9;
  color: ${({ theme }) => theme.colors.primary};
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

li {
    list-style-type: none;
}

input,button,textarea,select {
  font: inherit;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

`;
