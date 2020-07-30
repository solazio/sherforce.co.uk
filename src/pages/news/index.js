import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='hero is-medium is-primary is-slanted--right'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title is-size-2 has-line'>Latest news</h1>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
