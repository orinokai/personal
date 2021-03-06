import React from "react"
import styled from "styled-components"
import typography from '../styles/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"


const OuterWrapper = styled.footer`
  background: radial-gradient(#f4f4f4, ${typography.options.contrastColor});

  @media (min-width: 105ch) {
    clip-path: polygon(
      0 0%, /* left top */
      100% 0%, /* right top */ 
      100% 100%, /* right bottom */
      0% 100% /* left bottom */
    );
    padding: 1rem 0 0.5rem 0;
  }
`

const InnerWrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: ${typography.rhythm(2)} ${props => props.theme.frameGutter};
`

const NavList = styled(Switcher)`
  list-style: none;
  margin: 0;

  a {
    position: relative;
    text-decoration: none;
    z-index: 0;
  }

  a:before {
    content: "\\00a0";
    position: absolute;
    top: -20%;
    left: -10%;
    width: 140%;
    height: 140%;
    background-color: white;
    z-index: -1;
  }

  @media (min-width: 105ch) {
    ${props => props.children.map((child, index) => `li:nth-child(${index + 1}) a:before {
      transform: skew(${getRandom(-2, 2)}deg) rotate(${getRandom(-2, 2)}deg);
    }`)}
  }

  svg {
    margin-right: 0.5rem;
  }
`

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const Footer = () => (
  <OuterWrapper>
    <InnerWrapper>
      <NavList forwardedAs="ul" breakpoint="50ch" space="1rem">
        <li><a href="https://github.com/orinokai"><FiGithub strokeWidth="2.5" />GitHub</a></li>
        <li><a href="https://twitter.com/orinokai"><FiTwitter strokeWidth="2.5" />Twitter</a></li>
        <li><a href="https://linkedin.com/in/orinokai"><FiLinkedin strokeWidth="2.5" />LinkedIn</a></li>
        <li><a href="mailto:me@robstanford.com"><FiMail strokeWidth="2.5" />Email</a></li>
      </NavList>
    </InnerWrapper>
  </OuterWrapper>
)

export default Footer
