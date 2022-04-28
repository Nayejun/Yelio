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
  font-size: 70px;
  line-height: 90px;
  color: white;
  margin-left: -80vh;
  z-index: 1;
`;

export const Rectangle = styled.div`
  z-index: 0;
  position: absolute;
  background: radial-gradient(103.86% 103.86% at 77.8% 89.02%, #5871FF 0%, #7A85FF 40.5%, #F2CEF2 96%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0px 23px 186px rgba(255, 255, 255, 0.2);
  border-radius: 359.5px;
`;
export const Rectangle1 = styled(Rectangle)`
  margin-left: -50vh;
  margin-top: -30vh;
  width: 200px;
  height: 200px;
`;
export const Rectangle2 = styled(Rectangle)`
  width: 460px;
  height: 460px;
  margin-left: -90vh;
  margin-top: 45vh;
`;
export const Rectangle3 = styled(Rectangle)`
  width: 680px;
  height: 680px;
  margin-left: 50vh;
`;
export const Blur = styled.div`
  margin-left: -40vh;
  width: 1250px;
  height: 2000px;
  position: absolute;
  background: linear-gradient(90deg, rgba(122, 133, 255, 0.1) 0%, rgba(122, 133, 255, 0) 119.73%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  backdrop-filter: blur(18px);
  transform: rotate(20deg);
`;