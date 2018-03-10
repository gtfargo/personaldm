import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Hero from '../components/hero'
import Tags from '../components/tags'
import Body from '../components/body'
import AWS from 'aws-sdk';

AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
);

const s3 = new AWS.S3();

const CampaignTemplate = ({data}) => {
  const {
    title,
    id,
    slug,
    heroImage,
    summary,
    downloadUrl,
    author,
    publishDate,
    tags,
  } = data.contentfulCampaign;

  const campaignIndex = find(
    data.allContentfulCampaign.edges,
    ({ node: campaign }) => campaign.id === id
  );

  const Campaign = styled.section`
    margin: 0 auto;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 3em 1.5em;
  `;

  const CampaignNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    a {
      background: ${props => props.theme.colors.base};
      color: white;
      padding: 1em;
      border-radius: 2px;
      text-decoration: none;
      transition: .2s;
      &:hover {
        background: ${props => props.theme.colors.highlight};
      }
    }
  `;

  const CampaignDownload = styled.div`
    display: flex;
    a {
      background: ${props => props.theme.colors.highlight};
      color: white;
      padding: 1em;
      font-weight: 600;
      font-size: 2em;
      margin: 1em 0 1em 0;
      border-radius: 2px;
      text-decoration: none;
      box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
      transition: .2s;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        background: ${props => props.theme.colors.highlight};
        opacity: 0.8;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.15);
      }
      &:active {
        transform: translateY(2px);
        opacity: 1;
        box-shadow: 0px 0px 0px rgba(0,0,0,0.25);
      }
    }
  `;

  const PreviousLink = styled(Link)`
    margin-right: auto;
    order: 1;
  `;

  const NextLink = styled(Link)`
    margin-left: auto;
    order: 2;
  `;

  const handleDownload = () => {
    console.log(process.env)
    console.logo(process.env.GATSBY_AWS_ACCESS_KEY_ID)
    s3.getObject(
      { Bucket: "personal-dm", Key: `campaigns/${slug}.zip` },
      (error, data) => {
        if (error != null) {
          console.log("Failed to retrieve an object: " + error);
        } else {
          console.log("Loaded " + data.ContentLength + " bytes");
          // do something with data.Body
        }
      }
    );
  }
  return(
    <div>

      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/campaigns/${slug}/`} />
        <meta property="og:image" content={heroImage.sizes.src} />
      </Helmet>

      <Hero title={title} image={heroImage.sizes} height={'50vh'}/>

      <Campaign>

        {tags && (<Tags items={tags} />)}

        <Body dangerouslySetInnerHTML={{ __html: summary.childMarkdownRemark.html }} />

        <CampaignDownload>
          <a onClick={handleDownload} rel="nofollow" target="_blank">
            Download Here
          </a>
        </CampaignDownload>

        <CampaignNavigation >
          {campaignIndex.previous && (<PreviousLink to={`/campaigns/${campaignIndex.previous.slug}/`}>Prev Campaign</PreviousLink>)}
          {campaignIndex.next && (<NextLink to={`/campaigns/${campaignIndex.next.slug}/`}>Next Campaign</NextLink>)}
        </CampaignNavigation>
      </Campaign>

    </div>
  )
}

export const query = graphql`
  query campaignQuery($slug: String!) {
    contentfulCampaign(slug: {eq: $slug}) {
      title
      id
      slug
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      summary {
        childMarkdownRemark {
          html
        }
      }
      publishDate
      tags
      downloadUrl
    }
    allContentfulCampaign(limit: 1000, sort: { fields: [publishDate], order: DESC })  {
      edges {
        node {
          id
        }
        previous {
          slug
          title
        }
        next {
          slug
          title
        }
      }
    }
  }
`

export default CampaignTemplate
