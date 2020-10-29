import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ImgStyles from "../styles/imgStyles.module.scss"
import Layout from "../components/layout"

const Images = ({ data }) => {
  return (
    <Layout>
      <Img
        className={ImgStyles.responsive}
        fluid={data.img01.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className={ImgStyles.responsive}
        fluid={data.img02.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className={ImgStyles.responsive}
        fluid={data.img03.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className={ImgStyles.responsive}
        fluid={data.img04.childImageSharp.fluid}
        alt="paragliding"
      />
      <Img
        className="pic"
        fixed={data.img04Fixed.childImageSharp.fixed}
        alt="paragliding"
      />
    </Layout>
  )
}

// paths relative to "gatsby-source-filesystem" in gatsby-config. ie: src/data
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
    img03: file(relativePath: { eq: "03.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img04: file(relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
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
    img04Fixed: file(relativePath: { eq: "04.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Images
