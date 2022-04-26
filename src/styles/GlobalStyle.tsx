import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, InkLipquid, sans-serif;
  }
  //Heavy, Extra-Bole, Thin, Regular, Light, Semi-Bold, Ultra-Thin
  @font-face {
    font-family: "AppleSDGothicNeoB";
    font-weight: 200;
    src: url("/public/fonts/AppleSDGothicNeoB.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoH";
    font-weight: 200;
    src: url("/public/fonts/AppleSDGothicNeoH.ttf") format("truetype");
  }
`;