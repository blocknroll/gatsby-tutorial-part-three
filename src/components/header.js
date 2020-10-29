import React from "react"
import navStyles from "../styles/navStyles.module.scss"

const Header = ({ children }) => (
  <header className={navStyles.siteHeader}>{children}</header>
)

export default Header
