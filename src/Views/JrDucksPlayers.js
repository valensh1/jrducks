import { useState, useEffect } from 'react';

const JrDucksPlayers = () => {
  const [players, setPlayers] = useState('');

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
    <div>
      <h1>{players.name}</h1>
      <h2>{players.team}</h2>
      <h2>{players.birthDate}</h2>
      <h2>{players.position}</h2>
    </div>
  );
};

export default JrDucksPlayers;
