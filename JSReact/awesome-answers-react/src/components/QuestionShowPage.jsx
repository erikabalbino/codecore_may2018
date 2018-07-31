
// `Component` is a named export. Unlike `React` which is a default
// export, a named export must written with exact names.

// The two exports below are named exports where the name of the
// variable or class is significant.
// export const Component = { ... }
// export class Component { ... }

import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
// import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";

class QuestionShowPage extends Component {

    constructor(props) {
        // When writing your own `constructor` you must
        // take in `props` as an argument and you must
        // call the constructor of the `Component` class with
        // `super(props)` passing it the `props`.
        super(props);

        this.state = {
            question: props.question
        }
        
        this.deleteQuestion = this.deleteQuestion.bind(this)
        this.deleteAnswer = this.deleteAnswer.bind(this)

    }

    deleteQuestion(event){

        // const { question } = this.state;
        // console.log(question);

        this.setState(
            { question: undefined }
        );

        
    }

    deleteAnswer(id){
        const { question } = this.state;
        const { answers = [] } = question;

        this.setState({
            question: {
                ...question,
                answers: answers.filter(answer => answer.id !== id)
            }
        })
    }

    render () {
        const { question } = this.state;

        if (!question){
            return (
                <main>
                    <h2>Question doesn't exit</h2>
                </main>
            );
        }
      
        return (
          <main>
            <hr/>
            <QuestionDetails {...question}

            //   title="What is your favourite colour?"
            //   body="Red, green, blue, light golden rod, lime, magenta, etc."
            //   author={{ full_name: "Bridge Troll" }}
            //   view_count={22}
            //   created_at={new Date()}
            //   updated_at={new Date()}
            />

            <button onClick={this.deleteQuestion}>Delete</button>

            <hr/>
            <h2>Answers</h2>
            {/* <AnswerList  onAnswerDeleteClick={answerId => console.log("From ShowPage", answerId)} answers={question.answers} /> */}
            <AnswerList  onAnswerDeleteClick={this.deleteAnswer} answers={question.answers} />
      
          </main>
        );
    }
};

export default QuestionShowPage;