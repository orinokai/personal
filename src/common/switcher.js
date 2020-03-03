import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(${props => props.space} / 2 * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((${props => props.breakpoint} - (100% - ${props => props.space})) * 999);
    margin: calc(${props => props.space} / 2);
  }

  & > * > :nth-last-child(n+${props => parseInt(props.max) + 1}),
  & > * > :nth-last-child(n+${props => parseInt(props.max) + 1}) ~ * {
    flex-basis: 100%;
  }
`

const Switcher = ({ children, ...other }) => (
  <Wrapper {...other}>
    <div>{children}</div>
  </Wrapper>
)

Switcher.defaultProps = {
  breakpoint: '100%',
  space: '0rem',
  max: 999
};

export default Switcher
