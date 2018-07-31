import React from "react";

const ReviewDetails = props => {
    //  console.log(props);

    const { review = [], onDeleteclick = () =>{} } = props;
    //  console.log(review.id)
    return (
        <div>
            <p>Body: {review.body}</p>
            <p>rating: {review.rating}</p>
            
            <small>By: {review.reviewer.full_name}</small> {" "}
            {/* <small>{review.created_at}</small> */}
            {/* <button onClick={() => console.log(review.id)}>Delete</button> */}
            {/* <button onClick={() => console.log("onDeleteClick", review.id)}>Delete</button> */}
            <button onClick={() => onDeleteclick(review.id)}>Delete</button>
        </div>
    )
};

export default ReviewDetails;

