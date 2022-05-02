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
           <S.TextWrapper>
              <S.Text>Skills</S.Text>
              <S.About>제가 사용할 수 있는 기술들입니다.</S.About>
           </S.TextWrapper>
        </S.Wrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Sixth;