const ReviewCard = ({ review }) => {
    const { name, vote, text } = review;
    return (
        <div className='col-12'>
            <div className='card p-4'>
                <p>{name}</p>
                <p>{vote}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default ReviewCard;
