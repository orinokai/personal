import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    max-width: ${props => props.theme.measure};
  }

  html,
  body,
  div,
  header,
  nav,
  main,
  footer {
    max-width: none;
  }

  #wrapper {
    max-width: ${props => props.theme.frameWidth};
    margin: 0 auto;
  }

  :root {
    font-size: calc(${props => props.theme.baseFontSize + ' + ' + props.theme.baseFontMultiplier});
  }
`

export default GlobalStyle
