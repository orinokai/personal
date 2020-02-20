import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Hey, I’m Rob, a freelance web developer based in wild west
        Cornwall.</h1>
      <p>Welcome in, have a look around.</p>
    </section>
    <section>
      <h2>I help organisations create engaging digital experiences and robust
        software products.</h2>
      <p>I currently specialise in full-stack Javascript development and DevOps
        consulting, however my experience extends to building websites and apps
        using a great variety of languages, frameworks, CMSs and APIs.</p>
      <p>Over the last 20 years I have worked with some lovely folk in the
        digital world, such as the BBC, Channel 4, MTV, Virgin and Comic
        Relief. Recent roles include Senior Engineer and Technical Lead at
        digital agencies in London and Falmouth.</p>
    </section>
    <section>
      <h2>My skills</h2>
      <ul>
        <li>Web Development</li>
        <li>Software Engineering</li>
        <li>DevOps & Server Admin</li>
        <li>Systems Analysis & Design</li>
        <li>Agile Project Management</li>
        <li>Training & Mentoring</li>
      </ul>
    </section>
    <section>
      <blockquote>
        <p>The craft of programming begins with empathy.</p>
        <footer>Kent Beck, <cite>
          <a href="https://twitter.com/KentBeck/status/566255102067871744">
            Twitter
          </a>
          </cite></footer>
      </blockquote>
      <p>Communication is the most important tool in software development. Less
        planning and processes, more working software and feedback. Humanising
        the development process ensures the right product is built for the
        right users, the user experience is frictionless, and the code is
        straightforward.</p>
      <p>I help clients gain a competitive advantage by delivering a quality
        product that is reliable, reusable and easy to maintain. I try to work
        smarter, not harder, using modern tools and best practices to deliver
        thorough work in good time.</p>
    </section>
    <section>
      <h3>Technologies</h3>
      <ul>
        <li>React, Gatsby, GraphQL, Apollo, Node.js</li>
        <li>Wordpress, Laravel, PHP</li>
        <li>Alexa Skills, Jovo</li>
        <li>Docker, Terraform, Ansible</li>
        <li>Google Cloud Platform, Cloudflare</li>
      </ul>
      <h3>Likes</h3>
      <ul>
        <li>Sea swimming</li>
        <li>Weird teas</li>
        <li>Guitar twanging and desk drumming</li>
        <li>Sherry and olives</li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
