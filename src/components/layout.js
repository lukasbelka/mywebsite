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
          <Link to="/">home</Link>
        </li>
        <li className="header-link-p">
          <Link to="/about">about</Link>
        </li>
        <li className="header-link-p">
        <Link to="https://github.com/lukasbelka">github</Link>
        </li>
      </ul>
    )
  } else {
    header = (
      <ul className="header-list-p"> 
        <li className="header-link-p">
          <Link to="/">home</Link>
        </li>
        <li className="header-link-p">
          <Link to="/about">about</Link>
        </li>
        <li className="header-link-p">
        <Link to="https://github.com/lukasbelka">github</Link>
        </li>
      </ul>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
         <div class="container border-top border-bottom">
            <div class="row">
              <div class="col-sm text-center">
                <h6>data knowledge</h6>
                <ul class="footer-list">
                  <li><a class="footer-link" href="/data-analytics-faq">data analytics faq</a></li>
                  <li> Element 2</li>
                  <li> Element 3</li>
                </ul> 
              </div>
            </div>
          </div>
          <div class="text-center p-4">
            <p>
           © {new Date().getFullYear()} - Lukas Belka
            {` `}<br></br>
            <a className="footer-imprint" href="/">legal notice </a> |
            <a className="footer-imprint" href="/"> data protection</a>
            </p>
         </div>
      </footer>
    </div>
  )
}

export default Layout
