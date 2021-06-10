import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Champion from "../components/champion"
import Trips from "../components/trips"
import Testimonials from "../components/testimonials"
import Stats from "../components/stats"
import Email from "../components/email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Champion />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
