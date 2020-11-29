import React from 'react'
import { Link } from 'gatsby'

export default class SubmenuOperations extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item "><Link to="/operations/docs-place-international">Doc's Place International</Link></li>
          <li className="nav__submenu-item "><Link to="/operations/medically-supervised-trials">Medically supervised trials</Link></li>
          <li className="nav__submenu-item "><Link to="/operations/artificial-intelligence">Artificial intelligence</Link></li>               
        </ul>
      )
    }
}

