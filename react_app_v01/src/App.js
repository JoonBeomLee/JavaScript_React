// module
import React from 'react';
import axios from 'axios';

// my js file
import Movie from './Movie';

// my css file
import './App.css';

const MOVIE_API_URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[],
  };

  async getMovie(){
    const data = await axios.get(MOVIE_API_URL);
    const getMovies = data.data.data.movies
    this.setState({movies:getMovies, isLoading:false})
  };

  componentDidMount(){
    this.getMovie();
  };

  render(){
    const {isLoading, movies} = this.state
    return (
      <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading</span>
            </div>
          ) : (
            <div className="movies">{
              movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
