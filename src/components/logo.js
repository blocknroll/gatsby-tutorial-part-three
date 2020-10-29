import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navStyles.module.scss"

export default function Logo() {
  return (
    <div className={navStyles.logo}>
      <Link to="/">
        <h2>My Site</h2>
      </Link>
    </div>
  )
}
