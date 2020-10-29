import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navStyles.module.scss"

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className={navStyles.siteNavigation}>
        <button
          onClick={this.handleToggleClick}
          className={
            `${navStyles.menuTrigger}` +
            (this.state.showMenu ? ` ${navStyles.isActive}` : "")
          }
        >
          <div className={navStyles.iconMenuLine}>=</div>
          <div className={navStyles.iconMenuClose}>X</div>
        </button>
        <ul>{listMenuItems}</ul>
      </nav>
    )

    // // uses styling from global.scss, instead of navStyles.module.scss
    // return (
    //   <nav className="site-navigation">
    //     <button
    //       onClick={this.handleToggleClick}
    //       className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
    //     >
    //       <div className="icon-menu-line">=</div>
    //       <div className="icon-menu-close">X</div>
    //     </button>
    //     <ul>{listMenuItems}</ul>
    //   </nav>
    // )
  }
}

export default Navigation
