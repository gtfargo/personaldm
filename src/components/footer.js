import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import ContentfulAttribution from "./contentfulattribution";

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.secondary};
    padding: 1em 0;
    margin: 0 1.5em;
  }

  li {
    display: inline-block;
    padding: 0.25em 0;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: auto;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <ContentfulAttribution attributionStyle="light" />
      </li>
    </ul>
  </Wrapper>
);

export default Footer;
