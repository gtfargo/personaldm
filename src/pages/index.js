import React from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../utils/siteConfig";
// import withRoot from '../withRoot';
// import graphpaperBackground from '../images/graph_paper.png'

// const styles = theme => ({
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
// });

const Index = ({ data }) => {
  const Wrapper = styled.section`
    padding: 2em 1.5em;
    margin: 0 auto;
    max-width: ${props => props.theme.sizes.maxWidth};
  `;

  const Header = styled.div`
    h1 {
      font-size: 1.5em;
      text-transform: capitalize;
      font-weight: 600;
      text-align: center;
      margin: 2rem 0 4rem;
      line-height: 1.25;
    }
    span {
      margin: 0 0 0 0.25em;
    }
    a {
      transition: all 0.2s;
      color: ${props => props.theme.colors.base};
      &:hover {
        color: ${props => props.theme.colors.highlight};
      }
    }
  `;

  const Title = styled.h2`
    font-size: 3em;
    font-weight: 600;
    text-align: center;
    margin: 0 0 1em 0;
  `;

  const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    &:after {
      content: "";
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        flex: 0 0 49%;
      }
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        flex: 0 0 32%;
      }
    }
  `;

  const Card = styled.li`
    border-radius: 5px;
    overflow: hidden;
    margin: 0 0 5em 0;
    width: 100%;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    background-color: white;
    transition: all 200ms;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 47.5%;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      flex: 0 0 30%;
    }
    &:hover {
      transform: translateY(-15px);
      box-shadow: 0px 20px 30px rgba(0,0,0,0.1);
    }

  `;

  const PostLink = styled(Link)`
    display: flex;
    flex-flow: column;
    height: 100%;
    flex: 0 1 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    div {
      flex-grow: 1;
      width: 100%;
      height: 100%;
    }
  `;

  const PostPreview = styled(Img)`
    max-height: 250px;
  `;

  const PostCaption = styled.h3`
    line-height: 2em;
    font-weight: 600;
    text-transform: capitalize;
    padding: 1em 1em 2em 1em;
  `;

  const posts = data.allContentfulPost.edges;

  return (
    <Wrapper>
      <Header>
        <h1>
          Your personal Dungeon Master
          <span>🎉</span>
        </h1>
      </Header>

      {posts && (
        <List>
          {posts.map(({ node: post, index }) => (
            <Card key={post.id}>
              <PostLink to={`/posts/${post.slug}/`}>
                <PostPreview sizes={post.heroImage.sizes} backgroundColor={"#EEEEEE"} />
                <PostCaption>
                  {post.title}
                </PostCaption>
              </PostLink>
            </Card>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
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

export default Index
// export default withRoot(withStyles(styles)(Index));

