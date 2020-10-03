import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Table from "../components/Table";
import FlipText from "../components/FlipText";

export const IndexPageTemplate = ({ title, teams }) => {
  return (
    <div>
      <section className='section has-image has-text-light'></section>
      <section
        className='section has-text-light is-slanted--right has-background-black-bis'
        style={{ paddingBlockEnd: "8rem" }}>
        <div className='container'>
          <h1 className='is-size-1 pt-6'>{title}</h1>
          <FlipText />
          <h2 className="is-size-4 pb-5">
            We are always looking for new talented players to join our team
          </h2>
          <p>
            <Link to='/contact' className='button is-primary'>
              Join us now
            </Link>
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <Table teams={teams} />
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  teams: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} teams={frontmatter.teams} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        teams {
          name
          points
          played
          won
          drawn
          lost
          gd
        }
      }
    }
  }
`;
