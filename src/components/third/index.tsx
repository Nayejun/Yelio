import React from "react";
import * as S from "./style";
import Image from 'next/image'
import Profile from "../../assets/images/profile.png";
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
                 <p className="position">Frontend Developer</p>
                 <p className="mbti">INTJ</p>
                 <p className="birthday">2004.07.05</p>
              </S.Information>
           </S.ProfileRight>
        </S.ProfileWrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Third;