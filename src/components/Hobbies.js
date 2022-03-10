import React from 'react';
// import CheeseCard from './CheeseCard';

import { getAllHobbies } from '../lib/api';

const HobbiesIndex = () => {
  const [hobbies, setHobbies] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllHobbies();
        setHobbies(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {hobbies ? <p>{hobbies.hobby}</p> : <p>Loading....</p>}
        </div>
      </div>
    </section>
  );
};

export default HobbiesIndex;
