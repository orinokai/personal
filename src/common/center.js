import styled from "styled-components"

const Center = styled.div`
  box-sizing: content-box;
  max-width: ${props => props.width};
  padding-left: ${props => props.gutter};
  padding-right: ${props => props.gutter};
  margin-left: auto;
  margin-right: auto;
`

Center.defaultProps = {
  width: '100%',
  gutter: '0'
};

export default Center
