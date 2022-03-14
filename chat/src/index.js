import React from "react";
import ReactDOM from "react-dom";

import "./styles/normalize.css";
import "./styles/index.scss";

import { Form } from "./components/Form";

import { DataFormAuth, DataFormLogin } from "./utils/constants";

ReactDOM.render(
  <React.StrictMode>
    {/* <Form data={DataFormAuth} /> */}
    <Form data={DataFormLogin} />
  </React.StrictMode>,
  document.getElementById("root")
);
