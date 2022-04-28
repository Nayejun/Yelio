import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";
import Image from "next/image";
import {Rectangle2} from "./style";

// const Rectangle = dynamic(() => import("../../assets/images/Rectangle.png"), {
//    ssr: false
// })

const First = () => {
   return (
     <>
        <S.wrapper>
           <S.WhoAmI>안녕하세요<br/>나예준입니다.</S.WhoAmI>
           <S.Rectangle1/>
           <S.Rectangle2/>
           <S.Rectangle3/>
           <S.Blur/>
        </S.wrapper>
     </>
   );
}

export default First;