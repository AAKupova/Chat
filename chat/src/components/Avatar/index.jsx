import React from "react";

import "./index.scss";

export const Avatar = ({avatar, size}) => (
  <div className="avatar">
    {/* <div data-component="editAvatar"></div> */}
    <img alt="аватар" src={avatar} className={`avatar__img ${size}`} />
    <span className={`avatar__isOnline ${size}`}></span>
  </div>
);
