import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar is-success">
        <div className="hero-body">
          <div className="container">
            <p className="title has-text-centered">
              Welcome to the beginning of the rest of your life...
              <br />
              <br />
              <span>🧠 </span>Get Inspired!
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <span>
              <Link to="/quotes">Quotes</Link>
            </span>
            <span>
              <Link to="/hobbies">Hobbies</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
