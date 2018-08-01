import React from "react";
// We can rename (or alias) named imports
// by using the `as` keyword as shown below:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import QuestionNewPage from "./QuestionNewPage";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";

// import questionIndexData from "../data/question-index";
// import questionShowData from "../data/question-show";

const App = props => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={WelcomePage} />

                    {/* <QuestionIndexPage questions={questionIndexData} /> */}
                    {/* <QuestionIndexPage /> */}
                    <Route path="/questions" exact component={QuestionIndexPage} />
                    
                    <Route path="/questions/new" exact component={QuestionNewPage} />

                    {/* <QuestionShowPage  question={questionShowData}/> */}
                    {/* <QuestionShowPage /> */}
                    <Route path="/questions/:id" component={QuestionShowPage} />
                    <Route path="/sign_in" component={SignInPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;

