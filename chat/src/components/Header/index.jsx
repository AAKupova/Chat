import React from "react";

import { Avatar } from "../Avatar";
import avatar from "../../static/images/default-avatar.svg"

import "./index.scss";

export const Header = ({ name, isOnline }) => (
  <div className="header">
    <div className="header__centr">
      <Avatar avatar={avatar}/>
      <div>
        <p className="header__name">{name}</p>
        <p className="header__isOnline">{isOnline}</p>
      </div>
    </div>
  </div>
);
