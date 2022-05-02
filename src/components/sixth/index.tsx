import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Sixth = () => {
   return (
     <S.Positioner>
        <S.Wrapper>

        </S.Wrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Sixth;