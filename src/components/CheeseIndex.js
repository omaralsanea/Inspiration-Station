import React from 'react';
import CheeseCard from './CheeseCard';

import { getAllCheeses } from '../lib/api';

const CheeseIndex = () => {
  const [cheeses, setCheeses] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllCheeses();
        setCheeses(data);
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
          {!cheeses ? (
            <p>Loading...</p>
          ) : (
            cheeses.map((cheese) => <CheeseCard key={cheese._id} {...cheese} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default CheeseIndex;
