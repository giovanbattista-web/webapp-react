const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card p-4">
                        <div className="row d-flex justify-content-start">
                            <div className="col-auto">
                                <p>Author: {review.name}</p>
                                <p>Vote: {review.vote} </p>
                                <p>Review: {review.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ReviewCard;
