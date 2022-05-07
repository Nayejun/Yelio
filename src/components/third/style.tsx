import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
export const ProfileRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vh;
`;
export const ProfileLine = styled.div`
  width: 1px;
  height: 280px;
  background-color: white;
  margin-right: 3vh;
`;
export const Information = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 86px;
  color: #FFFFFF;
  z-index: 1;

  span {
    letter-spacing: 1px;
    line-height: 55px;
    color: #BFBFBF;
    font-weight: 100;
    font-size: 30px;
  }

  .position {
    color: #FFFFFF;
    margin-top: 35px;
  }
`;