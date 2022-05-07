import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})
const Slide = require("react-reveal/Slide")

const Seventh = () => {
   return (
     <S.Positioner>
        <S.Wrapper>
           <S.Left>
              <S.Experienced>Experienced</S.Experienced>
           </S.Left>
           <S.Line/>
           <S.Right>
              <Slide top><S.Experienced className="KDN">한전 KDN 빛가람에너지밸리 소프트웨어 경진대회</S.Experienced></Slide>
              <S.About>- 장려상 (2020.11)</S.About>
              <Slide top><S.Experienced className="AI">한국과학기술정보통신부 인공지능 아이디어 공모전</S.Experienced></Slide>
              <S.About>- 최우수상 (2020.12)</S.About>
              <Slide top><S.Experienced className="SW">2021 소프트웨어마이스터 4개교 연합 해커톤</S.Experienced></Slide>
              <S.About>- Frontend Developer</S.About>
              <Slide top><S.Experienced className="SAM">삼성 주니어 소프트웨어 공모전</S.Experienced></Slide>
              <S.About>- Designer</S.About>
           </S.Right>
        </S.Wrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Seventh;