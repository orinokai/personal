import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { IconContext } from "react-icons"
import theme from "../styles/theme"
import icons from "../styles/icons"
import typography from '../styles/typography'
import "typeface-inter"
import Header from "./header"
import Stack from "../common/stack"
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
      <IconContext.Provider value={icons}>
        <Stack as="main" space={typography.rhythm(3)}>
          {/* <Header /> */}
          {children}
          <Footer />
        </Stack>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
