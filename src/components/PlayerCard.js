import React from "react";
import { mean } from "lodash";

const PlayerCard = (props) => {
  const { player } = props;
  const overallAtt = Math.round(mean(Object.values(player.attributes)));
  return (
    <div
      className='card'
      style={{ borderRadius: "0.25rem", overflow: "hidden" }}>
      <div
        className='card-image-container'
        style={{ backgroundImage: `url(${player.image})` }}>
        <div className='info-position'>
          <i className={`p-icon-flag--${player.country}`}></i>
          <div className='is-size-1'>{overallAtt}</div>
          <div className='is-size-5'>{player.position}</div>
        </div>
      </div>
      <div className='card-content pt-2'>
        <p className='title is-4'>{player.name}</p>
        {/* TO DO - add social media link */}
        {/* <p className='subtitle is-6'>@johnsmith</p> */}
        <ul className='divided-list'>
          <li className='divided-list__item'>
            <span className='tag'>Preffered foot</span>
            <span className='tag is-danger is-pulled-right'>{player.foot}</span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Height</span>
            <span className='tag is-danger is-pulled-right'>
              {player.height} cm
            </span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Weight</span>
            <span className='tag is-danger is-pulled-right'>
              {player.weight} kg
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
