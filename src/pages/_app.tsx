import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {GlobalStyle} from "../styles/GlobalStyle";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import Forth from "../components/forth";

const MyApp = () => (
  <ReactFullpage
    scrollingSpeed={1000}

    render={({state, fullpageApi}) => {
       return (
         <>
            <GlobalStyle/>
            <ReactFullpage.Wrapper>
               <div className="section"><First/></div>
               <div className="section"><Second/></div>
               <div className="section"><Third/></div>
               <div className="section"><Forth/></div>
            </ReactFullpage.Wrapper>
         </>
       );
    }}
  />
);

export default MyApp