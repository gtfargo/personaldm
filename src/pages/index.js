import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../utils/siteConfig";
import ta from "time-ago";

// import withRoot from '../withRoot';
// import graphpaperBackground from '../images/graph_paper.png'

// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const newCampaign = data.allContentfulCampaign.edges[0].node;

  const Hero = styled.section`
    position: relative;
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
  `;

  const CampaignCover = styled(Img)`
    max-height: 400px;
    // margin: 0 auto;
    // max-width: ${props => props.theme.sizes.maxWidth};
  `;

  const CampaignCoverOverlay = styled.div`
    position: absolute;
    // background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    //             linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
    //             linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
    background: linear-gradient(
        135deg,
        rgba(255, 194, 0, 0.4) 0,
        rgba(255, 194, 0, 0) 50%,
        rgba(255, 194, 0, 0) 100%
      ),
      linear-gradient(
        45deg,
        rgba(40, 0, 215, 0) 0,
        rgba(40, 0, 215, 0) 50%,
        rgba(40, 0, 215, 0.4) 100%
      ),
      linear-gradient(transparent 5%, rgba(0, 0, 0, 0.8) 100%);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    padding: 2em;
  `;

  const CampaignTitle = styled(Link)`
    font-size: 3em;
    line-height: 1.2em;
    color: white;
    text-decoration: none;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
    transition: all 200ms;
    border-bottom: 3px solid transparent;
    &:hover {
      color: ${props => props.theme.colors.highlight};
      border-bottom: 3px solid ${props => props.theme.colors.highlight};
    }
  `;

  const CampaignInfo = styled.div`
    font-size: 1.5em;
    line-height: 2em;
    color: white;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  `;

  return (
    <div>
      <Hero>
        <CampaignCover
          sizes={newCampaign.heroImage.sizes}
          backgroundColor={"#EEEEEE"}
        />
        <CampaignCoverOverlay>
          <CampaignTitle to={`/campaigns/${newCampaign.slug}`}>
            {newCampaign.title}
          </CampaignTitle>
          <CampaignInfo>
            Published {ta.ago(new Date(newCampaign.publishDate))}
          </CampaignInfo>
        </CampaignCoverOverlay>
      </Hero>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulCampaign(
      limit: 1
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            sizes(maxWidth: 1200) {
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
      }
    }
    allContentfulPost(limit: 2, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          author {
            name
            avatar {
              title
              sizes(maxWidth: 40) {
                ...GatsbyContentfulSizes_withWebp
              }
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate
        }
      }
    }
  }
`;

export default Index;
// export default withRoot(withStyles(styles)(Index));
