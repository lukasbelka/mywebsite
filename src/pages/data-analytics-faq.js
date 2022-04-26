import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const  dataAnalyticsFaq= ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Data-Analytics-FAQ" />
      <h1>Data-Analytics-FAQ</h1>
      <p>Here comes the content.</p>
    </Layout>
  )
}

export default dataAnalyticsFaq

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`