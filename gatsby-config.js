require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require("./src/utils/siteConfig");

// If the contentfulConfig can't be found assume the site is being built via Netlify with production environment variables
try {
  var contentfulConfig = require("./.contentful");
} catch (e) {
  var contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    }
  };
}

module.exports = {
  siteMetadata: {
    title: `Personal DM`,
    description: `The best D&D Campaign's you have never played`,
    siteUrl: `https://personaldm.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: config.siteUrl
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     {
      //       resolve: `gatsby-remark-prismjs`
      //     }
      //   ]
      // }
    },
    {
      resolve: "gatsby-source-contentful",
      options:
        process.env.NODE_ENV === "development"
          ? contentfulConfig.development
          : contentfulConfig.production
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '172388816900731',
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true
      }
    }
  ]
};
