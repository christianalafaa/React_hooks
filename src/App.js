// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);  

const getMovieRequest = async() => {
  const url = "http://www.omdbapi.com/?s=suit&apikey=d8f52795";

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson);
  setMovies(responseJson.Search);
};
useEffect(() => {
  getMovieRequest ();
}, []);

  return (
    <div className="container-fluid movie-app">
      <div className='row'>
      <MovieList movies = {movies}/>
      </div>
    </div>
  );
}

export default App;
