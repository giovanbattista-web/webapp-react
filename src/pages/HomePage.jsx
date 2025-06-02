import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
                        <div className='body'>
                            <Link className='btn btn-primary' to="./movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                        <div className='body'>
                            <Link className='btn btn-primary' to="./movies/2">Leggi tutto</Link>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                        <div className='body'>
                            <Link className='btn btn-primary' to="./movies/3">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                        <div className='body'>
                            <Link className='btn btn-primary' to="./movies/4">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                        <div className='body'>
                            <Link className='btn btn-primary' to="./movies/5">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;