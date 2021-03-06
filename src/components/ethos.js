import React from "react"
import styled from "styled-components"
import typography from '../styles/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import Stack from "../common/stack"
import { GoQuote } from "react-icons/go"

const Wrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: 0 ${props => props.theme.frameGutter};
`

const EthosQuote = styled.blockquote`
  position: relative;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  margin-top: ${typography.rhythm(1)};
  padding-left: 3rem;
  line-height: 1.6;
`

const EthosQuoteMark = styled(GoQuote)`
  position: absolute;
  left: 0.2rem;
  top: -0.2rem;
  font-size: 2rem;
  color: #c93636;
`

const EthosText = styled.div`
  flex-grow: 3;
  margin-top: ${typography.rhythm(1)};

  p:last-child {
    margin-bottom: 0;
  }
`

const Ethos = () => (
  <Wrapper as={Stack} forwardedAs="section" space={typography.rhythm(1)}>
    <h4>Ethos</h4>
    <Switcher breakpoint="40rem" space="3rem">
      <EthosQuote>
        <EthosQuoteMark />
        <p>Communication and empathy are the core of great software development.</p>
      </EthosQuote>
      <EthosText>
        <p>Software is typically developed for people, with people, to create a human experience. I aim to use discussion and understanding to ensure the right features get built and the resulting code is easy to maintain for future developers.</p>
        <p>My goal is to create a competitive advantage for my clients by delivering a high quality product and a remarkable user experience. I try to work smarter, not harder, using modern platforms and best practices to deliver reliable, thorough work in good time.</p>
      </EthosText>
    </Switcher>
  </Wrapper>
)

export default Ethos
