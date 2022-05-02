import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Positioner = styled(Center)`
  width: 100%;
  height: 100vh;
`;
export const Wrapper = styled(Center)`
  width: 100%;
  flex-direction: column;
  z-index: 1;
`;
export const TextWrapper = styled(Center)`
  flex-direction: column;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  color: white;
  margin-bottom: 3vh;
`;
export const About = styled.p`
  font-weight: 100;
  font-size: 20px;
  color: #BABBBE;
`;
export const SkillsName = styled(About)`
  font-size: 15px;
`;
export const MainSkills = styled(Center)`
  width: 25%;
  justify-content: space-between;
`;
export const SubSkills = styled(Center)`
  width: 60%;
  justify-content: space-between;
`;
export const React = styled(Center)`
  flex-direction: column;
`;
export const TypeScript = styled(Center)`
  flex-direction: column;
`;
export const StyledComponents = styled(Center)`
  flex-direction: column;
`;
export const NEXT = styled(Center)`
  flex-direction: column;
`;
export const SWR = styled(Center)`
  flex-direction: column;
`;
export const Emotion = styled(Center)`
  flex-direction: column;
`;