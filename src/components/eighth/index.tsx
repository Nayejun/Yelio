import React from "react";
import * as S from "./style";
import {Fade} from "react-reveal";

const Eighth = () => {
   return (
     <S.Positioner>
        <S.Wrapper>
           <Fade top><S.About className="title">Pleasant, Sensuous, meticulous, Cool</S.About></Fade>
           <Fade top><S.About className="position">Frontend Developer</S.About></Fade>
           <Fade top><S.About className="identity">유쾌한, 감각적인, 꼼꼼한, 쿨한 프론트엔드 개발자</S.About></Fade>
        </S.Wrapper>
        <S.Footer>
           <S.AboutWrapper>
              <S.AboutWrapperTitle><S.Line/><S.About>Email</S.About></S.AboutWrapperTitle>
              <S.About className="email">nayejun.me@gmail.com</S.About>
              <S.AboutWrapperTitle><S.Line/><S.About>Github</S.About></S.AboutWrapperTitle>
              <S.About className="github">
                 <a href="https://github.com/Nayejun" target ="_blank">https://github.com/Nayejun</a>
              </S.About>
           </S.AboutWrapper>
        </S.Footer>
        <S.Rectangle1/>
        <S.Rectangle2/>
        <S.Rectangle3/>
     </S.Positioner>
   );
}

export default Eighth;