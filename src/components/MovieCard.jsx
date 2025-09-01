import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <>
            < div className='col-4' >
                <div className='card'>
                    <img src={movie.image} className='img-fluid' alt="" />
                    <div className='card-body'>
                        <h5 className="text-primary">{movie.title}</h5>

                        <Link to={`/films/${movie.id}`}>Leggi tutto</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieCard;

