import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Footer = styled(Center)`
  width: 100%;
  height: 30vh;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid #FFFFFF;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  z-index: 1;
`;
export const Positioner = styled(Center)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  overflow-y: hidden;
  background-color: black;
`;
export const AboutWrapper = styled.div`
  width: 60%;
  flex-direction: column;
  justify-content: space-between;

  .email, .github {
    font-size: 20px;
    margin-top: 2vh;
    color: white;
  }
`;
export const AboutWrapperTitle = styled(Center)`
  justify-content: left;
  text-align: left;
  margin-top: 3vh;
`;
export const Line = styled.div`
  width: 1.5px;
  height: 15px;
  background-color: white;
  margin-right: 1.5vh;
`;
export const Wrapper = styled(Center)`
  width: 100%;
  height: 70vh;
  flex-direction: column;
  color: white;

  .title {
    font-size: 30px;
    text-align: center;
    color: white;
  }

  .position {
    margin-top: 3vh;
    font-size: 25px;
    color: white;
  }
  .identity {
    margin-top: 3vh;
    font-size: 20px;
  }
`;
export const About = styled.div`
  font-weight: 100;
  font-style: normal;
  font-size: 15px;
  color: #BABBBE;
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
  margin-left: 30vh;
  margin-top: 60vh;
`;
export const Rectangle2 = styled(Rectangle)`
  width: 50vh;
  height: 50vh;
  margin-left: -20vh;
  margin-top: 80vh;
`;
export const Rectangle3 = styled(Rectangle)`
  width: 40vh;
  height: 40vh;
  margin-left: 140vh;
  margin-top: 50vh;
`;