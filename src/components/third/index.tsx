import React from "react";
import * as S from "./style";
import Image from 'next/image'
import Profile from "../../assets/images/Profile/profile.png";
import dynamic from "next/dynamic";
const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Third = () => {
   return (
     <S.Positioner>
        <S.ProfileWrapper>
              <Image
                className="my-img"
                src={Profile.src}
                alt="Picture of the author"
                width={400}
                height={460}
              />
           <S.ProfileRight>
              <S.ProfileLine/>
              <S.Information>
                 나예준
                 <span className="position">Frontend Developer</span>
                 <span className="mbti">INTJ</span>
                 <span className="birthday">2004.07.05</span>
              </S.Information>
           </S.ProfileRight>
        </S.ProfileWrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Third;