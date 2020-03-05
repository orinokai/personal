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

const EthosQuote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  position: relative;
  margin-left: 1.7rem;
  margin-top: 1rem;

  p:before {
    position: absolute;
    top: -1.2rem;
    left: -2.8rem;
    font-family: "Poppins";
    font-size: 8rem;
    line-height: 1;
    content: open-quote;
    color: lightgray;
    z-index: -1;
  }
`

const EthosText = styled.div`
  margin-top: 1rem;

  p:last-child {
    margin-bottom: 0;
  }
`

const Ethos = () => (
  <Wrapper as={Stack} forwardedAs="section" space={typography.rhythm(1)}>
    <h5>Ethos</h5>
    <Switcher breakpoint="40rem" space="1rem">
      <EthosQuote>
        <p>Communication is the key to great software development.</p>
      </EthosQuote>
      <EthosText>
        <p>I aim to humanise the development process with empathy and discussion to ensure the right features get built and the resulting code is straightforward to maintain.</p>
        <p>My goal is to create a competitive advantage for my clients by delivering a quality product with a great user experience. I try to work smarter, not harder, using modern platforms and best practices to deliver reliable, thorough work in good time.</p>
      </EthosText>
    </Switcher>
  </Wrapper>
)

export default Ethos
