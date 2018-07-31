import React from "react";
import Field from "./Field";

// <AnswerDetails
//  onDeleteClick={() => console.log("Deleting")}
//  {...answer}
// />
const AnswerDetails = props => {
    const { onDeleteClick = () => {} } = props;

    return (
        <div>
        <p>{props.body}</p>
        <p>By {props.author.first_name}</p>
        <p>

        {/* <button onClick={() => console.log(props.id)}>Delete</button>{" • "} */}
        <button onClick={() => onDeleteClick(props.id)}>Delete</button>{" • "}

        <Field
            name="Created At"
            value={new Date(props.created_at).toLocaleString()}
            />      </p>
        </div>
    );
};

export default AnswerDetails;