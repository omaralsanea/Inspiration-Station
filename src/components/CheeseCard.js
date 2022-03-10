import React from 'react';
import { Link } from 'react-router-dom';

const CheeseCard = ({ _id, name, image, origin }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/cheeses/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">{name}</h2>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <h5>{origin}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CheeseCard;
