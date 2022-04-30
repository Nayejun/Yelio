import React from "react";
import dynamic from "next/dynamic";
import * as S from "./style";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Second = () => {
   return (
     <>
        <S.Wrapper>
           <S.WhoAreYou>Who are you ?</S.WhoAreYou>
           <BackgroundImg/>
        </S.Wrapper>
     </>
   );
}

export default Second;