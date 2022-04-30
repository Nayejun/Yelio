import React from "react";
import dynamic from "next/dynamic"
import * as S from "./style";
import {BGImage} from "./BGImage";

// const BgImage = dynamic(()=>import("./BGImage"), {
//    ssr: false
// })

const Second = () => {
   return (
     <>
        <S.Wrapper>
           <BGImage/>
        </S.Wrapper>
     </>
   );
}

export default Second;