import React from 'react';
import { useState } from 'react'
import Movies from './Movies';
import "./catalog.css"


const Catalog = ({ movies, updateMovieStatus, budget, updateBudget }) => {
    let [searchMovie, setSearchMovie] = useState("")
    const updateText = (event) => {
        setSearchMovie(event.target.value)
    }

    const matchedMovies = searchMovie ? movies.filter(m => m.title.toLowerCase().includes(searchMovie.toLowerCase())) : movies
    return ( 
        <div>
        <input type = "text"placeholder = 'Search'value = { searchMovie }onChange = { updateText }/>
         <span > Budget: $ { budget.toFixed(2) } </span> 
         <div > {
            matchedMovies.filter(m => m.isRented).length ? "Rented:" : ""
        } 
        </div>

        <Movies updateBudget = { updateBudget } updateMovieStatus = { updateMovieStatus } matchedMovies = { matchedMovies.filter(m => m.isRented) }/> 
        <div > Catalog: </div> 
        <Movies updateBudget = { updateBudget } updateMovieStatus = { updateMovieStatus } matchedMovies = { matchedMovies }/> 
        </div>
    )
}

export default Catalog