import React from "react";
const ReviewCard = ({ review }) => {
    return (
        <>
            <div className='col-12 card p-3'>
                <p>Author : {review.name}</p>
                <p>Vote : {review.vote}</p>
                <p>Review : {review.text} </p>
            </div>
        </>
    )
};

export default ReviewCard;
