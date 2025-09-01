import React from 'react';
import { Link } from 'react-router-dom'; // LINK PER RIMANDARE ALLA HOMEPAGE

const Header = () => {
    return (
        <>
            <nav className='navbar bg-body-secondary'>
                <div className='container'>
                    <Link className='navbar-brand' to="/">Movies</Link>
                </div>
            </nav>
        </>
    )
};

export default Header;