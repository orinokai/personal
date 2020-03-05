import React from "react"
import styled from "styled-components"
import typography from '../utils/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"


const OuterWrapper = styled.footer`
  background-color: ${typography.options.contrastColor};
`

const InnerWrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: ${typography.rhythm(2)} ${props => props.theme.frameGutter};
`

const NavList = styled(Switcher)`
  list-style: none;
  margin: 0;
  max-width: 65ch;

  a {
    text-decoration: none;
  }

  svg {
    margin-right: 0.5rem;
  }
`

const Footer = () => (
  <OuterWrapper>
    <InnerWrapper>
      <NavList forwardedAs="ul" breakpoint="50ch" space="1rem">
        <li><a href=""><FiGithub />GitHub</a></li>
        <li><a href=""><FiTwitter />Twitter</a></li>
        <li><a href=""><FiLinkedin />LinkedIn</a></li>
        <li><a href=""><FiMail />Email</a></li>
      </NavList>
    </InnerWrapper>
  </OuterWrapper>
)

export default Footer
