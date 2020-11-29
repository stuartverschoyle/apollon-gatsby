import React from 'react'
import { Link } from 'gatsby'

export default class SubmenuRegulations extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item "><Link to="/investor-relations/">Investor Relations</Link></li>
          <li className="nav__submenu-item "><a href="https://www.aquis.eu/aquis-stock-exchange/member?securityidaqse=AFRI" target="_blank" rel="noreferrer">Share Price Information</a></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/shareholder-information">Shareholder Information</Link></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/presentations-and-reports">Presentations &amp; Reports</Link></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/news-and-media">News &amp; Media</Link></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/regulatory-news">Regulatory News</Link></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/aqse-rule-71">AQSE Rule 71</Link></li>
          <li className="nav__submenu-item "><Link to="/investor-relations/advisers">Advisers</Link></li>                                        
        </ul>
      )
    }
}

