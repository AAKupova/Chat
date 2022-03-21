import { createGlobalStyle } from "styled-components";

import OpenSansBold from "../static/fonts/OpenSans-Bold.woff";
import OpenSansBold2 from "../static/fonts/OpenSans-Bold.woff2";
import OpenSansMedium from "../static/fonts/OpenSans-Medium.woff";
import OpenSansMedium2 from "../static/fonts/OpenSans-Medium.woff2";
import OpenSansRegular from "../static/fonts/OpenSans-Regular.woff";
import OpenSansRegular2 from "../static/fonts/OpenSans-Regular.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    font-weight: 700;
    font-style: normal;
    src: url(${OpenSansBold2}) format('woff2'),
      url(${OpenSansBold}) format('woff');
  }

  @font-face {
    font-family: 'OpenSans';
    font-weight: 500;
    font-style: normal;
    src: url(${OpenSansMedium}) format('woff2'),
      url(${OpenSansMedium2}) format('woff');
  }

  @font-face {
    font-family: 'OpenSans';
    font-weight: 400;
    font-style: normal;
    src: url(${OpenSansRegular}) format('woff2'),
      url(${OpenSansRegular2}) format('woff');
  }

  body {
    background: linear-gradient(90deg, rgba(237, 66, 178, 0.6) 0%, rgba(229, 229, 229, 0) 102.26%), url(../static/images/Background.jpg) center/cover;
    width: 100vw;
    height: 100vh;
    font-family: "OpenSans", Arial, sans-serif;
    font-style: normal;
    color: vat(--color-dark);
    background-repeat: no-repeat;
  }

  * {
    box-sizing: border-box;
  }
`;
