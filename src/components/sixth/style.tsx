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