import React from "react";

const PlayerCard = (props) => {
  return (
    <div className='card'>
      <div
        className='card-image-container'
        style={{ backgroundImage: `url(${props.image})` }}>
        <div className='info-position'>
          <i className={`p-icon-flag--${props.country}`}></i>
          <div className='is-size-1'>{props.overall}</div>
          <div className='is-size-5'>RW</div>
        </div>
      </div>
      <div className='card-content pt-2'>
        <p className='title is-4'>{props.name}</p>
        <p className='subtitle is-6'>@johnsmith</p>
        <ul className='divided-list'>
          <li className='divided-list__item'>
            <span className='tag'>Preffered foot</span>
            <span className='tag is-danger is-pulled-right'>Left</span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Height</span>
            <span className='tag is-danger is-pulled-right'>170 cm</span>
          </li>
          <li className='divided-list__item'>
            <span className='tag'>Weight</span>
            <span className='tag is-danger is-pulled-right'>67 kg</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
