import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {HeaderWrapper, LogoContainer, Navigation, NavigationItem, HeaderLogo} from '../StyledElements/Navigation'
import logo from '../assets/images/logo.jpg';
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
    <HeaderWrapper className="port-header">

        <LogoContainer className="port-logo-wrapper">
          <Link className="port-logo-link" to="/">
            <picture>
              <HeaderLogo src={logo} alt={data.site.siteMetadata.title} / >
            </picture>
          </Link>
          {/* <p>{data.site.siteMetadata.description}</p> */}
        </LogoContainer>


        <Navigation className="port-nav-list">
            <NavigationItem className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="portNavItemLnk" to="/blog">About me</Link>
            </NavigationItem>
            <NavigationItem className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="portNavItemLnk" to="/blog">Blog</Link>
            </NavigationItem>
            <NavigationItem className="port-nav-list-item">
                <Link activeClassName="port-nav-item-link-active" className="portNavItemLnk" to="/repo">Repositories</Link>
            </NavigationItem>
        </Navigation>
    </HeaderWrapper>
  )
}

export default Header
