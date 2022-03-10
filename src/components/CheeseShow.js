import React from 'react';
import { useParams } from 'react-router-dom';

import { getSingleCheese } from '../lib/api';

const CheeseShow = () => {
  const { cheeseId } = useParams();
  const [cheese, setCheese] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleCheese(cheeseId);
        setCheese(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [cheeseId]);

  return (
    <section className="section">
      <div className="container">
        {!cheese ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered">{cheese.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cheese.image} alt={cheese.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    🍽
                  </span>
                  Tasting Notes
                </h4>
                <hr />
                <p>{cheese.origin}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                    👋
                  </span>
                  Added By:
                </h4>
                <hr />
                <p>{cheese.user.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheeseShow;
