import React from 'react';
import { Link } from 'react-router-dom';

const playerRosterTable = props => {
  const { players } = props; // Destructure props
  console.log(players);

  return (
    <table className="table__roster">
      <tr className="table__roster-headings">
        <th className="table__roster-player table-header">Player</th>
        <th className="table__roster-number table-header">#</th>
        <th className="table__roster-position table-header">Pos</th>
        <th className="table__roster-height table-header">Ht</th>
        <th className="table__roster-weight table-header">Wt</th>
        <th className="table__roster-born table-header">Born</th>
        <th className="table__roster-birthplace table-header">Birthplace</th>
        <th className="table__roster-team table-header">Team</th>
        <th className="table__roster-division table-header">Division</th>
        <th className="table__roster-level table-header">Level</th>
        <th className="table__roster-location table-header">Location</th>
      </tr>

      {players?.map(player => {
        return (
          <tr className="table__roster-data--row" key={player._id}>
            <div className="table__roster-data--name">
              <Link to={`${player._id}`} className="table__roster-data--link">
                <img src={player?.img} alt="" />
                <td>{`${player?.firstName} ${player?.lastName}`}</td>
              </Link>
            </div>

            <td>{player?.number}</td>
            <td>{player?.position}</td>
            <td>
              {player?.height
                ? `${Number((player.height / 12).toFixed(0))}' ${
                    player.height % 12
                  }"`
                : ''}
            </td>
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
    </table>
  );
};

export default playerRosterTable;
