import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PlayerCard from "../components/PlayerCard";

export const PlayersPageTemplate = ({ players }) => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='grid'>
          {players.map((player, i) => (
            <div className='col-4' key={`player${i}`}>
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PlayersPageTemplate.propTypes = {
  players: PropTypes.arrayOf(Object).isRequired,
};

const PlayersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Helmet titleTemplate={"%s | Sher Force FC"}>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
      </Helmet>
      <PlayersPageTemplate players={frontmatter.players} />
    </Layout>
  );
};

PlayersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PlayersPage;

export const aboutPageQuery = graphql`
  query PlayersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        players {
          name
          nickName
          country
          position
          age
          height
          weight
          foot
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          attributes {
            attacking
            defending
            mentaly
            movement
            power
            skill
          }
        }
      }
    }
  }
`;
