import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { id, title, abstract, image } = movie;
    return (
        < div className='col-4' >
            <div className='card card-movie'>
                <img src={image} className='card-img-top' alt={title} />
                <div className='card-body'>
                    <h3 className="card-title">{title}</h3>
                    <p>{abstract}</p>

                    <Link to={`/films/${id}`}>Leggi tutto</Link>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;

