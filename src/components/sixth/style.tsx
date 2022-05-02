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
`;