/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Lukas profile picture"
      />
      {author?.name && (
        <p>
          {author?.summary || null} store things on
          {` `}
          <a href={`https://github.com/lukasbelka${social?.github || ``}`}>
             GitHub</a> and 
             {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>tweet</a> from time to time.
        </p>
      )}
    </div>
  )
}

export default Bio
