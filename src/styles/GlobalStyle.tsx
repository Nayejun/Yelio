import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }

  body {
    padding: 0;
    margin: 0;
    font-family: AppleSDGothicNeo, sans-serif;
  }

  //Heavy, Extra-Bole, Thin, Regular, Light, Semi-Bold, Ultra-Thin
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 100;
       src: url("//public/fonts/AppleSDGothicNeoT.ttf") format("truetype");
     }
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 200;
       src: url("//public/fonts/AppleSDGothicNeoL.ttf") format("truetype");
     }
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 300;
       src: url("//public/fonts/AppleSDGothicNeoR.ttf") format("truetype");
     }
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 500;
       src: url("//public/fonts/AppleSDGothicNeoB.ttf") format("truetype");
     }
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 600;
       src: url("//public/fonts/AppleSDGothicNeoH.ttf") format("truetype");
     }
     @font-face {
       font-family: "AppleSDGothicNeo";
       font-weight: 700;
       src: url("//public/fonts/AppleSDGothicNeoEB.ttf") format("truetype");
     }
`;