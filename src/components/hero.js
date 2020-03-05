import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import typography from '../utils/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import Img from "gatsby-image"

const Wrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: 0 ${props => props.theme.frameGutter};
  margin-top: ${typography.rhythm(1)};
  padding-top: 2vw;
`

const HeroText = styled.h1`
  position: relative;
  margin-bottom: ${typography.rhythm(1)};
  z-index: 1;
`

const HeroTextOverlap = styled.div`
  @media (min-width: 80ch) {
    position: absolute;
    right: -33%;
    margin-top: 6rem;
    text-shadow: 0 0 20px rgba(255,255,255,0.5);
  }
`

const HeroImg = styled(Img)`
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
    <Wrapper as={Switcher} forwardedAs="section" breakpoint="20ch" space="1rem">
      <HeroText>
        <HeroTextOverlap>Hello, I’m Rob, a freelance web developer based in the wild west of England.</HeroTextOverlap>
      </HeroText>
      <HeroImg sizes={{ ...data.file.childImageSharp.fluid, aspectRatio: 4 / 5 }} fluid={data.file.childImageSharp.fluid} alt="Rob Stanford" />
    </Wrapper>
  )
}

export default Hero
