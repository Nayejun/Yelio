import React from "react";
import * as S from "./style";
import dynamic from "next/dynamic";

const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})
const Fade = require("react-reveal/Fade")

const Zero = () => {
   return (
     <S.Positioner>
        <S.Text><Fade top>I, Can</Fade></S.Text>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Zero;
