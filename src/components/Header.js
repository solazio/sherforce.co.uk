import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
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
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    const { path } = this.props;
    return (
      <nav className='navbar is-transparent' role='navigation' aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={logo} alt='Kaldi' style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className='navbar-end has-text-centered'>
              <Link
                className={
                  path === "/" ? "navbar-item is-selected" : "navbar-item"
                }
                to='/'>
                Home
              </Link>
              <Link
                className={
                  path === "/news" || path === "/news/"
                    ? "navbar-item is-selected"
                    : "navbar-item"
                }
                to='/news'>
                News
              </Link>
              <Link
                className={
                  path === "/about" || path === "/about/"
                    ? "navbar-item is-selected"
                    : "navbar-item"
                }
                to='/about'>
                About
              </Link>
              <Link
                className={
                  path === "/contact" || path === "/contact/"
                    ? "navbar-item is-selected"
                    : "navbar-item"
                }
                to='/contact'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

Navbar.propTypes = {
  path: PropTypes.string,
};

Navbar.defaultProps = {
  path: ``,
};

export default Navbar;
