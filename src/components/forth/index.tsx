import React from "react";
import dynamic from "next/dynamic";
import Image from 'next/image'
import * as S from "./style"
import EZY from "../../assets/images/EZY.png";
import GCINSIDE from "../../assets/images/GCINSIDE.png";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Forth = () => {
   return (
     <S.Positioner>
        <BackgroundImg/>
        <S.Wrapper>
           <S.TextWrapper>
              <S.Projects>Projects</S.Projects>
              <S.About>제가 참여했던 프로젝트를 소개합니다.</S.About>
           </S.TextWrapper>
           <S.BoxWrapper>
              <S.Box1>
                 <Image
                   className="project-EZY"
                   src={EZY.src}
                   alt="Picture of the author"
                   width={300}
                   height={360}
                 />
              </S.Box1>
              <S.Box2>
                 <Image
                   className="project-GCINSIDE"
                   src={GCINSIDE.src}
                   alt="Picture of the author"
                   width={1300}
                   height={800}
                 />
              </S.Box2>
           </S.BoxWrapper>
        </S.Wrapper>
     </S.Positioner>
   );
}

export default Forth;