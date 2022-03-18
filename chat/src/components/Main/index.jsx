import React from "react";

import { Header } from "../Header";

import "./index.scss";

export const Main = () => (
  <div className="main">
    {/* <div className="main__body"> */}
    <div className="main__sidebar-left">
      {/* <div data-component="menu"></div>
      <div data-component="sidebar"></div> */}
    </div>

    <div className="main__center">
      <div className="main__header">
        <Header name="Nasty" isOnline="Online"/>
      </div>
      <div className="main__msg">
        {/* <div data-component="message"> */}
        <p className="default-text">Выберите чат чтобы отправить сообщение</p>
      </div>
      <div className="main__text-area">
        {/* <div data-component="text-area"></div> */}
      </div>
      {/* </div> */}
    </div>
  </div>
);
