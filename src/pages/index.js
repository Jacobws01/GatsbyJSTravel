import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Champion from "../components/champion"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Champion />
  </Layout>
)

export default IndexPage
