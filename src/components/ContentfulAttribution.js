import React from "react";
import styled from "styled-components";

const Wordmark = styled.img`
  max-width: 100px;
  width: 100%;
`;

const attributionStyles = {
  light:
    "https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",
  dark:
    "https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg",
  mono:
    "https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
};

export default class ContentfulAttribution extends React.Component<void, void> {
  render() {
    return (
      <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
        <Wordmark
          src={attributionStyles[this.props.attributionStyle]}
          alt="Powered by Contentful"
        />
      </a>
    );
  }
}
