import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile, GitHub } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <div className="align-middle"/> <span className="align-middle"> Wesley Yee </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              {/* <li><Link to="/repositories" className="lined-link" activeClassName="active"> <GitHub /> <span> Github </span> </Link></li>   */}
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Projects </span> </Link></li>  
              <li><a href="/resume.pdf" target="_blank" className="lined-link" activeClassName="active"> <Feather /> <span> Resume </span> </a></li>
                {/* <li>
                  <div className="lined-link" activeClassName="active" style={{margin: '0 1rem', verticalAlign: 'top'}} >
                    <a href="resume.pdf" target="_blank"> 
                      <Feather /> 
                      <span> Resume </span> 
                    </a>
                 </div>
                </li>  */}
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
