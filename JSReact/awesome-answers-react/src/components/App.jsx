import React, { Component } from "react";
// We can rename (or alias) named imports
// by using the `as` keyword as shown below:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import QuestionShowPage from "./QuestionShowPage";
import Session from "../requests/session";
import SignInPage from "./SignInPage";
import User from "../requests/user";
import WelcomePage from "./WelcomePage";

// import questionIndexData from "../data/question-index";
// import questionShowData from "../data/question-show";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            currentUser: undefined
        };
    
        this.getUser = this.getUser.bind(this);
        this.destroySession = this.destroySession.bind(this);
      }

    destroySession() {
        Session.destroy().then(() => {
            this.setState({ currentUser: undefined });
        });
    }
    
    getUser() {
        return User.current().then(data => {
            if (data.id) {
            this.setState({
                currentUser: data
            });
            }
        });
    }

    componentDidMount() {
        this.getUser().then(() => {
          this.setState({ loading: false });
        });
    }

    render () {
        const { loading, currentUser } = this.state;

        if (loading){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        }

        return (
            <Router>
                <div>
                    <NavBar
                        // onSignOut={() => console.log("Sign out clicked!")} 
                        onSignOut={this.destroySession} 
                        currentUser={currentUser} 
                    />
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
    
                        {/* <QuestionIndexPage questions={questionIndexData} /> */}
                        {/* <QuestionIndexPage /> */}
                        <Route path="/questions" exact component={QuestionIndexPage} />
                        
                        <AuthRoute 
                            isAuth={currentUser}
                            path="/questions/new" 
                            exact 
                            // component={QuestionNewPage} 
                            render={props => <QuestionNewPage {...props} />}
                        />
    
                        {/* <QuestionShowPage  question={questionShowData}/> */}
                        {/* <QuestionShowPage /> */}
                        <Route path="/questions/:id" component={QuestionShowPage} />
                        
                        <Route
                            path="/sign_in"
                            render={props => (
                                <SignInPage
                                {...props}
                                // onSignIn={() => console.log("Signed in!")}
                                onSignIn={this.getUser}
                                />
                            )}
                        />
                    {/* 
                        <AuthRoute path="/questions/new" component={QuestionNewPage} />
                    */}

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

