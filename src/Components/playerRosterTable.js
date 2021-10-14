import React from 'react';

const playerRosterTable = props => {
  const { players } = props; // Destructure props
  console.log(players);

  return (
    <table className="table__headings">
      <thead>
        <tr>
          <th className="table__headings-player">Player</th>
          <th className="table__headings-number">#</th>
          <th className="table__headings-position">Pos</th>
          <th className="table__headings-height">Ht</th>
          <th className="table__headings-weight">Wt</th>
          <th className="table__headings-born">Born</th>
          <th className="table__headings-birthplace">Birthplace</th>
          <th className="table__headings-birthplace">Team</th>
          <th className="table__headings-birthplace">Division</th>
          <th className="table__headings-birthplace">Level</th>
          <th className="table__headings-birthplace">Location</th>
        </tr>
      </thead>
      <tbody>
        {players?.map(player => {
          return (
            <tr key={player._id}>
              <td>{player?.name}</td>
              <td>{player?.number}</td>
              <td>{player?.position}</td>
              <td>{player?.height}</td>
              <td>{player?.weight}</td>
              <td>{player?.born}</td>
              <td>{player?.birthplace}</td>
              <td>{player?.team}</td>
              <td>{player?.division}</td>
              <td>{player?.level}</td>
              <td>{player?.location}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default playerRosterTable;
