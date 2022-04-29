import styled from "styled-components";
import Bg from "../../assets/images/bg.png";

export const wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #98AFFF;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const WhoAmI = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 85px;
  color: white;
  margin-left: -80vh;
  z-index: 1;
`;

export const Rectangle = styled.div`
  z-index: 0;
  background: radial-gradient(103.86% 103.86% at 77.8% 89.02%, #5871FF 0%, #7A85FF 40.5%, #F2CEF2 96%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0 23px 186px rgba(255, 255, 255, 0.2);
  border-radius: 359.5px;
`;
export const Rectangle1 = styled(Rectangle)`
  width: 165px;
  height: 165px;
  margin-left: -40vh;
  margin-top: -60vh;
`;
export const Rectangle2 = styled(Rectangle)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 330px;
  height: 330px;
  margin-top: 63.9vh;
  -webkit-border-radius: 0 300px 0 0;
  -moz-border-radius: 0 300px 0 0;
`;
export const Rectangle3 = styled(Rectangle)`
  width: 650px;
  height: 650px;
`;
export const Rectangle4 = styled(Rectangle)`
  width: 460px;
  height: 460px;
`;
export const Line1 = styled.div`
  width: 1px;
  height: 1080px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transform: rotate(22.5deg);
`;
export const Line2 = styled(Line1)`
  transform: rotate(21deg);
`;
export const Blur = styled.div`
  background: linear-gradient(90deg, rgba(122, 133, 255, 0.1) 0%, rgba(122, 133, 255, 0) 119.73%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
`
export const Blur1 = styled(Blur)`
  width: 1600px;
  height: 848px;
  clip-path: polygon(0 0, 100% 0, 78% 100%, 0% 100%);
`;
export const Blur2 = styled(Blur)`
  width: 110vh;
  height: 100vh;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0% 100%);
`;
