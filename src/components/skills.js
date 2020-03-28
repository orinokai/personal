import React from "react"
import styled from "styled-components"
import typography from '../styles/typography'
import Center from "../common/center"

const OuterWrapper = styled.section`
  background: radial-gradient(#f2f2f2, ${typography.options.contrastColor});
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
    ${typography.scale(3/5)};
    font-weight: 500;

    &:after {
      content: '\\0000a0';
      display: inline-block;
      vertical-align: middle;
      background-color: #4f658e;
      margin-left: 1.2ch;
      width: 1.4ch;
      height: 4px;
    }
  }
`

const Skills = () => (
  <OuterWrapper>
    <InnerWrapper>
      <h4>Skills</h4>
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
