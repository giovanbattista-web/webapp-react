import React from 'react';

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
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='card'>
                        <div className='card-image'>
                            <img src="https://picsum.photos/400/300" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;