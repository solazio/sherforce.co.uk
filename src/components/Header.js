import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Header = ({ path }) => (
  <nav class="uk-navbar-container uk-margin">
    <div class="uk-navbar-left">
      <a class="uk-navbar-item uk-logo" href="#">Logo</a>
      <ul class="uk-navbar-nav">
          <li>
              <a href="#">
                  <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                  Features
              </a>
          </li>
      </ul>
      <div class="uk-navbar-item">
          <div>Some <a href="#">Link</a></div>
      </div>
      <div class="uk-navbar-item">
          <form action="javascript:void(0)">
              <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
              <button class="uk-button uk-button-default">Button</button>
          </form>
      </div>
    </div>
  </nav>

  {/* <header id='navigation' className='p-navigation'>
    <div className='p-navigation__row'>
      <div className='p-navigation__banner'>
        <div className='p-navigation__logo'>
          <Link to='/' className='p-navigation__item' title='Logo'>
            <img
              src={logo}
              alt='Kaldi'
              className='p-navigation__image'
              style={{ width: "88px" }}
            />
          </Link>
        </div>
        <a
          href='#navigation'
          className='p-navigation__toggle--open'
          title='menu'>
          <i className='p-icon--menu'></i>
        </a>
        <a
          href='#navigation-closed'
          className='p-navigation__toggle--close'
          title='close menu'>
          <i className='p-icon--close'></i>
        </a>
      </div>
      <nav className='p-navigation__nav'>
        <span className='u-off-screen'>
          <a href='#main-content'>Jump to main content</a>
        </span>
        <ul className='p-navigation__items' role='menu'>
          <li
            className={
              path === "/"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/'>
              Home
            </Link>
          </li>
          <li
            className={
              path === "/news" || path === "/news/"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/news'>
              News
            </Link>
          </li>
          <li
            className={
              path === "/about" || path === "/about/"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/about'>
              About us
            </Link>
          </li>
          <li
            className={
              path === "/contact" || path === "/contact/"
                ? "p-navigation__item is-selected"
                : "p-navigation__item"
            }
            role='menuitem'>
            <Link className='p-navigation__link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header> */}
);

Header.propTypes = {
  path: PropTypes.string,
}

Header.defaultProps = {
  path: ``,
}

export default Header
