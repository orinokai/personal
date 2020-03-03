import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../common/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Ethos from "../components/ethos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Skills />
    <Ethos />
  </Layout>
)

export default IndexPage
