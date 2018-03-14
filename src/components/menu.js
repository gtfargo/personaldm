import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  background: white;
  width: 100%;
  padding: 1.5em 0;
  z-index: 99;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
`;
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all .2s;
    padding:
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`;

const activeLinkStyle = {
  color: '#ffc200'
};

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/campaigns/" activeStyle={activeLinkStyle}>
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/posts/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Menu;
