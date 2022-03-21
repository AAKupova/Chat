import React from "react";

import { Wrapper, Images, IsOnline } from "./styles.ts";

export const Avatar = ({avatar, size}) => (
  <Wrapper>
    {/* <div data-component="editAvatar"></div> */}
    <Images size={size} alt="аватар" src={avatar} />
    <IsOnline size={size}></IsOnline>
  </Wrapper>
);
