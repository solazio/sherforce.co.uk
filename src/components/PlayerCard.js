import React from "react";
import { mean } from "lodash";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const PlayerCard = (props) => {
  const { player, manager, captain } = props;
  const overallAtt = Math.round(mean(Object.values(player.attributes)));
  const getAge = (dob) => {
    const birthDate = new Date(dob)
    const diff_ms = Date.now() - birthDate.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  return (
    <div className='card player-bio'>
      <div className='card-image-container'>
        <PreviewCompatibleImage
          imageInfo={player.image}
          alt=''
          immageClass='card-image'
        />
        {manager && (
          <i
            className='extra-info-chip p-icon--manager'
            title='Manager'
            style={{
              marginBlockStart: "0.25rem",
              marginInlineStart: "0.25rem",
            }}></i>
        )}
        {captain && (
          <i
            className='extra-info-chip p-icon--captain'
            title='Captain'
            style={{
              marginBlockStart: "0.25rem",
              marginInlineStart: "0.25rem",
            }}></i>
        )}
        <div className='info-position'>
          <i className={`p-icon-flag--${player.country.toLowerCase()}`}></i>
          {/* <div className='is-size-1'>{overallAtt}</div> */}
          <div className='is-size-4'>{player.position}</div>
        </div>
      </div>
      <div className='card-content pt-5'>
        <div className='title'>
          <p className='is-size-4'>{player.nickName}</p>
          <p className='is-size-7 pt-3 has-text-grey'>{player.name}</p>
        </div>
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
          <li className='divided-list__item'>
            <span className='tag'>Age</span>
            <span className='tag is-danger is-pulled-right'>
              {getAge(player.birthDate)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
