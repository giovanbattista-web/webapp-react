import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('http://localhost:3000/api/films').then((resp) => {
            setMovies(resp.data);
        })
            .catch((err) => {
                console.log(err)
            });
    };

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <>
            <div className='container'>
                <h1 className='text-primary'>Movies</h1>
                <h2><i>The movie community</i></h2>
                <div className='row gy-4'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default HomePage;
