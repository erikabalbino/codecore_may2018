import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// A function that returns a React Element (the value returned
// by a call from React.createElement(...)) is a React Component.

const QuestionDetails = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <p>By {props.author.full_name}</p>
            <p>
                <small>
                    <strong>View Count: </strong>
                    {props.view_count}
                </small>{" • "} 
                <small>
                    <strong>Created at: </strong>
                    {props.created_at.toLocaleString()} 
                </small>{" • "} 
                <small>
                    <strong>Updated at: </strong>
                    {props.updated_at.toLocaleString()} 
                </small>{" • "} 
            </p>
        </div>
    );
};

const AnswerDetails = () => {
    return (
        <div>
            <h1>Answers</h1>
            <p>Of all the rooms to burn in your uncle's home .... the kitchen!</p>
            <strong> By Wlisses Wisozk</strong> <br/>
            <strong> Createt at: </strong> About 1 month ago
        </div>
    );
};

const QuestionShowPage = () => {
    return (
        <main>
            <QuestionDetails 
                title="What is your favourite colour?"
                body="Rd, green, blue, ...."
                author={{full_name: "Bridge Troll"}}
                view_count={22}
                created_at={new Date()}
                updated_at={new Date()}
            />
            <AnswerDetails />
        </main>
    );
};

// A self-closing component (that is a component with only
// an opening tag) must end with `/>`. (i.e. <QuestionDetails />)

ReactDOM.render(<QuestionShowPage />, document.getElementById('root'));
registerServiceWorker();
