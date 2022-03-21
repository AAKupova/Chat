import React from "react";

import { Wrapper } from "./styled.ts";

export const Button = ({
  children,
  onClick,
  type,
  disabled,
}) => (
  <Wrapper
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Wrapper>
);
