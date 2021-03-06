import React from "react";
import * as S from "./style";
import Image from 'next/image'
import Profile from "../../assets/images/Profile/profile.png";
import dynamic from "next/dynamic";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})
const Flip = require("react-reveal/Flip")
const Slide = require("react-reveal/Slide")
const Fade = require("react-reveal/Fade")

const Third = () => {
   return (
     <S.Positioner>
        <S.ProfileWrapper>
           <Flip top>
              <Image
                className="my-img"
                src={Profile.src}
                alt="Picture of the author"
                width={400}
                height={460}
                draggable="false"
              />
           </Flip>
           <S.ProfileRight>
              <S.ProfileLine/>
              <S.Information>
                 나예준
                 <Slide top><span className="position">Frontend Developer</span></Slide>
                 <Slide top><span className="mbti">INTJ</span></Slide>
                 <Slide top><span className="birthday">2004.07.05</span></Slide>
              </S.Information>
           </S.ProfileRight>
        </S.ProfileWrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Third