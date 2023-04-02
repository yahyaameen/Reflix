import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as PlusIcon} from '../utils/add.svg';
import {ReactComponent as MinusIcon} from '../utils/remove.svg';
import "./movie.css"

const Movie = ({movie,updateMovieStatus,updateBudget}) => {
    const changeMovieStatus = () =>{
        if(updateBudget(movie.isRented)){
            updateMovieStatus(movie)
        } 
    }
    return (
       <div className='movie'>
           <Link to={`/movies/${movie.id}`}> <img className='movie-img' src={movie.img} alt="" /><br /></Link>
        {movie.isRented ? <MinusIcon onClick={changeMovieStatus} className="icon" fill="white"/> : <PlusIcon onClick={changeMovieStatus} className="icon" fill="white"/>}
       </div>
    )   
}

export default Movie