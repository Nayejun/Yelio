import styled from "styled-components";

export const wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #98AFFF;
  overflow-y: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const WhoAmI = styled.p`
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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export const Rectangle1 = styled(Rectangle)`
  width: 20vh;
  height: 20vh;
  margin-top: 10vh;
  margin-left: 32vh;
`;
export const Rectangle2 = styled(Rectangle)`
  width: 35vh;
  height: 35vh;
  margin-left: -10vh;
  margin-top: 70vh;
`;
export const Rectangle3 = styled(Rectangle)`
  width: 70vh;
  height: 70vh;
  margin-top: 15vh;
  margin-left: 90vh;
`;
export const Rectangle4 = styled(Rectangle)`
  width: 30vh;
  height: 30vh;
  margin-top: 75vh;
  margin-left: 167vh;
`;
export const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(122, 133, 255, 0.1) 0%, rgba(122, 133, 255, 0) 119.73%);
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
export const Blur1 = styled(Blur)`
  width: 140vh;
  height: 150vh;
  margin-top: -30vh;
  margin-left: -20vh;
  transform: rotate(18deg);
`;
export const Blur2 = styled(Blur)`
  margin-left: 135vh;
  width: 100vh;
  height: 150vh;
  transform: rotate(18deg);
`;
