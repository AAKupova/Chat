import React from "react";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import avatar from "../../static/images/avatar-icon.svg";

import { Content, Wrapper } from "./styles.ts";

export const Header = ({ name, isOnline }) => (
  <Wrapper>
    <Avatar avatar={avatar}/>
    <Content>
      <Text as="p" fontSize="12px" fontWeight="700" lineHeight="1.1" color="dark">
        {name}
      </Text>
      <Text
        as="p"
        fontWeight="400"
        fontSize="10px"
        color="darkGray"
        lineHeight="1.1"
        margin="3px 0"
      >
        {isOnline}
      </Text>
    </Content>
  </Wrapper>
);
