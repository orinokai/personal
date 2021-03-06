import React from "react"
import styled from "styled-components"
import typography from '../styles/typography'
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
  h4 { margin-bottom: 1rem }
  ul {
    margin-bottom: 0;
    margin-left: 0.3rem;
    list-style: none;
  }
  li::before {
    content: "• ";
    color: #c93636;
    margin-right: 0.4rem;
    font-size: 0.8rem;
  }
`

const About = () => (
  <Wrapper as={Switcher} forwardedAs="section" breakpoint="40ch" space="3rem">
    <AboutText>
      <p>I help organisations create engaging digital experiences and robust software products.</p>
      <p>My current specialism is building fast web sites and scalable backends using full-stack Javascript, however my experience extends to many tools and languages. I strive for elegant, idiomatic code, while being keenly aware of the need to balance craft, time and the bottom line.</p>
      <p>Over the last 20 years I have worked with some amazing folk at the BBC, Channel 4, MTV, Virgin and Comic Relief. Recent roles of note include Senior Engineer and Technical Lead at digital agencies in London and Falmouth.</p>
    </AboutText>
    <AboutLists as="aside" space={typography.rhythm(1)}>
      <article>
        <h4>Technologies</h4>
        <ul>
          <li>React, Gatsby, Jamstack</li>
          <li>Wordpress, Laravel, PHP</li>
          <li>GraphQL, Apollo, Node.js</li>
          <li>MySQL, MongoDB, Redis</li>
          <li>Alexa, Google Assistant</li>
          <li>Docker, Terraform, Ansible</li>
        </ul>
      </article>
      <article>
        <h4>Likes</h4>
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
