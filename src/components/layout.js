import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyle from "../styles/global"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
