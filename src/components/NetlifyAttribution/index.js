import React from "react";
import styled from "styled-components";

const Wordmark = styled.img`
  max-width: 100px;
  width: 100%;
`;

export default class ContentfulAttribution extends React.Component<void, void> {
  render() {
    return (
      <a href="https://www.netlify.com/" rel="nofollow" target="_blank">
        <Wordmark
          {...this.props}
          src="https://www.netlify.com/img/global/badges/netlify-light.svg"
          alt="Powered by Netlify"
        />
      </a>
    );
  }
}
