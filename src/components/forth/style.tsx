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
`;
export const Projects = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  color: white;
  margin-top: 8vh;
  margin-bottom: 5vh;
`;
export const About = styled.p`
  font-weight: 100;
  font-size: 20px;
  color: white;
`;
export const TextWrapper = styled(Positioner)`
  width: 100%;
  height: 40vh;
  flex-direction: column;
  margin-bottom: -15vh;
`;
export const BoxWrapper = styled(Positioner)`
  width: 100%;
  height: 100%;
`;
export const ProjectImg = styled.div`
`;
export const Box1 = styled.div`
  width: 540px;
  height: 360px;
  background: #94A6FF;
  backdrop-filter: blur(40px);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box2 = styled(Box1)`
  background-color: #275AF2;
  margin-left: 5vh;
`;