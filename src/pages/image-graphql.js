import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

// FLUID IMAGE
const Images = ({ data }) => {
  return (
    <Layout>
      <Img
        className="pic"
        fluid={data.img01.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className="pic"
        fluid={data.img02.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className="pic"
        fixed={data.img01Fixed.childImageSharp.fixed}
        alt="paragliding"
      />
    </Layout>
  )
}

// FLUID IMAGE
// path relative to "gatsby-source-filesystem" in gatsby-config: ie: src/data
export const query = graphql`
  query {
    img01: file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img02: file(relativePath: { eq: "02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img01Fixed: file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// // SINGLE FIXED IMAGE
// const Images = ({ data }) => {
//   return (
//     <Layout>
//       <Img
//         className="pic"
//         fixed={data.file.childImageSharp.fixed}
//         alt="paragliding"
//       />
//     </Layout>
//   )
// }

// // SINGLE FIXED IMAGE
// // path relative to "gatsby-source-filesystem" in gatsby-config: ie: src/data
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "01.jpg" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

export default Images
