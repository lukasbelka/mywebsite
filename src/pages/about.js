import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfilePic from "../images/profile-pic.png"

const  about= ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1>About</h1>
      <img class="picture" src={ProfilePic}
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={300}
        height={300}
        quality={95}
        alt="About Lukas"
      />
      <p>Hi I'm Lukas!</p>
      <p>This is where I blog about all the things I encounter on my (still ongoing and for sure never ending) journey from business to data analytics.
         A few years ago I headed the PMO of a large IT transformation project in the insurance industry and in my daily business I was kind of scratcing the data
         surface with tabular tools and their functionality - back then I wanted to get more efficient and handle data professionally.
      </p>
      <p>
         Today I work as an Analytics Developer, querying data, making it human-friendly and building dashboards. I use DAX (Data Analysis Expression) and Python as well as SQL from time to time.
         However I am still learning new things every day - this is what motivates me, next to my passion for web development.
      </p>
    </Layout>
  )
}

export default about

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`