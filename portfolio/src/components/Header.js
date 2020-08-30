import React from "react"
import { Link } from "gatsby"

import '../assets/styles/components/header.scss'
import logo from '../assets/images/logo.png'

const Header = () => (
  <header className="port-header">
      {/* <picture >
        <img src={logo} alt="logo" className="port-logo-img"/>
      </picture> */}

        <h1 className="port-logo">
            <Link className="port-logo-link" to="/">
                Hand On Learning
            </Link>
        </h1>

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

export default Header
