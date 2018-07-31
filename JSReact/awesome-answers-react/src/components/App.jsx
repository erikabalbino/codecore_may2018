import React from "react";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import CurrentDateTime from "./CurrentDateTime";

import questionIndexData from "../data/question-index";
import questionShowData from "../data/question-show";

const App = props => {
    return (
        <div>
            <CurrentDateTime />
            {/* <QuestionShowPage  question={questionShowData}/> */}
            <QuestionShowPage />

            {/* <QuestionIndexPage questions={questionIndexData} /> */}
            <QuestionIndexPage />
            
        </div>
    )
}

export default App;

