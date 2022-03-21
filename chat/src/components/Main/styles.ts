import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Layout = styled.div`
  width: 80vw;
  min-width: 800px;
  border-radius: 30px;
  background-color: ${({ theme: { colors } }) => colors.light};
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 600px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr 100px;
`;

export const Center = styled.div`
  padding: 0 26px;
  box-sizing: border-box;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme: { colors } }) => colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: ${({ theme: { colors } }) => colors.darkDray};
  }
`;

export const Bottom = styled.div``;
