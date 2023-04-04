import React from 'react';
import { useParams } from 'react-router-dom';
import "./movieDetail.css"

const MovieDetail = ({movies}) => {
    let {movieId} = useParams()
    let movieIdNumber = parseInt(movieId)
    return (
        <div>
            { movies.filter(m => m.id === movieIdNumber).map(m =>  
                        <div>
                            <span>{m.title}</span>
                            <span className='movie-year'>({m.year})</span><br />
                            <img className='movie-img' src={m.img} alt="" /><br />
                            <p>{m.descrShort}</p>
                        </div>
                    ) 
            }
        </div>
    )
}

export default MovieDetail
