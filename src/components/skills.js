import React from "react"
import styled from "styled-components"
import typography from '../utils/typography'
import Center from "../common/center"

const OuterWrapper = styled.section`
  background-color: ${typography.options.contrastColor};
`

const InnerWrapper = styled(Center)`
  max-width: ${props => props.theme.frameWidth};
  padding: ${typography.rhythm(2)} ${props => props.theme.frameGutter};

  ul {
    list-style: none;
    margin-left: 0;
    margin-bottom: 0
  }

  ul > li {
    ${typography.scale(4/5)};

    &:after {
      content: '\\0000a0';
      display: inline-block;
      vertical-align: middle;
      background-color: black;
      margin-left: 1ch;
      width: 2.2ch;
      height: 2px;
    }
  }
`

const Skills = () => (
  <OuterWrapper>
    <InnerWrapper>
      <h5>Skills</h5>
      <ul>
        <li>Web Development</li>
        <li>Software Engineering</li>
        <li>DevOps Consulting</li>
        <li>Server Admin</li>
        <li>Agile Project Management</li>
        <li>Training & Mentoring</li>
      </ul>
    </InnerWrapper>
  </OuterWrapper>
)

export default Skills
