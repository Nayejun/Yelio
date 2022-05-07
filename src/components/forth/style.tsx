import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled(Positioner)`
  flex-direction: column;
  z-index: 1;
`;
export const Projects = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  color: white;
  margin-top: 5vh;
  margin-bottom: 3vh;
`;
export const About = styled.span`
  font-weight: 100;
  font-size: 20px;
  color: #BABBBE;
`;
export const TextWrapper = styled(Positioner)`
  width: 100%;
  height: 40vh;
  flex-direction: column;
  margin-bottom: -10vh;
`;
export const BoxWrapper = styled(Positioner)`
  width: 100%;
  height: 100%;
`;
export const ProjectAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .position {
    margin-left: 17vh;
  }
  .EZY-About, .GC-About {
    font-size: 18px;
    font-weight: lighter;
    margin-top: 2vh;
    color: white;
  }

  .GC-About {
    margin-left: 5vh;
  }

  .EZY, .GC {
    margin-top: 5vh;
    font-weight: 500;
    font-size: 27px;
    color: white;
  }

  .GC {
    margin-left: 5vh;
  }

  .GC-Line {
    margin-left: 5vh;
  }
`;
export const Box1 = styled.div`
  width: 540px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  :hover {
    opacity: 5%;
  }
`;
export const Box2 = styled(Box1)`
`;
export const Line = styled.div`
  margin-top: 2vh;
  width: 50vh;
  height: 1px;
  background-color: #FFFFFF;
`;
export const HideWrapper = styled(About)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  color: white;
  margin-top: 17vh;
  margin-left: 15.7vh;
`;