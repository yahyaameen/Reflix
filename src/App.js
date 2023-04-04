import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';
import { useState } from 'react'
import moviesData from './mock-data/movies.json' 
import NavBar from './components/NavBar';
import moviesConsts from './utils/constants';


function App() {
  let [movies, setMovies] = useState(moviesData.movies)
  let [budget, setBudget] = useState(moviesConsts.BUDGET)

  const updateMovieStatus = (movie) => {
    let newMovies = [...movies]
    const relevantMovie = newMovies.filter(m => m.id === movie.id)[0]
    relevantMovie.isRented = relevantMovie.isRented ? false : true
    setMovies(newMovies);
  }

  const updateBudget = (isRentedMovie) => {
    if (!isRentedMovie) {
        if (budget < moviesConsts.MOVIE_RENT_PRICE) {
            alert("There are insufficient funds")
            return false
        } else {
            setBudget(budget - moviesConsts.MOVIE_RENT_PRICE)
            return true
        }
    } else {
        setBudget(budget + moviesConsts.MOVIE_RENT_PRICE)
        return true
    }
}

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/catalog' element={<Catalog budget={budget} updateBudget={updateBudget} movies={movies} updateMovieStatus={updateMovieStatus} />}></Route>
          <Route path='/movies/:movieId' element={<MovieDetail movies={movies} />}></Route>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
