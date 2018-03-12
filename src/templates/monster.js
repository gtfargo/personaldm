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

const MonsterTemplate = ({data}) => {
  const {
    name,
    id,
    slug,
    publishDate,
    size,
    hitPoints,
    armorClass,
    speed,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    senses,
    languages,
  } = data.contentfulMonster;


  const Monster = styled.section`
    margin: 0 auto;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 3em 1.5em;
  `;

  const MonsterNavigation = styled.div`
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

  const MonsterDownload = styled.div`
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

  return(
    <div>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`${name} - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/monsters/${slug}/`} />
      </Helmet>

      <Monster>
        
      </Monster>

    </div>
  )
}

export const query = graphql`
  query monsterQuery($slug: String!) {
    contentfulMonster(slug: {eq: $slug}) {
      name
      id
      slug
      publishDate
      size
      creatureType
      alignment
      armorClass
      speed
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      senses
      languages
      challengeRating
    }
  }
`

export default MonsterTemplate
