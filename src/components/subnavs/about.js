import React from 'react'
import { Link } from 'gatsby'

export default class SubmenuAbout extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
            <li className="nav__submenu-item "><Link to="/about">About Apollon</Link></li>
            <li className="nav__submenu-item "><Link to="/about/our-team">Our Team</Link></li>
            <li className="nav__submenu-item "><Link to="/about/understanding-cannabis">Understanding cannabis</Link></li>        
        </ul>
 
      )
    }
}

