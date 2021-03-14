import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Instructions from './components/instructions.js';
import NavBar from './components/navBar.js';
import MovieList from './components/movieList';

ReactDOM.render(
  <div>
    <NavBar />
    <MovieList />
    <Instructions />
  </div>,
  document.getElementById('root')
);
