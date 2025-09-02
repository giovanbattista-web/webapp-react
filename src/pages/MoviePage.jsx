import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import ReviewsForm from '../components/ReviewsForm';
import GlobalContext from '../context/globalContext';
import { useContext } from 'react';
import Loader from '../components/Loader';



const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({});
    const [reviews, setReviews] = useState([]);
    const { isLoading, setIsLoading } = useContext(GlobalContext);

    const fetchFilm = () => {
        setIsLoading(true);
        axios.get(`http://localhost:3000/api/films/${id}`).then((response) => {
            setMovie(response.data);
            setReviews(response.data.reviews);
            setIsLoading(false);
        })
            .catch((err) => {
                console.log(err);
            })
    };

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-12'>
                        <h2>Movie details</h2>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <img src={movie.image} className='img-fluid' alt={movie.title} />
                    </div>
                    <div className='col-12 col-md-6 col-lg-8'>
                        <h3 className='mb-3'>Title : {movie.title}</h3>
                        <p>Director : {movie.director}</p>
                        <p>Genre : {movie.genre}</p>
                        <p>Release Year : {movie.release_year}</p>
                        <p>Abstract : {movie.abstract}</p>
                        <p>Total reviews : {reviews.length}</p>
                    </div>
                </div>
                <div className='row'>
                    {reviews.map(review => (
                        <ReviewCard review={review} key={review.id} />
                    ))}
                </div>
            </div>
            <ReviewsForm movie_id={movie.id} reloadReviews={fetchFilm} />
        </>
    )
};

export default MoviePage;
