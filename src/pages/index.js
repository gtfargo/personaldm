import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../utils/siteConfig";
import ta from "time-ago";
import Slider from "react-slick";
// import withRoot from '../withRoot';
// import graphpaperBackground from '../images/graph_paper.png'

// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

const Index = ({ data }) => {
  const Slide = styled.div`
    position: relative;
  `;

  const SlideOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 2em;
    background-color: rgba(0,0,0,0.3);
    h1 {
      color: white;
      font-size: 4em;
      text-align: center;
      text-shadow: 0px 2px 5px rgba(0,0,0,0.52);
      @media (max-width: ${props => props.theme.responsive.medium}) {
        font-size: 3em;
      }
    }
    div {
      padding-top: 1em;
      p {
        font-size: 2em;
        text-align: center;
        color: white;
        line-height: 1.5em;
        text-shadow: 0px 1px 3px rgba(0,0,0,0.4);
        @media (max-width: ${props => props.theme.responsive.medium}) {
          font-size: 1.5em;
        }
      }
    }
    
  `;

  const slides = data.allContentfulHomeScreenSlide.edges;
  const posts = data.allContentfulPost.edges;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map(({ node: slide, index }) => (
          <Slide>
            <Img sizes={slide.heroImage.sizes} backgroundColor={"#EEEEEE"} />
            <SlideOverlay>
              <h1>{slide.headline}</h1>
              <div dangerouslySetInnerHTML={{ __html: slide.subheadline.childMarkdownRemark.html }} />
            </SlideOverlay>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulHomeScreenSlide {
      edges {
        node {
          headline
          subheadline {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            title
            sizes(maxWidth: 1200) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
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
