import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import ReviewsForm from '../components/ReviewsForm';
import GlobalContext from '../context/globalContext';
import { useContext } from 'react';

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
            <div className='container text-white'>
                <div className='form-group'>
                    <div className='row my-3'>
                        <div className='col-12'>
                            <h2 className='pt-5 fs-1'>Movie details</h2>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <img src={movie.image} className='img-fluid' alt={movie.title} />
                        </div>
                        <div className='col-12 col-md-6 col-lg-8'>
                            <h3 className='mb-3 fs-3'>Title: {movie.title}</h3>
                            <p className='fs-4'>Director: {movie.director}</p>
                            <p className='fs-4'>Genre: {movie.genre}</p>
                            <p className='fs-4'>Release Year: {movie.release_year}</p>
                            <p className='fs-4'>Abstract: {movie.abstract}</p>
                            <p className='fs-4'>Total reviews: {reviews.length}</p>
                        </div>
                    </div>
                    <div className='row'>
                        {reviews.map(review => (
                            <ReviewCard review={review} key={review.id} />
                        ))}
                    </div>
                </div>
            </div>
            <ReviewsForm movie_id={movie.id} reloadReviews={fetchFilm} />
        </>
    )
};

export default MoviePage;
