import React from "react";

import "./index.scss";

export const Field = ({ field }) => {
  console.log(field);

  const { name, type = 'text', max = '30', min = '2', text, error } = field;
  return (
    <label className="label">
      <input
        className="field"
        required="required"
        autofocus="autofocus"
        autocomplete="off"
        value=""
        name={name}
        type={type}
        maxlength={max}
        minlength={min}
        placeholder={text}
      />
      <span className="error-msg">{error}</span>
    </label>
  );
};
