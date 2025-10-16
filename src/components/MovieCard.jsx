import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { id, title, abstract, image } = movie;
    return (
        < div className='col-12 col-md-6 col-lg-4' >
            <div className='card card-movie h-100'>
                <img src={image} className='card-img-top' />
                <div className='card-body'>
                    <h3 className="card-title">{title}</h3>
                    <p>{abstract}</p>

                    <Link to={`/films/${id}`}>View details</Link>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;

