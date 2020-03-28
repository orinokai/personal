import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import typography from '../styles/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import Img from "gatsby-image"

const Wrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: 0 ${props => props.theme.frameGutter};
  margin-top: ${typography.rhythm(2)};

  @media (min-width: 80ch) {
    padding-top: 2vw;
  }
`

const HeroText = styled.h1`
  position: relative;
  margin-bottom: ${typography.rhythm(1)};
  z-index: 1;

  @media (min-width: 90ch) {
    margin-top: ${typography.rhythm(2)};
  }
`

const HeroButton = styled.a`
  margin-top: ${typography.rhythm(2)};
  border-radius: 4px;
  line-height: ${typography.rhythm(1)};
  ${typography.scale(-1/5)};
  font-family: "Inter";
  padding: 0.6rem 1.8rem;
  border: 3px #c93636 solid;
  color: #c93636;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #c93636;
  }
`

const HeroImg = styled.div`
  position: relative;
  overflow: hidden;

  @media (min-width: 105ch) {
    clip-path: polygon(
      0% 3%, /* left top */
      100% 0%, /* right top */ 
      100% 100%, /* right bottom */
      0% 97% /* left bottom */
    );
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper as={Switcher} forwardedAs="section" breakpoint="25ch" space="2rem">
      <HeroText>
        Hello there, I’m Rob, a freelance web developer based in wild west Cornwall.
        <div>
          <HeroButton href="mailto:me@robstanford.com">Let's talk</HeroButton>
        </div>
      </HeroText>
      <HeroImg>
        <Img sizes={{ ...data.file.childImageSharp.fluid, aspectRatio: 4 / 5 }} fluid={data.file.childImageSharp.fluid} alt="Rob Stanford" />
      </HeroImg>
    </Wrapper>
  )
}

export default Hero
