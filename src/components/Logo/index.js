import React from "react";
import styled from "styled-components";

const StyledLogo = styled.svg`
    max-width: 2em;
  `

// "#f95451"
const fillColor = "#ff4e00"

const Logo = (props) => (
  <StyledLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.64 138.04">
    <title>logo</title>
    <g id="Logo" data-name="Logo">
      <polygon
        id="pencil_body_1"
        data-name="pencil_body_1"
        points="98.64 80.17 65.95 57.24 0 103.5 49.27 138.04 98.64 103.42 98.64 80.17"
        fill={fillColor}
      />
      <path
        id="shadow"
        data-name="shadow"
        d="M0,103.49,66,57.24l17.2,12.07"
        opacity="0.35"
      />
      <polygon
        id="pencil_wood"
        data-name="pencil_wood"
        points="69.56 114.87 54.79 106.95 41.58 113.04 28.19 105.99 19.05 110.96 0 103.5 49.27 138.04 98.64 103.42 80.75 108.23 69.56 114.87"
        fill="#d1a16d"
      />
      <polygon
        id="pencil_lead"
        data-name="pencil_lead"
        points="49.32 128.78 36.06 128.78 49.32 138.04 62.47 128.78 49.32 128.78"
        fill="#333"
      />
      <polygon
        id="pencil_body_2"
        data-name="pencil_body_2"
        points="78.91 0 78.91 15.78 59.19 15.78 59.19 0 39.46 0 39.46 15.78 19.73 15.78 19.73 0 0.1 0 0 103.5 98.64 34.33 98.64 0 78.91 0"
        fill={fillColor}
      />
    </g>
  </StyledLogo>
);

export default Logo;
