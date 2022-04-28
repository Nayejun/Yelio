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
    font-family: "AppleSDGothicNeoT";
    font-weight: 100;
    src: url("/public/fonts/AppleSDGothicNeoT.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoL";
    font-weight: 200;
    src: url("/public/fonts/AppleSDGothicNeoL.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoR";
    font-weight: 300;
    src: url("/public/fonts/AppleSDGothicNeoR.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoB";
    font-weight: 500;
    src: url("/public/fonts/AppleSDGothicNeoB.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoH";
    font-weight: 600;
    src: url("/public/fonts/AppleSDGothicNeoH.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoEB";
    font-weight: 700;
    src: url("/public/fonts/AppleSDGothicNeoEB.ttf") format("truetype");
  }
`;