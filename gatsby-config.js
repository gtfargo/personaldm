require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require('./src/utils/siteConfig');

// If the contentfulConfig can't be found assume the site is being built via Netlify with production environment variables
try { var contentfulConfig = require('./.contentful');}
catch (e) {
  var contentfulConfig = {
    "production": {
      "spaceId": process.env.SPACE_ID,
      "accessToken": process.env.ACCESS_TOKEN
    }
  }
}

module.exports = {
  plugins: [
    {
    resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-react-helmet',
    {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
    resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
