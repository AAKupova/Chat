import React from "react";

import { Text } from "../Text/index";
import { Label, Input } from "./styled";

export const Field = ({ field }) => {
  const { name, type = "text", max = "30", min = "2", text, error } = field;

  return (
    <Label>
      <Input
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
      <Text
        as="span"
        color="warning"
        fontSize="12px"
        fontWeight="500"
        lineHeight="1.2"
        margin="7px 0 0 "
        display="none"
      >
        {error}
      </Text>
    </Label>
  );
};
