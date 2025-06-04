import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (movie) => {
    const { id, title, director, genre, image } = movie;
    return (
        <div className='col-12 col-md-6 col-lg-4 '>
            <div className='card'>
                <div className='card-image'>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className='card-body'>
                    {title}
                    <Link className='btn btn-primary' to={`/films/${movies.id}`}>Leggi tutto</Link>
                </div>
            </div>
        </div>
    )

};

export default MovieCard;