import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import ForgotPassword from "./components/forgot-password.component";
import Introduction from "./components/introduction.component";
import Subfields from "./components/subfields.component";

function App() {
    return (<Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/log-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Introduction} />
                            <Route path="/home" component={Home} />
                            <Route path="/subfields" component={Subfields} />
                            <Route path="/log-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Switch>
                    </div>
                </div>
            </div></Router>
    );
}

export default App;