import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { id, title, director, genre, abstract, image } = movie;
    return (
        < div className='col-12 col-md-6 col-lg-4' >
            <div className='card'>
                <div className='card-image'>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className='card-body'>
                    <h3 className="text-primary">{title}</h3>
                    <h3>{director}</h3>
                    <h3>{genre}</h3>
                    <h3>{abstract}</h3>
                    <Link to={`/films/${id}`}>Leggi tutto</Link>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;