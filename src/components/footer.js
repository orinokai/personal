import React from "react"
import styled from "styled-components"
import typography from '../utils/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"

const OuterWrapper = styled.footer`
  background-color: #E1E5E8;
`

const InnerWrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: ${typography.rhythm(2)} ${props => props.theme.frameGutter};
  list-style: none;

  li {
    flex-grow: 0;

    & + li {
      margin-left: 8ch;
    }

    a {
      color: black;
      text-decoration: none;
    }
}
`

const Footer = () => (
  <OuterWrapper>
    <InnerWrapper as={Switcher} forwardAs="ul" breakpoint="40rem" space="1rem">
      <li><a href="">GitHub</a></li>
      <li><a href="">LinkedIn</a></li>
      <li><a href="">Twitter</a></li>
      <li><a href="">Email</a></li>
    </InnerWrapper>
  </OuterWrapper>
)

export default Footer
