import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className='navbar bg-body-secondary'>
                <div className='container'>
                    <Link to="/" className='navbar-brand text-dark btn-primary fw-bold fs-3 ps-2'>Movies</Link>
                </div>
            </nav>
        </>
    )
};

export default Header;