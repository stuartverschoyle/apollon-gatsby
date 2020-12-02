import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/apollon_logo-green.svg'
import Karelogo from '../img/kare_logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
               <div className="column is-3">
               <Link className="navbar-item" to="/"><img src={logo} alt="Apollon" style={{ width: '14em'}} /></Link>
              </div>
              <div className="column is-3">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <ul>
                  <li><Link className="navbar-item" to="/about">About Apollon</Link></li>
                  <li><Link className="navbar-item" to="/about/our-team">Our Team</Link></li>
                  <li><Link className="navbar-item" to="/about/understanding-cannabis">Understanding cannabis</Link></li>
                </ul>
                <Link className="navbar-item" to="/operations/docs-place-international">
                  Operations
                </Link>        
                <ul>
                  <li><Link className="navbar-item" to="/operations/docs-place-international">Doc's Place International</Link></li>
                  <li><Link className="navbar-item" to="/operations/medically-supervised-trials">Medically supervised trials</Link></li>
                  <li><Link className="navbar-item" to="/operations/artificial-intelligence">Artificial intelligence</Link></li>
                </ul>                              
              </div>
              <div className="column is-3">
                <Link className="navbar-item" to="/products/trademarked-products">
                Products
                </Link>
                <ul>
                  <li><Link className="navbar-item" to="/products/trademarked-products">Trademarked Products</Link></li>
                  <li><Link className="navbar-item" to="/products/3d-printer">3D Printer</Link></li>
                  <li><Link className="navbar-item" to="/products/cultivation-processing-and-extraction">Cultivation, processing &amp; extraction</Link></li>
                </ul>                 
                <Link className="navbar-item" to="/regulation/apollon-licences">
                Regulation
                </Link>
                <ul>
                  <li><Link className="navbar-item" to="/regulation/apollon-licences">Apollon Licences</Link></li>
                  <li><Link className="navbar-item" to="/regulation/jamaican-regulatory-environment">Jamaican regulatory environment</Link></li>
                  <li><Link className="navbar-item" to="/regulation/uk-regulation">UK regulation</Link></li>
                  <li><Link className="navbar-item" to="/regulation/global-regulation">Global regulation</Link></li>
                </ul>                   
              </div>
              <div className="column is-3">
                <Link className="navbar-item" to="/investor-relations">
                Investor Relations
                </Link>
                <ul>
                  <li><Link className="navbar-item" to="/investor-relations/">Investor Relations</Link></li>
                  <li><a className="navbar-item" href="https://www.aquis.eu/aquis-stock-exchange/member?securityidaqse=AFRI" target="_blank" rel="noreferrer">Share Price Information</a></li>
                  <li><Link className="navbar-item" to="/investor-relations/shareholder-information">Shareholder Information</Link></li>
                  <li><Link className="navbar-item" to="/investor-relations/presentations-and-reports">Presentations &amp; Reports</Link></li>
                  <li><Link className="navbar-item" to="/investor-relations/news-and-media">News &amp; Media</Link></li>
                  <li><Link className="navbar-item" to="/investor-relations/regulatory-news">Regulatory News</Link></li>
                  <li><Link className="navbar-item" to="/investor-relations/aqse-rule-71">AQSE Rule 71</Link></li>
                  <li><Link className="navbar-item" to="/investor-relations/advisers">Advisers</Link></li>
                </ul>                   
                <Link className="navbar-item" to="/contact">
                Contact Us
                </Link>                      
              </div>                                          
            </div>
          </div>
        </div>
        <div className="container has-margin-bottom-twenty">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-8">
              <p>Copyright &copy; 2020 Apollon Formularies Ltd. All rights reserved</p>
            </div>
            <div className="column is-4 has-text-right">
                <p style={{display:'inline-flex'}}><span role="img" aria-label="powered">&#9889;</span> by&nbsp;<b>kare</b>&nbsp;<img src={Karelogo} alt="Kare" style={{ height: '1.5em'}} /></p>
            </div> 
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
