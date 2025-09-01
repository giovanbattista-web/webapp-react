import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';

const MoviePage = () => {
    const { id } = useParams()
    const [film, setFilm] = useState([]);

    const fetchFilm = () => {
        axios.get(`http://localhost:3000/films/${id}`).then((resp) => {
            console.log(resp.data);
            setFilm(resp.data);
        })
            .catch((err) => {
                console.log(error)
            })
    };

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            <div className='row'>
                {film === null ? (
                    <p>Caricamento dati</p>
                ) : (
                    <>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <img src={film.image} className='img-fluid' alt="" />
                        </div>
                        <div className='col-12 col-md-6 col-lg-8'>
                            <h1>{film.title}</h1>
                            <h3>{film.director}</h3>
                            <h3>{film.genre}</h3>
                            <h3>{film.abstract}</h3>
                        </div>
                        <div className='row gy-4'>
                            <div className='col-12'>
                                <h1>Titolo</h1>
                                <p>Altre informazioni</p>
                                <div className='d-flex justify-content-between'>
                                    <h3>Community Reviews</h3>
                                </div>
                            </div>
                            {film.reviews.map((review) => {
                                return (
                                    <ReviewCard key={`review-${review.id}`} review={review} />
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </>
    )
};

export default MoviePage;
