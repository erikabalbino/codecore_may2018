import React from "react";

const QuestionIndexPage = props => {
    // When destructuring a property from an object, you
    // can assign a default value if that property is
    // "undefined".

    const { questions = [] } = props;

    return (
        <main>
            <h1>Question Index</h1>
            <ul style={{ padding: 0, listStyle: "none" }}>
                {props.questions.map((question, index) => 
                <li key={question.id}>
                    <a href="#">{question.title}</a> •{" "}
                    <span>{new Date(question.created_at).toLocaleDateString()}</span>
                </li> )}
            </ul>
        </main>
    )
};

export default QuestionIndexPage;