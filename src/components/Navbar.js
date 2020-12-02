import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/apollon_logo-green.svg'

import SubmenuAbout from './../components/subnavs/about'
import SubmenuOperations from './../components/subnavs/operations'
import SubmenuProducts from './../components/subnavs/products'
import SubmenuRegulations from './../components/subnavs/regulations'
import SubmenuInvestor from './../components/subnavs/investor'


const Navbar = class extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobMenuactive: false,
      navBarActiveClass: '',
      showAboutMenu: false,
      showOperationsMenu: false,
      showProductsMenu: false,
      showRegulationsMenu: false,
      showInvestorMenu: false
    }
  }


  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  handleClick = (e) => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      e.preventDefault();
    } 
    this.setState(prevState => ({
      active: !prevState.active,
      [e.target.dataset.space]: this.state.active
    })); 

  };
  
  handleHover = (e) => {
    this.setState({ [e.target.dataset.space]: true });
  };
  handleLeave = (e) => {
    this.setState({ [e.target.dataset.space]: false });
  };  


  render() {

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Link to="/" className="navbar-item logo" title="Logo">
          <img src={logo} alt="Apollon" style={{ width: '219px' }} />
        </Link>
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <ul className="nav__menu">
                <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                  <Link className="navbar-item" to="/about" data-space="showAboutMenu" onClick={this.handleClick}  onMouseEnter={this.handleHover}>
                   About Us
                  </Link>
                  <div className={`submenu-container ${this.state.showAboutMenu ? 'slide-enter' : 'slide-leave'}`}>
                    <SubmenuAbout />
                  </div>
                </li>
                <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                  <Link className="navbar-item" to="/operations/docs-place-international" data-space="showOperationsMenu" onClick={this.handleClick}  onMouseEnter={this.handleHover}>
                   Operations
                  </Link>
                  <div className={`submenu-container ${this.state.showOperationsMenu ? 'slide-enter' : 'slide-leave'}`}>
                    <SubmenuOperations />
                  </div>
                </li>
                <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                  <Link className="navbar-item" to="/products/trademarked-products" data-space="showProductsMenu" onClick={this.handleClick}  onMouseEnter={this.handleHover}>
                    Products
                  </Link>
                  <div className={`submenu-container ${this.state.showProductsMenu ? 'slide-enter' : 'slide-leave'}`}>
                     <SubmenuProducts />
                  </div> 
                </li>
                <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                  <Link className="navbar-item" to="/regulation/apollon-licences" data-space="showRegulationsMenu" onClick={this.handleClick}  onMouseEnter={this.handleHover}>
                    Regulations
                  </Link> 
                  <div className={`submenu-container ${this.state.showRegulationsMenu ? 'slide-enter' : 'slide-leave'}`}>
                    <SubmenuRegulations />
                  </div>          
                  </li>
                  <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                    <Link className="navbar-item" to="/investor-relations" data-space="showInvestorMenu" onClick={this.handleClick}  onMouseEnter={this.handleHover}>
                      Investor Relations
                    </Link>
                    <div className={`submenu-container ${this.state.showInvestorMenu ? 'slide-enter' : 'slide-leave'}`}>
                      <SubmenuInvestor />     
                    </div>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
