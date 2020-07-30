import React from "react";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <>
      <section className='hero is-medium is-primary is-slanted--right'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-size-2 has-line'>Thank you</h1>
          </div>
        </div>
      </section>
      <section className='section mt-6'>
        <div className='container'>
          <div className='columns content'>
            <div className='column is-3' style={{display: "flex", justifyContent:"center"}}>
              <i className='p-icon--big-smile'></i>
            </div>
            <div className='column is-6'>
              <div className='pt-6'>
                <h3>Thank you for your message!</h3>
                <p>Someone from our team will get in touch with you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  </Layout>
);
