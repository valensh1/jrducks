import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayerRoster from '../Components/playerRosterTable.js'; // This is the table component which includes player profile information

const JrDucksPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/players');
        const data = await response.json();
        console.log(data);
        await setPlayers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="roster">
      <div className="roster__card">
        <h1 className="roster__header">Roster</h1>
        <PlayerRoster players={players} />
      </div>
      <button type="button" className="btn profile__button-new">
        <Link to="/players/new">New Player</Link>
      </button>
    </div>
  );
};

export default JrDucksPlayers;
