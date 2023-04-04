import React from 'react';
import Movie from './Movie';


const Movies = ({matchedMovies,updateMovieStatus,updateBudget}) => {
    return(
        <div className='movies-container'>
                { matchedMovies.map(m => 
                      <Movie  key={m.id}  movie={m} updateMovieStatus={updateMovieStatus} updateBudget={updateBudget} />
                    ) 
                }
        </div>
    )
}

export default Movies