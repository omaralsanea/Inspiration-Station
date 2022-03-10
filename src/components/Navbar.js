import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/cheeses" className="navbar-item">
              Cheese Index
            </Link>
            <Link to="/register" className="navbar-item">
              Register
            </Link>
            <Link to="/login" className="navbar-item">
              Login
            </Link>
            <Link to="/new-cheese" className="navbar-item">
              New Cheese
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
