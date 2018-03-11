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
import * as Icon from 'react-feather';


AWS.config.update(
  process.env.NODE_ENV === 'development' ? {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  } : {
    accessKeyId: process.env.GATSBY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.GATSBY_AWS_SECRET_ACCESS_KEY,
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
    align-items: center;
    justify-content: center;
    padding: 1em;
    margin: 1em 0 1em 0;
    background: ${props => props.theme.colors.highlight};
    border-radius: 2px;
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
    a {
      color: white;
      font-weight: 600;
      font-size: 2em;
      text-decoration: none;
      margin-left: 0.5em;
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
    s3.getSignedUrl('getObject', { 
        Bucket: "personal-dm", 
        Key: `campaigns/${slug}.zip`,
        Expires: 10,
      },
      (error, data) => {
        if (error != null) {
          console.log("Failed to retrieve an object: " + error);
        } else {
          // do something with data.Body
          window.open(data, '_blank')
        }
      }
    )
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
          <Icon.DownloadCloud size={30} color="white"/>
          <a onClick={handleDownload} rel="nofollow" target="_blank">
            Download
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
