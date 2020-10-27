import React from "react"
import Layout from "../components/layout"
import Img01 from "../data/01.jpg" // Tell webpack this JS file uses this image

console.log(Img01) // /static/01-81871ceca6a006cb824acf765003655b.jpg
console.log(typeof Img01) // string

export default function imageWebpack() {
  return (
    <Layout>
      <img src={Img01} className="someClassName" alt="paragliding" />
    </Layout>
  )
}

// https://www.gatsbyjs.com/docs/importing-assets-into-files/

// With webpack you can import a file right in a JavaScript module.
// This tells webpack to include that file in the bundle.
// Unlike CSS imports, importing a file gives you a string value.
// This imported file’s value is the final path
// you can reference in your code, e.g. as the src attribute of an image

// This ensures that when the project is built,
// webpack will correctly move the images
// into the public folder, and provide us with correct paths.
