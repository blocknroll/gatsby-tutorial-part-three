import React from "react"
import navStyles from "../styles/navStyles.module.scss"

export default function Header({ children }) {
  return <header className={navStyles.siteHeader}>{children}</header>
}

// // Or this, if you're not into the whole brevity thing:
// const Header = ({ children }) => (
//   <header className={navStyles.siteHeader}>{children}</header>
// )

// export default Header
