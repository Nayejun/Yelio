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
  z-index: 1;
`;
export const Line = styled.div`
  width: 2px;
  height: 50vh;
  background-color: #FFFFFF;
  margin-right: -10vh;
`;
export const Left = styled(Center)`
  width: 100%;
  flex-direction: column;
`;
export const Right = styled(Left)`
  .KDN, .AI, .SW, .SAM {
    font-weight: 400;
    font-size: 26px;
  }
`;
export const Experienced = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 86px;
  color: #FFFFFF;
`;
export const About = styled.p`
  font-style: normal;
  font-size: 20px;
  font-weight: 100;
  color: #BABBBE;
`;