import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {
        axios.get('http://127.0.0.1:3000/films').then((resp) => {
            console.log(resp.data);
        }).catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        fetchMovies();
    }, []);
    const { id, title, director, genre, image } = movies;
    return (
        <>
            <h1 className='text-primary'>Movies</h1>
            <h2><i>The movie community</i></h2>
            <div className='row gy-4'>
                {movies.map((movie) => (
                    <MovieCard film={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
};

export default HomePage;