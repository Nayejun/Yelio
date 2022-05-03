import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`;
export const WhoAreYou = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 65px;
  line-height: 86px;
  color: #FFFFFF;
  z-index: 1;
`;