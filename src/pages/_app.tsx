import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {GlobalStyle} from "../styles/GlobalStyle";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import Forth from "../components/forth";
import Fifth from "../components/fifth";
import Sixth from "../components/sixth";
import Seventh from "../components/seventh";

const MyApp = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={({state, fullpageApi}) => {
       return (
         <>
            <GlobalStyle/>
            <ReactFullpage.Wrapper>
               {/*<div className="section"><First/></div>*/}
               {/*<div className="section"><Second/></div>*/}
               {/*<div className="section"><Third/></div>*/}
               {/*<div className="section"><Forth/></div>*/}
               {/*<div className="section"><Fifth/></div>*/}
               <div className="section"><Sixth/></div>
               <div className="section"><Seventh/></div>
            </ReactFullpage.Wrapper>
         </>
       );
    }}
  />
);

export default MyApp