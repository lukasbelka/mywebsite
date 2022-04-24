import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <ul className="header-list-p"> 
        <li className="header-link-p">
          <Link to="/">Home</Link>
        </li>
        <li className="header-link-p">
          <Link to="/">About</Link>
        </li>
        <li className="header-link-p">
        <Link to="/">Github</Link>
        </li>
      </ul>
    )
  } else {
    header = (
      <ul className="header-list-p"> 
        <li className="header-link-p">
          <Link to="/">Home</Link>
        </li>
        <li className="header-link-p">
          <Link to="/">About</Link>
        </li>
        <li className="header-link-p">
        <Link to="/">Github</Link>
        </li>
      </ul>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div>
          <p>Col_1</p>
        </div>
        <div>
          <p>Col_2</p>
        </div>
        © {new Date().getFullYear()} - Lukas Belka
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
