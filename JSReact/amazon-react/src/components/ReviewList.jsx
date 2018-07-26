import React from "react";
import ReviewDetails from "./ReviewDetails";


const ReviewList = props => {
    
    const { reviews = [] } = props;
    
    console.log(reviews);

    return (
      <ul style={{ padding: 0}}>
        {reviews.map(review => (
          <li key={review.id} style={{ padding: 0, listStyle: "none"}}>

            <ReviewDetails review={review} />

            <hr/>
            <hr/>

          </li>
        ))}

      </ul>
    );

};

export default ReviewList;