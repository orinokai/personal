import React from "react"
import styled from "styled-components"
import typography from '../styles/typography'
import Center from "../common/center"
import Switcher from "../common/switcher"
import { FiCode, FiGitCommit, FiSettings, FiLifeBuoy, FiServer, FiCalendar } from "react-icons/fi"

const OuterWrapper = styled.section`
  background: radial-gradient(#f4f4f4, ${typography.options.contrastColor});

  @media (min-width: 105ch) {
    clip-path: polygon(
      0 0%, /* left top */
      100% 4%, /* right top */ 
      100% 96%, /* right bottom */
      0% 100% /* left bottom */
    );
    padding: 1rem 0;
  }
`

const InnerWrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: ${typography.rhythm(2)} ${props => props.theme.frameGutter};

  ul {
    list-style: none;
  }

  ul:first-child {
    margin-bottom: -0.5rem;
  }

  ul > li {
    ${typography.scale(3/5)};
    font-weight: 500;
    margin-bottom: ${typography.rhythm(1)};
  }
`

const Icon = styled.span`
  margin-right: 1.8rem;
  vertical-align: bottom;
`

const Skills = () => (
  <OuterWrapper>
    <InnerWrapper>
      <h4>Skills</h4>
      <Switcher breakpoint="40rem" space="1rem">
        <ul>
          <li><Icon><FiCode /></Icon>Web Development</li>
          <li><Icon><FiGitCommit /></Icon>Software Engineering</li>
          <li><Icon><FiSettings /></Icon>DevOps Consulting</li>
        </ul>
        <ul>
          <li><Icon><FiServer /></Icon>Server Admin</li>
          <li><Icon><FiCalendar /></Icon>Project Management</li>
          <li><Icon><FiLifeBuoy /></Icon>Training & Mentoring</li>
        </ul>
      </Switcher>
    </InnerWrapper>
  </OuterWrapper>
)

export default Skills
