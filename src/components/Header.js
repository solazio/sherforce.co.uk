import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "../../static/img/logo.png";
import { useLocation } from "@reach/router";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const path = useLocation().pathname;

  return (
    <nav
      className='navbar is-transparent'
      role='navigation'
      aria-label='main-navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item is-uppercase' title='Logo'>
            <img src={logo} alt='Sher Force FC logo' />
            <span className='pl-3 has-text-dark'>Sher Force FC</span>
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target='navMenu'
            role='menu'
            tabIndex='0'
            onClick={() => {
              setActive(!active);
              if (active) {
                setNavBarActiveClass("is-active");
              } else {
                setNavBarActiveClass("");
              }
            }}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id='navMenu' className={`navbar-menu ${navBarActiveClass}`}>
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
                path === "/players" || path === "/players/"
                  ? "navbar-item is-selected"
                  : "navbar-item"
              }
              to='/players/'>
              Players
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
                path === "/history" || path === "/history/"
                  ? "navbar-item is-selected"
                  : "navbar-item"
              }
              to='/history/'>
              History
            </Link>
            <Link
              className={
                path === "/contact" || path === "/contact/"
                  ? "navbar-item is-selected"
                  : "navbar-item"
              }
              to='/contact/'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  path: PropTypes.string,
};

Navbar.defaultProps = {
  path: ``,
};

export default Navbar;
