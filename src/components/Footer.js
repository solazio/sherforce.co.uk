import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-4'>
              <p>
                Powered by{" "}
                <a className='has-text-danger' href='https://designza.co.uk'>
                  Designza
                </a>
              </p>
            </div>
            <div className='column is-4'>
              <p>
                Copyright © 2020 <Link to='/'>sherforcefc.co.uk</Link>. All
                rights reserved
              </p>
            </div>
            <div className='column is-4'>
              <a
                title='Follow me on Facebook'
                href='https://www.facebook.com/adrianpenuart'>
                <i className='p-icon--facebook'></i>
              </a>
              <a
                title='Follow me on Instagram'
                href='https://www.instagram.com/adpenu/'>
                <i className='p-icon--instagram'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
