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
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                        <div className='card-body'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;