// module
import React from 'react';
import PropTypes from 'prop-types';

// my css file
import './Movie.css';


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

function Movie(prop) {
    return (
      <div className="movie">
        <img src={prop.poster} alt={prop.title} title={prop.title} />
        <div className="movie__data">
          <h3 className="movie__title">{prop.title}</h3>
          <h5 className="movie__year">{prop.year}</h5>
          <ul className="movie__genres">
              {prop.genres.map( (genre, index) => (
                <li key={index} className="genres__genre">
                    {genre}
                </li>
              ))}
          </ul>
          <p className="movie__summary">{prop.summary.slice(0, 180)}...</p>
        </div>
      </div>
    );
}

export default Movie;