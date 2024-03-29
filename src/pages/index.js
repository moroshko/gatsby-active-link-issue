import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/" activeStyle={{ backgroundColor: "#aaa" }}>
      Home
    </Link>
    <Link to="/about" activeStyle={{ backgroundColor: "#aaa" }}>
      About
    </Link>
  </Layout>
)

export default Home
