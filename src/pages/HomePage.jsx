import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('http://localhost:3000/films/').then((resp) => {
            console.log(resp.data);
            setMovies(resp.data);
        })
            .catch((err) => {
                console.log(error)
            })
    };

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1 className='text-primary'>Movies</h1>
            <h2><i>The movie community</i></h2>
            <div className='row mt4- gy-4'>
                {movies.map((movie) => (
                    <MovieCard film={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
};

export default HomePage;
