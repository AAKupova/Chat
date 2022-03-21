import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./styles/normalize.css";
import { baseTheme } from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";

// import { Form } from "./components/Form";
import { Main } from "./components/Main";
// import { DataFormAuth, DataFormLogin } from "./utils/constants";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      {/* <Form data={DataFormAuth} /> */}
      {/* <Form data={DataFormLogin} /> */}
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
