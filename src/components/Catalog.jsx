import React from 'react';
import { useState } from 'react'
import Movie from './Movie';
import "./catalog.css"

const Catalog = ({movies,updateMovieStatus}) => {
    let [searchMovie, setSearchMovie] = useState("")
    let [budget, setBudget] = useState(10.00)
    const updateText = (event) =>{
        setSearchMovie(event.target.value)
    }

    const updateBudget = (isRentedMovie) => {
        if (!isRentedMovie) {
            if (budget < 3) {
                alert("There are insufficient funds")
                return false
            } else{
                setBudget(budget - 3)
                return true
            } 
        }
        else{
            setBudget(budget + 3)
            return true
        }
        
      }

    const matchedMovies = searchMovie ? movies.filter(m => m.title.toLowerCase().includes(searchMovie.toLowerCase())): movies
    return (
        <div>
            <input type="text" placeholder='Search' value={searchMovie} onChange={updateText} />
            <span>Budget: ${budget.toFixed(2)}</span>
            <div>
                {
                    matchedMovies.filter(m => m.isRented).length ? "Rented:" : ""
                }
            </div>
            <div className='movies-container'>
                { matchedMovies.filter(m => m.isRented).map(m => {
                    return  <Movie  key={m.id}  movie={m} updateMovieStatus={updateMovieStatus} updateBudget={updateBudget} />
                    }) 
                }
            </div>
            <div>Catalog:</div>
            <div className='movies-container'>
                { matchedMovies.map(m => {
                    return  <Movie  key={m.id}  movie={m} updateMovieStatus={updateMovieStatus} updateBudget={updateBudget} />
                    }) 
                }
            </div>
        </div>
    )   
}

export default Catalog