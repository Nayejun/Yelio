import React from "react";
import dynamic from "next/dynamic";
import * as S from "./style";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})
const Fade = require("react-reveal/Fade")

const Second = () => {
   return (
     <>
        <S.Wrapper>
           <S.WhoAreYou><Fade top>Who Am I ?</Fade></S.WhoAreYou>
           <BackgroundImg/>
        </S.Wrapper>
     </>
   );
}

export default Second;