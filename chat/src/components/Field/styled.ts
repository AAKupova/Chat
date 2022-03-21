import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 25px;
  max-width: 306px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.dark};
  width: 280px;
  box-sizing: border-box;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  line-height: 0.8;
  padding-bottom: 7px;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.darkGray};
  }
`;

//&_error {
//  border-bottom: 1px solid ${({ theme: { colors } }) => colors.warning};
//} 
