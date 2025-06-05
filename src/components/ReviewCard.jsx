import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, vote, text } = review;
    return (
        <div className='col-12'>
            <div className='card p-3'>
                <h3>{name}</h3>
                <h3>{vote}</h3>
                <h3>{text}</h3>
            </div>
        </div>
    )
};

export default ReviewCard;