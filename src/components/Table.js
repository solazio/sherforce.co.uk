import React from "react";

const Table = ({ teams }) => {
  return (
    <div className='table-container'>
      <div className='table__title'>
        <a href='http://www.thefa.com/' className='table__title--image'>
          <img
            src='//cdn.thefa.com/thefawebsite/assets/images/the-fa-logo.svg'
            title='TheFA.com'
            alt='TheFA.com logo'
            width='82'
            height='20'
          />
        </a>
        <a
          href='https://fulltime-league.thefa.com/ProcessPublicSelect.do?psSelectedSeason=997972047&psSelectedDivision=193785606&psSelectedCompetition=0&psSelectedLeague=2113065'
          className='table__title--text'>
          Division Two
        </a>
      </div>
      <summary className='is-hidden'>
        This table charts the Essex Sunday Football Combination - Division 2
        teams
      </summary>
      <table className='table'>
        <thead>
          <tr>
            <th title='Position'>
              <span className='large-screen'>Position</span>
              <span className='small-screen'>Pos</span>
            </th>
            <th className='table__club'>Club</th>
            <th>
              <span className='large-screen'>Played</span>
              <span className='small-screen'>Pl</span>
            </th>
            <th>
              <span className='large-screen'>Won</span>
              <span className='small-screen'>W</span>
            </th>
            <th>
              <span className='large-screen'>Drawn</span>
              <span className='small-screen'>D</span>
            </th>
            <th>
              <span className='large-screen'>Lost</span>
              <span className='small-screen'>L</span>
            </th>
            <th>GD</th>
            <th>
              <span className='large-screen'>Points</span>
              <span className='small-screen'>Pts</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => (
            <tr
              key={team.name}
              className={
                team.name === "Sher Force (S) First"
                  ? "p-table__highlighted"
                  : ""
              }>
              <td>{i + 1}</td>
              <td className='table__club'>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.gd}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
