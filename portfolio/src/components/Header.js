import React from "react"
import { Link } from "gatsby"

import logo from '../assets/images/logo.png'

const Header = () => (
  <header>
      <img src={logo} alt="logo" className="logo"/>
      <nav>
          <li className="navLink">
              <Link to="/">Home</Link>
          </li>
          <li className="navLink">
              <Link to="/blog">Blog</Link>
          </li>
          <li className="navLink">
              <Link to="/repo">Repositories</Link>
          </li>
      </nav>
  </header>
)

export default Header
