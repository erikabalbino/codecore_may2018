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

const AnswerDetails = props => {
    return (
        <div>
            <h2>Answers</h2>
            <p>{props.body}</p>
            <strong> By {props.author.full_name}</strong> <br/>
            <small>
                <strong>Created at: </strong>
                {props.created_at.toLocaleString()} 
            </small>
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

            <AnswerDetails
                body="Of all the rooms to burn in your uncle's home .... the kitchen!"
                author={{full_name: "Wlisses Wisozk"}}
                created_at={new Date()}
             />
        </main>
    );
};

// A self-closing component (that is a component with only
// an opening tag) must end with `/>`. (i.e. <QuestionDetails />)

ReactDOM.render(<QuestionShowPage />, document.getElementById('root'));
registerServiceWorker();
