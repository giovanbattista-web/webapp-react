import { Link } from 'react-router-dom';

const MovieCard = ({ film }) => {
    const { id, title, director, genre, abstract, image } = film;
    return (
        <div className='row'>
            < div className='col-12 col-md-6 col-lg-4' >
                <div className='card'>
                    <div className='card-image'>
                        <img src={image} className='img-fluid' alt="" />
                    </div>
                    <div className='card-body'>
                        <h5 className="text-primary">{title}</h5>
                        <p>{director}</p>
                        <p>{genre}</p>
                        <p>{abstract}</p>
                        <Link to={`/films/${id}`}>Leggi tutto</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;

