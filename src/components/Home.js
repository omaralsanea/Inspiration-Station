import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="inspirationContainer">
            <p className="title has-text-centered">
              <h1>InspirationStation</h1>
              <br />
              Welcome to the beginning of the rest of your life...
              <br />
              <br />
              <span>🧠 </span>Get Inspired!
            </p>
          </div>
        </div>

        <div className="buttonsContainer is-align-content-center">
          <Link to="/quotes" className="button is-dark is-large">
            Quotes
          </Link>
          <Link to="/hobbies" className="button is-dark is-large">
            Hobbies
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
/* <div className="parentContainer">
          <div className="quoteButtonContainer">
            <Link to="/quotes" className="button is-dark is-large ">
              Quotes
            </Link>
          </div>
          <div className="hobbyButtonContainer">
            <Link to="/hobbies" className="button is-dark is-large">
              Hobbies
            </Link>
          </div>
        </div>
      </section> */

// export default Home;
