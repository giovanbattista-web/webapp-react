import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({});

    const fetchFilm = () => {
        axios.get(`http://localhost:3000/api/films/${id}`).then((resp) => {
            setMovie(resp.data);
        })
            .catch((err) => {
                console.log(err)
            })
    };

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            <div className='col-12 col-md-6 col-lg-4'>
                <img src={movie.image} className='img-fluid' alt="" />
            </div>
            <div className='col-12 col-md-6 col-lg-8'>
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.abstract}</p>
            </div>
            <div className='row gy-4'>
                <div className='col-12'>
                    <h1>Titolo</h1>
                    <p>Altre informazioni</p>
                    <div className='d-flex justify-content-between'>
                        <h3>Community Reviews</h3>
                    </div>
                </div>
                {movie.map((film) => {
                    return (
                        <ReviewCard key={`review-${review.id}`} review={review} />
                    )
                })}
            </div>
        </>
    )
};

export default MoviePage;
