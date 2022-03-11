import React from 'react';

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

  function refreshPage() {
    window.location.reload();
  }

  return (
    <section className="hobbiesSection">
      <div className="hobbiesContainer is-half">
        <div className="columns is-multiline">
          {hobbies ? (
            <p>
              Hobby: {hobbies.hobby} <br />{' '}
              <a href={hobbies.link} target="_blank" rel="noreferrer">
                Click HERE to find out more!
              </a>{' '}
              <br />
              Category: {hobbies.category}
            </p>
          ) : (
            <p>Loading....</p>
          )}
        </div>
        <div className="buttons">
          <button
            class="button is-info is-medium is-size-6"
            onClick={refreshPage}
          >
            Didn't like that idea? <br />
            Click here for a new one! 😆
          </button>
        </div>
      </div>
    </section>
  );
};

export default HobbiesIndex;

//  <Link
//    to={{
//      pathname: `/${hobbies.link}`
//    }}
//  />;
