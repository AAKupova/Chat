import React from "react";

import "./index.scss";

export const Button = ({
  children,
  onClick,
  type,
  className = "",
  disabled,
}) => (
  <button
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
