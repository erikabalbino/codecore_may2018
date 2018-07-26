import React from "react";

const ReviewDetails = props => {
    // console.log(props);

    const { review = [] } = props;
    console.log(review)
    return (
        <div>
            <p>Body: {review.body}</p>
            <p>rating: {review.rating}</p>
            
            <small>By: {review.reviewer.full_name}</small> • <small>{review.created_at}</small>
        </div>
    )
};

export default ReviewDetails;

