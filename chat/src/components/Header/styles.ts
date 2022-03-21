import styled from "styled-components";

export const Wrapper = styled.header`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGray};
  padding: 24px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 24px;
`;

export const Content = styled.div``;
