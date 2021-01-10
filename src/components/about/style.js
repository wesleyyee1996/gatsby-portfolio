import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 0.5fr 1.25fr;
    grid-gap: 5rem;
    text-align: left;
  }
`
export const Avatar =styled(Img)`
  background-image: 'https://s3.us-east-2.amazonaws.com/wesleyyee.com/Media/profile.webp';
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
  @media(max-width: ${variables.breakpointPhone}) {
    display:none;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-family: 'Open Sans', sans-serif;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #232323;
  //text-transform: capitalize;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
    text-align: left;
  }
`