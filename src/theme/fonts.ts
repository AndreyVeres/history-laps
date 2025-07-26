import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`

  @font-face {
    font-family: "PT Sans";
    src: url('/fonts/pt-sans-regular.woff2') format('woff2'); 
    font-weight: 400; 
    font-style: normal;
    font-display: swap; 
  }

  body {
    font-family: "PT Sans", sans-serif;
  }
`;
