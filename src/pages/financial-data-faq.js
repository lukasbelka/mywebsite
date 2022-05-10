import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const  financialDataFaq= ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Financial-Data-FAQ" />
      <h1>Financial-Data-FAQ</h1>
      <p>Here comes the content.</p>
    </Layout>
  )
}

export default financialDataFaq

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`