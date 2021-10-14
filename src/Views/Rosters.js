import { useState, useEffect } from 'react';
import PlayerRoster from '../Components/playerRosterTable.js';

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
    <div className="profile__background">
      <div className="profile__container">
        <h1 className="profile__header">Roster</h1>
        <PlayerRoster players={players} />
      </div>
    </div>
  );
};

export default JrDucksPlayers;
