import React from "react";

import { Wrapper } from "./styles.ts";

export const Text = ({ children, as = "p", ...props }) => (
  <Wrapper as={as} {...props}>
    {children}
  </Wrapper>
);
