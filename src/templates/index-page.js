import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Table from "../components/Table";
import FlipText from "../components/FlipText";

export const IndexPageTemplate = () => {
  const fetchData = () => {
    const tableData = fetch(
      "https://fulltime-league.thefa.com/js/cs1.do?cs=118456231&random=0.1704203609289056",
      {
        method: "GET",
        // mode: "no-cors",
        headers: {
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "cross-site",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section
        className='section has-image has-text-light is-slanted--left'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(94, 94, 94, 0.5) 0%, rgba(94, 94, 94, 0.5) 100%), url('/img/liverpool.png",
        }}>
        <div className='container'>
          <h1 className='is-size-1 pt-6'>Sher Force Football Club</h1>
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
          <Table />
          <button onClick={fetchData}>Click</button>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
