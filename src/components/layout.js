import React from "react"
import Header from "./header"
import Navigation from "./navigation"
import layoutStyles from "../styles/layoutStyles.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Header>
        <Navigation />
      </Header>
      {children}
    </div>
  )
}
