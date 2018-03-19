import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import ContentfulAttribution from "./ContentfulAttribution";
import NetlifyAttribution from "./NetlifyAttribution";

const Wrapper = styled.footer`
  display: flex;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.secondary};
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 3em;
    padding-bottom: 3em;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      flex-direction: column;
      padding-top: 1em;
      li {
        margin-top: 1em;
      }
    }
  }

  li {
    flex: 1,
    align-items: center;
    justify-content: center;
    padding: 0.25em 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
    }
  }
`;

const DonateButton = styled.a`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: rgb(255, 194, 0, 0.1);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
  color: ${props => props.theme.colors.highlight};
  border-radius: 5px;
  // border: 1px solid ${props => props.theme.colors.highlight};
  transition: all 300ms;
  &:hover, &:active {
    background-color: rgb(255, 194, 0, 1);
    color: white;
  }
`

const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <ContentfulAttribution attributionStyle="mono" fillColor="#313d3e" />
      </li>
      <li>
        <DonateButton target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B8NW3Q5TCHAEN">
          Support my work <span> 😊 </span>
        </DonateButton>
      </li>
      <li>
        <NetlifyAttribution />
      </li>
    </ul>

  </Wrapper>
);

export default Footer;
