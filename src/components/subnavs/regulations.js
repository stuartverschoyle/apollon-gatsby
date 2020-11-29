import React from 'react'
import { Link } from 'gatsby'

export default class SubmenuRegulations extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item "><Link to="/regulation/apollon-licences">Apollon Licences</Link></li>
          <li className="nav__submenu-item "><Link to="/regulation/jamaican-regulatory-environment">Jamaican regulatory environment</Link></li>
          <li className="nav__submenu-item "><Link to="/regulation/uk-regulation">UK regulation</Link></li>
          <li className="nav__submenu-item "><Link to="/regulation/global-regulation">Global regulation</Link></li>                               
        </ul>
      )
    }
}

