import React from "react";

import { Header } from "../Header";
import { Text } from "../Text";
import {
  Wrapper,
  Layout,
  // Text,
  Right,
  Center,
  Left,
  Bottom,
} from "./styles.ts";

export const Main = () => (
  <Wrapper>
    <Layout>
      <Left>
        {/* <div data-component="menu"></div>
      <div data-component="sidebar"></div> */}
      </Left>
      <Right>
        <Header name="Nasty" isOnline="Online" />
        <Center>
          {/* <div data-component="message"> */}
          <Text as="p" color="darkGray">Выберите чат чтобы отправить сообщение</Text>
        </Center>
        <Bottom>{/* <div data-component="text-area"></div> */}</Bottom>
      </Right>
    </Layout>
  </Wrapper>
);
