import { createGlobalStyle } from "styled-components"
import typography from '../utils/typography'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  aside {
    ${typography.scale(-2/5)};
  }
`

export default GlobalStyle
