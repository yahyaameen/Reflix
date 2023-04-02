import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';
import { useState } from 'react'
import moviesData from './mock-data/movies.json' 
import NavBar from './components/NavBar';


function App() {
  let [movies, setMovies] = useState(moviesData.movies)

  const updateMovieStatus = (movie) => {
    let newMovies = [...movies]
    const relevantMovie = newMovies.filter(m => m.id === movie.id)[0]
    relevantMovie.isRented = relevantMovie.isRented ? false : true
    setMovies(newMovies);
  }

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/catalog' element={<Catalog movies={movies} updateMovieStatus={updateMovieStatus} />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetail movies={movies} />}></Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
