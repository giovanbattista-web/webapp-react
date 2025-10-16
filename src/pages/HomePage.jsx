import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import GlobalContext from '../context/globalContext';
import { useContext } from 'react';



const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const { isLoading, setIsLoading } = useContext(GlobalContext);

    const fetchMovies = () => {
        setIsLoading(true);

        axios.get('http://localhost:3000/api/films').then((response) => {
            console.log(response.data);
            setMovies(response.data);
            setIsLoading(false);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <>
            <div className='container text-white'>
                <h2 className='pt-5 fs-1'><i>The movie community</i></h2>
                <p className='fs-5 pb-4'>Every movie is a journey into the unknown, with a ticket to emotion</p>
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
