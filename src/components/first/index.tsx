import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";

// const BackgroundImg = dynamic(() => import(), {
//    ssr: false
// })

const First = () => {
   return (
     <>
        <S.wrapper>
           {/*<S.WhoAmI>안녕하세요<br/>나예준입니다.</S.WhoAmI>*/}
           {/*<S.WhoAmI>.</S.WhoAmI>*/}
           {/*<BackgroundImg/>*/}
        </S.wrapper>
     </>
   );
}

export default First;