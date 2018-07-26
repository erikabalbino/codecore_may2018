import React, { Component } from "react";

class QuestionIndexPage extends Component {
    render () {
        // When destructuring a property from an object, you
        // can assign a default value if that property is
        // "undefined".
        const { questions = [] } = this.props;
    
        return (
            <main>
                <h1>Question Index</h1>
                <ul style={{ padding: 0, listStyle: "none" }}>
                    {this.props.questions.map((question, index) => 
                    <li key={question.id}>
                        <span>{new Date(question.created_at).toLocaleDateString()}</span> •{" "}
                        <a href="#">{question.title}</a>
                    </li> )}
                </ul>
            </main>
        )
    }
};

export default QuestionIndexPage;