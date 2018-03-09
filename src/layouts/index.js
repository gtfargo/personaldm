import React from "react";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import config from "../utils/siteConfig";
import globals from "../styles/global";
import theme from "../styles/theme";
import favicon from "../images/favicon.ico";

import Menu from "../components/menu";
import Footer from "../components/footer";

import backgroundImage from '../images/graph_paper.png'

const Main = styled.main`
  background: url(${backgroundImage}) repeat fixed center;
`

const Template = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <div>
          <Menu />
          <Main>
            {children()}
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Template;
