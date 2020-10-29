import React from "react"
import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      {children}
    </div>
  )
}
