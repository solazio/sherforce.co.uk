import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Table from "../components/Table";
import FlipText from "../components/FlipText";

export const IndexPageTemplate = ({ title, teams }) => {
  // const fetchData = () => {
  //   const tableData = fetch(
  //     "https://fulltime-league.thefa.com/js/cs1.do?cs=118456231&random=0.1704203609289056",
  //     {
  //       method: "GET",
  //       // mode: "no-cors",
  //       headers: {
  //         "sec-fetch-mode": "no-cors",
  //         "sec-fetch-site": "cross-site",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <section className='section has-image has-text-light is-slanted--left'>
        <div className='container'>
          <h1 className='is-size-1 pt-6'>{title}</h1>
          <FlipText />
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
