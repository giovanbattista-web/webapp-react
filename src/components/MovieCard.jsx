import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ film }) => {
    const { id, title, director, genre, image } = film;
    return (
        <div className='col-12 col-md-6 col-lg-4 '>
            <div className='card'>
                <div className='card-image'>
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className='card-body'>
                    {title}
                    <Link to={`/films/${id}`}>Leggi tutto</Link>
                </div>
            </div>
        </div>
    )

};

export default MovieCard;