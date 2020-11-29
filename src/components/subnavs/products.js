import React from 'react'
import { Link } from 'gatsby'

export default class SubmenuProducts extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item "><Link to="/products/trademarked-products">Trademarked Products</Link></li>
          <li className="nav__submenu-item "><Link to="/products/3d-printer">3D Printer</Link></li>
          <li className="nav__submenu-item "><Link to="/products/cultivation-processing-and-extraction">Cultivation, processing &amp; extraction</Link></li>                      
        </ul>
      )
    }
}

