import React from 'react';
import { Link } from 'react-router-dom'; // LINK PER RIMANDARE ALLA HOMEPAGE

const Header = () => {
    return (
        <>
            <nav className='navbar bg-body-secondary'>
                <div className='container'>
                    <Link to="/" className='navbar-brand text-dark'>Movies</Link>
                </div>
            </nav>
        </>
    )
};

export default Header;