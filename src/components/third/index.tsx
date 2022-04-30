import React from "react";
import * as S from "./style";
import Image from 'next/image'
import Profile from "../../assets/images/Profile.png";

const Third = () => {
   return (
     <S.Positioner>
        <S.ProfileWrapper>
           <Image
             src={Profile.src}
             alt="Picture of the author"
             width={400}
             height={450}
           />
           <S.Information>
              나예준
           </S.Information>
        </S.ProfileWrapper>
     </S.Positioner>
   );
}

export default Third;