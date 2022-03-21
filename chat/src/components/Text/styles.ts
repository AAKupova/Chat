import styled from "styled-components";

export const Wrapper = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  margin?: string;
  color?: string;
  display?: string;
}>`
  padding: 0;
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "16px"};
  display: ${(props) => props.display || "display"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "1.3"};
  color: ${({ theme: { colors }, color }) => colors[color]};
`;
