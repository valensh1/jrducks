import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerProfile = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/players/${id}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>This is the player profile page</h1>
    </div>
  );
};

export default PlayerProfile;
