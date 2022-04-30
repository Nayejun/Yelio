import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
export const ProfileWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileLine = styled.div`
  width: 2px;
  height: 300px;
  background-color: white;
`;
export const Information = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 86px;
  color: #FFFFFF;
  z-index: 1;
`;