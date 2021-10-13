import { useState, useEffect } from 'react';
import RosterHeadings from '../Components/RosterHeadings';

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
    <div className='profile__background'>
      <div className='profile__container'>
        <h1 className='profile__header'>Roster</h1>
        <RosterHeadings />
        <div className='profile'>
          <img
            src={players?.[1]?.img}
            alt='profile pic'
            className='profile__pic'
          />
          <div className='profile__player-data'>
            <h2 className='profile__name'>{players?.[1]?.name}</h2>
            <h3 className='profile__team'>{players?.[1]?.team}</h3>
            <p className='profile__birthdate'>{players?.[1]?.birthDate}</p>
            <p className='profile__position'>{players?.[1]?.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JrDucksPlayers;
