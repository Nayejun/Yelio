import React, {useState} from "react";
import dynamic from "next/dynamic";
import Image from 'next/image'
import * as S from "./style"
import EZY from "../../assets/images/Project/EZY.png";
import GCINSIDE from "../../assets/images/Project/GCINSIDE.png";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})
const Flip = require("react-reveal/Flip")
const Slide = require("react-reveal/Slide")


const Forth = () => {
   return (
     <S.Positioner>
        <S.Wrapper>
           <S.TextWrapper>
              <S.Projects>Projects</S.Projects>
              <S.About>제가 참여했던 프로젝트를 소개합니다.</S.About>
           </S.TextWrapper>
           <S.BoxWrapper>
              <S.ProjectAbout>
                 <S.HideWrapper>Frontend Developer, QA</S.HideWrapper>
                 <S.Box1>
                    <Flip left>
                       <Image
                         className="project-EZY"
                         src={EZY.src}
                         alt="Picture of the author"
                         width={300}
                         height={360}
                         draggable="false"
                       />
                    </Flip>
                 </S.Box1>
                 <S.About className="EZY">EZY</S.About>
                 <S.Line/>
                 <S.About className="EZY-About"><Slide top>일정관리 iOS 서비스 'EZY' 의 프로모션 페이지를 개발합니다.</Slide></S.About>
              </S.ProjectAbout>
              <S.ProjectAbout>
                 <S.HideWrapper className="position">Frontend Developer, PM</S.HideWrapper>
                 <S.Box2>
                    <Flip right>
                       <Image
                         className="project-GCINSIDE"
                         src={GCINSIDE.src}
                         alt="Picture of the author"
                         width={700}
                         height={450}
                         draggable="false"
                       />
                    </Flip>
                 </S.Box2>
                 <S.About className="GC">GCINSIDE</S.About>
                 <S.Line className="GC-Line"/>
                 <S.About className="GC-About"><Slide top>광주소프트웨어마이스터고등학교 학생 커뮤니티 서비스를 개발합니다.</Slide></S.About>
              </S.ProjectAbout>
           </S.BoxWrapper>
        </S.Wrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Forth;