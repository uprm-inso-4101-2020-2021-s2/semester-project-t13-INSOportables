import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Subfields from "./pages/Subfields";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import StudentSurvey from "./pages/StudentSurvey";
import ScrollToTop from "./components/ScrollToTop";
import PieChart from "./pages/PieChart";


function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar/>
                <Switch>
                    <Route path='/get-started' component={GetStarted}/>
                    <Route path='/forgot-password' component={ForgotPassword}/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/subfields' component={Subfields}/>
                    <Route path='/quiz' component={Quiz}/>
                    <Route path='/sign-up' component={SignUp}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/student-survey' component={StudentSurvey}/>
                    <Route path='/pie-chart' component={PieChart}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;