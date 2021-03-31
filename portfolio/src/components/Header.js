import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import '../assets/styles/components/header.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }`
  )

  return(
    <header className="port-header">
        {/* <picture >
          <img src={logo} alt="logo" className="port-logo-img"/>
        </picture> */}
        
        <div className="port-logo-wrapper">
          <h1 className="port-logo">
              <Link className="port-logo-link" to="/">
                {data.site.siteMetadata.title}
              </Link>
          </h1>
          <p>{data.site.siteMetadata.description}</p>
        </div>


        <nav className="port-nav-list">
            <li className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="port-nav-item-link" to="/blog">Blog</Link>
            </li>
            <li className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="port-nav-item-link" to="/repo">Repositories</Link>
            </li>
        </nav>
    </header>
  )
}

export default Header
