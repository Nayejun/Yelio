import React from "react";
import * as S from "./style";
import Image from 'next/image'
import dynamic from "next/dynamic";
import React_Img from "../../assets/images/Skills/React_Img.png";
import TS_Img from "../../assets/images/Skills/TS_Img.png";
import Styled_Img from "../../assets/images/Skills/Styled_Img.png";
import NEXT_Img from "../../assets/images/Skills/NEXT_Img.png"
import SWR_Img from "../../assets/images/Skills/SWR_Img.png"
import Emotion_Img from "../../assets/images/Skills/Emotion_Img.png"
import {Fade} from "react-reveal";


const BackgroundImg = dynamic(() => import("./BgImg"), {
   ssr: false
})

const Sixth = () => {
   return (
     <S.Positioner>
        <S.Wrapper>
           <S.TextWrapper>
              <S.Text>Skills</S.Text>
              <S.About>제가 사용할 수 있는 기술들입니다.</S.About>
           </S.TextWrapper>
           <S.MainSkills>
              <S.React>
                 <Fade top>
                    <Image
                      className="React Logo"
                      src={React_Img.src}
                      alt="Picture of the author"
                      width={130}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="React">React</S.SkillsName>
              </S.React>
              <S.TypeScript>
                 <Fade top>
                    <Image
                      className="TypeScript Logo"
                      src={TS_Img.src}
                      alt="Picture of the author"
                      width={130}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="TypeScript">TypeScript</S.SkillsName>
              </S.TypeScript>
           </S.MainSkills>
           <S.SubSkills>
              <S.StyledComponents>
                 <Fade left>
                    <Image
                      className="styled-components Logo"
                      src={Styled_Img.src}
                      alt="Picture of the author"
                      width={130}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="styled-components">styled-components</S.SkillsName>
              </S.StyledComponents>
              <S.NEXT>
                 <Fade top>
                    <Image
                      className="NEXT.js Logo"
                      src={NEXT_Img.src}
                      alt="Picture of the author"
                      width={298}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="NEXT">NEXT.js</S.SkillsName>
              </S.NEXT>
              <S.SWR>
                 <Fade top>
                    <Image
                      className="SWR Logo"
                      src={SWR_Img.src}
                      alt="Picture of the author"
                      width={231}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="SWR">SWR</S.SkillsName>
              </S.SWR>
              <S.Emotion>
                 <Fade right>
                    <Image
                      className="Emotion Logo"
                      src={Emotion_Img.src}
                      alt="Picture of the author"
                      width={130}
                      height={130}
                    />
                 </Fade>
                 <S.SkillsName className="Emotion">Emotion</S.SkillsName>
              </S.Emotion>
           </S.SubSkills>
        </S.Wrapper>
        <BackgroundImg/>
     </S.Positioner>
   );
}

export default Sixth;