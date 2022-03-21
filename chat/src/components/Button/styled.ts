import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: var(--color-dark);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.15);
  color: var(--color-light);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  padding: 10px 0;
  border-radius: 30px;
  width: 280px;
  border: none;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--color-accent);
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-disable);
    color: var(--color-dark-gray);
    cursor: default;
  }
`;