import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <p>
                Powered by{" "}
                <a className='has-text-danger' href='https://designza.co.uk'>
                  Designza
                </a>
              </p>
            </div>
            <div className='column is-6 has-text-centered--desktop'>
              <p>
                Copyright © 2020 <Link to='/'>sherforcefc.co.uk</Link>. All
                rights reserved
              </p>
            </div>
            {/* TO DO add social media accounts */}
            <div className='column is-3'>
              <ul className='is-pulled-right' style={{ display: "flex" }}>
                {/* <li className='mr-3'>
                  <a
                    title='Follow us on Facebook'
                    href='https://www.facebook.com/'>
                    <i className='p-icon--facebook'></i>
                  </a>
                </li> */}
                <li className='mr-3'>
                  <a
                    title='Follow us on Instagram'
                    href='https://www.instagram.com/'>
                    <i className='p-icon--instagram'></i>
                  </a>
                </li>
                {/* <li>
                  <a
                    title='Follow us on Twitter'
                    href='https://www.instagram.com/'>
                    <i className='p-icon--twitter'></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
