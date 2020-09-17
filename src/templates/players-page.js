import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PlayerCard from "../components/PlayerCard";
import { useLocation } from "@reach/router";

export const PlayersPageTemplate = ({
  allPlayers,
  managerName,
  captainName,
}) => {
  const [players, setPlayers] = useState(allPlayers);
  const hash = useLocation().hash;

  let goalkeepers = [],
    defenders = [],
    midfielders = [],
    forwards = [];

  const defenderPositions = ["CB", "LB", "RB"];
  const midfielderPositions = ["LM", "CM", "CDM", "CAM", "RM"];
  const forwardPositions = ["ST", "RW", "LW"];

  allPlayers.forEach((player) => {
    if (defenderPositions.indexOf(player.position) > -1) {
      defenders.push(player);
    } else if (midfielderPositions.indexOf(player.position) > -1) {
      midfielders.push(player);
    } else if (forwardPositions.indexOf(player.position) > -1) {
      forwards.push(player);
    } else if ("GK".indexOf(player.position) > -1) {
      goalkeepers.push(player);
    }
  });

  useEffect(() => {
    if (hash) {
      if (hash === "#forwards") {
        setPlayers(forwards);
      } else if (hash === "#midfielders") {
        setPlayers(midfielders);
      } else if (hash === "#defenders") {
        setPlayers(defenders);
      } else if (hash === "#goalkeepers") {
        setPlayers(goalkeepers);
      } else if (hash === "#all") {
        setPlayers(allPlayers);
      }
    }
  }, [hash]);

  return (
    <div className='section'>
      <div className='container'>
        <div className='tabs'>
          <ul>
            <li className={!hash || hash === "#all" ? "is-active" : ""}>
              <Link to='#all'>
                All
              </Link>
            </li>
            <li className={hash && hash === "#forwards" ? "is-active" : ""}>
              <Link to='#forwards'>
                Forwards
              </Link>
            </li>
            <li className={hash && hash === "#midfielders" ? "is-active" : ""}>
              <Link to='#midfielders'>
                Midfielders
              </Link>
            </li>
            <li className={hash && hash === "#defenders" ? "is-active" : ""}>
              <Link to='#defenders'>
                Defenders
              </Link>
            </li>
            <li className={hash && hash === "#goalkeepers" ? "is-active" : ""}>
              <Link to='#goalkeepers'>
                Goalkeepers
              </Link>
            </li>
          </ul>
        </div>
        <div className='grid'>
          {players.map((player, i) => (
            <div className='col-4' key={`player${i}`}>
              <PlayerCard
                player={player}
                manager={player.name === managerName}
                captain={player.name === captainName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PlayersPageTemplate.propTypes = {
  allPlayers: PropTypes.arrayOf(Object).isRequired,
};

const PlayersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Helmet titleTemplate={"%s | Sher Force FC"}>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
      </Helmet>
      <PlayersPageTemplate
        allPlayers={frontmatter.players}
        managerName={frontmatter.managerName}
        captainName={frontmatter.captainName}
        hash={globalHistory.location.hash}
      />
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
        managerName
        captainName
        players {
          name
          nickName
          country
          position
          birthDate
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
