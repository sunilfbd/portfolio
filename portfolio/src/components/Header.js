import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {Navigation, NavigationItem} from '../StyledElements/Navigation'
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


        <Navigation className="port-nav-list">
            <NavigationItem className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="port-nav-item-link" to="/blog">Blog</Link>
            </NavigationItem>
            <NavigationItem className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="port-nav-item-link" to="/repo">Repositories</Link>
            </NavigationItem>
        </Navigation>
    </header>
  )
}

export default Header
