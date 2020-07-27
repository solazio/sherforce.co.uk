import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          className='section'
          style={{
            backgroundColor: "#1555a8",
            color: "#f7f7f7",
          }}>
          <div className='container'>
            <h1 className='has-text-weight-bold is-size-2'>Latest news</h1>
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
