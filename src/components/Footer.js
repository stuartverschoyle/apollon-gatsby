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
              <div className="column is-4">
                <img src={logo} alt="Apollon" style={{ width: '14em'}} />
              </div>
              <div className="column is-8">
                <section className="menu">
                  {/* <ul className="menu-list" style={{display:'flex'}}>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/partners">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Investor Relations
                      </Link>
                    </li>                    
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul> */}
                </section>
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
                <p style={{display:'inline-flex'}}>&#9889; by&nbsp;<b>Kare</b>&nbsp;<img src={Karelogo} alt="Kare" style={{ height: '1.5em'}} /></p>
            </div> 
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
