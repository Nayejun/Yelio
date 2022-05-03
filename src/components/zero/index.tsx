import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Zero = () => {
   return (
     <S.Positioner>
        <S.Text>I, Can</S.Text>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Zero;
