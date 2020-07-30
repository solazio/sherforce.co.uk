import React from "react";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import PlayerCard from "../../components/PlayerCard";

export const PlayersPageTemplate = () => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='grid'>
          <div className='col-4'>
            <PlayerCard
              name="Gurt Rai"
              country="england"
              image="/img/gurt.jpg"
              overall='34'
            />
          </div>
          <div className='col-4'>
            <PlayerCard
              name="Mohamed Salah"
              country="romania"
              image="/img/mo-salah.jpg"
              overall='91'
            />
          </div>
          <div className='col-4'>
            <PlayerCard
              name="Mohamed Salah"
              country="romania"
              image="/img/mo-salah.jpg"
              overall='91'
            />
          </div>
          <div className='col-4'>
            <PlayerCard
              name="Mohamed Salah"
              country="romania"
              image="/img/mo-salah.jpg"
              overall='91'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add ppropTypes

const PlayersPage = () => {
  return (
    <Layout>
      <PlayersPageTemplate />
    </Layout>
  );
};

// Add ppropTypes
export default PlayersPage;
