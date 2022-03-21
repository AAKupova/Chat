import React from "react";

import { Button } from "../Button";
import { Field } from "../Field";

import "./index.scss";


export interface IFormProps {
  name?: string;
  title?: string;
  textLink?: string;
  link?: string;
  buttonText?: string;
  fields?: [
    {
      [key: string]: string;
    }
  ];
}


export const Form = (data:IFormProps) => {
  const { name, title, textLink, link, buttonText, fields } = data;

  return (
    <form className="form" name={name}>
      <h2 className="form__title">{title}</h2>
      {fields.map((field) => (
        <Field key={field.name} field={field} />
      ))}
      <Button type="submit" disabled="disabled" onClick={() => console.log(1)}>
        {buttonText}
      </Button>
      <a href={link} className="form__link">
        {textLink}
      </a>
    </form>
  );
};
