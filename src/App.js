import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Subfields from "./components/pages/Subfields";
import Quiz from "./components/pages/Quiz";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/subfields' component={Subfields} />
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;