import React from "react"
import styled from "styled-components"
import typography from '../utils/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import Stack from "../common/stack"

const Wrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: 0 ${props => props.theme.frameGutter};
`
const AboutText = styled.div`
  flex-grow: 2;

  p:first-child {
    border-left: 0.3ch ${typography.options.headerColor} solid;
    padding-left: 1.5ch;
  }
`

const AboutLists = styled(Stack)`
  line-height: 1rem;
  h5 { margin-bottom: 1rem }
  ul { margin-bottom: 0 }
`

const About = () => (
  <Wrapper as={Switcher} forwardedAs="section" breakpoint="40ch" space="2rem">
    <AboutText>
      <p>I help organisations create engaging digital experiences and robust software products.</p>
      <p>Over the last 20 years I have worked with delightful people such as the BBC, Channel 4, MTV, Virgin and Comic Relief. Recent roles include Senior Engineer and Technical Lead at digital agencies in London and Falmouth.</p>
    </AboutText>
    <AboutLists as="aside" space={typography.rhythm(1)}>
      <article>
        <h5>Technologies</h5>
        <ul>
          <li>React, Gatsby, GraphQL, Apollo, Node.js</li>
          <li>Wordpress, Laravel, PHP</li>
          <li>Amazon Alexa, Jovo</li>
          <li>Docker, Terraform, Ansible</li>
          <li>Google Cloud Platform, Cloudflare</li>
        </ul>
      </article>
      <article>
        <h5>Likes</h5>
        <ul>
          <li>Sea swimming</li>
          <li>Weird teas</li>
          <li>Guitar strumming and desk drumming</li>
        </ul>
      </article>
    </AboutLists>
  </Wrapper>
)

export default About
