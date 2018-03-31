import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";
import { Spring, Transition, Trail, Parallax } from "react-spring";
import Body from "../components/body";
import config from "../utils/siteConfig";
import background from "../images/seamless-dark-wall.jpg";
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


const Page = styled.div`
  // background: url(${background});
  background-color: #333;
  height: 100vh;
  display: flex;
`;
const CampaignList = styled.aside`
  height: 100%;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const CampaignDetail = styled.section`
  flex: 1;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3em;
`;

const CampaignCard = styled.div`
  margin: 2em;
  height: 300px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.18);
  transition: 200ms all;
  transform: scale(0.925);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }

  ${props =>
    props.selected &&
    css`
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
      transform: scale(1);
      &:hover {
        transform: scale(1);
      }
    `};
`;

const ImageOverlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      275deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 1) 75%
    ),
    linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 1) 100%);
`;

const CampaignTitle = styled.h1`
  font-size: 5em;
  color: white;
  font-weight: bold;
  margin-right: 0.5em;
`;
const CampaignPublishDate = styled.h2`
  font-size: 3em;
  color: white;
  opacity: 0.5
  font-weight: bold;
`;

const CampaignInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
`;

const CampaignInfoBlock = styled.div`
  flex: 1;
`;

const CampaignInfoField = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2em;
  margin-bottom: 1em;
`;

const CampaignInfoProperty = styled.p`
  color: white;
  opacity: 0.5;
  margin-right: 1em;
`;
const CampaignInfoValue = styled.p`
  color: white;
`;

const CampaignSummary = styled.div`
  color: white;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`;

const CampaignSummaryTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  h3 {
    font-size: 2em;
    font-weight: bold;
    margin-left: 0.5em;
  }
`;

const CampaignDownload = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
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
    color: #333;
    font-weight: 600;
    font-size: 2em;
    text-decoration: none;
    margin-left: 0.5em;
  }
`;

class Campaigns extends React.Component {
  state = {
    selected: null
  };

  select = index => {
    this.setState({
      selected: index
    });
  };

  handleDownload = () => {
    const campaign = campaigns.find(({ node: c }) => c.id === selected);

    s3.getSignedUrl('getObject', { 
        Bucket: "personal-dm", 
        Key: `campaigns/${campaign.node.slug}.zip`,
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

  render() {
    const { selected } = this.state;
    const campaigns = this.props.data.allContentfulCampaign.edges;

    const campaign = campaigns.find(({ node: c }) => c.id === selected);
    console.log(campaign);
    return (
      <Page>
        <CampaignList>
          {campaigns.map(({ node: campaign }) => {
            const key = campaign.id;
            console.log(campaign);
            return (
              <CampaignCard
                key={key}
                selected={selected === key}
                onClick={() => this.select(key)}
              >
                <Img
                  sizes={campaign.heroImage.sizes}
                  backgroundColor={"#EEEEEE"}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                  }}
                />
              </CampaignCard>
            );
          })}
        </CampaignList>
        {selected ? (
          <CampaignDetail>
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "50%",
                height: "100%"
              }}
            >
              <Img
                sizes={campaign.node.heroImage.sizes}
                backgroundColor={"#EEEEEE"}
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  opacity: 0.75
                }}
              />
              <ImageOverlay />
            </div>
            <div style={{ position: "relative", zIndex: 100 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  marginBottom: "3em"
                }}
              >
                <CampaignTitle>{campaign.node.title}</CampaignTitle>
                <CampaignPublishDate>
                  ({new Date(campaign.node.publishDate).getUTCFullYear()})
                </CampaignPublishDate>
              </div>
              <CampaignInfo>
                <CampaignInfoBlock>
                  <CampaignInfoField>
                    <CampaignInfoProperty>
                      {campaign.node.creators.length > 1
                        ? `Creators:`
                        : `Creator:`}
                    </CampaignInfoProperty>
                    <CampaignInfoValue>
                      {campaign.node.creators[0].name}
                    </CampaignInfoValue>
                  </CampaignInfoField>
                  <CampaignInfoField>
                    <CampaignInfoProperty>
                      {campaign.node.illustrators.length > 1
                        ? `Illustrators:`
                        : `Illustrator:`}
                    </CampaignInfoProperty>
                    <CampaignInfoValue>
                      {campaign.node.illustrators[0].name}
                    </CampaignInfoValue>
                  </CampaignInfoField>
                  <CampaignInfoField>
                    <CampaignInfoProperty>Types:</CampaignInfoProperty>
                    <CampaignInfoValue>
                      {campaign.node.tags.join(", ")}
                    </CampaignInfoValue>
                  </CampaignInfoField>
                </CampaignInfoBlock>
                <div style={{ width: "1em" }} />
                <CampaignInfoBlock>
                  <CampaignInfoField>
                    <CampaignInfoProperty>Starting Level</CampaignInfoProperty>
                    <CampaignInfoValue>
                      {campaign.node.startingLevel}
                    </CampaignInfoValue>
                  </CampaignInfoField>
                  <CampaignInfoField>
                    <CampaignInfoProperty>Party Size</CampaignInfoProperty>
                    <CampaignInfoValue>
                      {campaign.node.partySize}
                    </CampaignInfoValue>
                  </CampaignInfoField>
                </CampaignInfoBlock>
              </CampaignInfo>
              <CampaignInfo>
                <CampaignInfoBlock>
                  <CampaignSummary>
                    <CampaignSummaryTitle>
                      <Icon.BookOpen size={30} color="#ffc200" />
                      <h3>Summary</h3>
                    </CampaignSummaryTitle>
                    <Body
                      dangerouslySetInnerHTML={{
                        __html: campaign.node.summary.childMarkdownRemark.html
                      }}
                    />
                  </CampaignSummary>
                </CampaignInfoBlock>
              </CampaignInfo>
              <CampaignInfo>
                  <CampaignDownload>
                    <Icon.DownloadCloud size={30} color="#333333" />
                    <a onClick={this.handleDownload} rel="nofollow" target="_blank">
                      Download Campaign
                    </a>
                  </CampaignDownload>
              </CampaignInfo>
            </div>
          </CampaignDetail>
        ) : (
          <CampaignDetail>
            <CampaignTitle>Select a campaign...</CampaignTitle>
          </CampaignDetail>
        )}
      </Page>
    );
  }
}

export const query = graphql`
  query campaigns2Query {
    allContentfulCampaign(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate
          startingLevel
          partySize
          heroImage {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          creators {
            id
            name
          }
          illustrators {
            id
            name
          }
          tags
          summary {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default Campaigns;
