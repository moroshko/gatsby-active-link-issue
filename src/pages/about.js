import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Link to="/" activeStyle={{ backgroundColor: "#aaa" }}>
      Home
    </Link>
    <Link to="/about" activeStyle={{ backgroundColor: "#aaa" }}>
      About
    </Link>
  </Layout>
)

export default About
