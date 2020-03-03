import React from "react"
import styled from "styled-components";

const Stack = styled.div`
  & > * + * {
    margin-top: ${props => props.space};
  }
`

Stack.defaultProps = {
  space: '1rem'
}

export default Stack
