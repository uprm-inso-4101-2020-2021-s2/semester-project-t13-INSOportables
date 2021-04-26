import React from 'react';
import "./Quiz.css";
import {Link, useHistory} from "react-router-dom";
import {Button} from "../components/Button";

function Quiz() {
    let history = useHistory();
    const isLoggedIn = localStorage.getItem("loggedIn");

    const checkLoggedIn = event => {
        event.preventDefault();
        if(isLoggedIn === false || isLoggedIn === null){
            window.alert("To access quiz you must first log in.")
        }
        else{
            history.push("/student-survey");
        }
    }

    return(
        <form>
            <div className="Quiz">
                <h1>Take quiz</h1>
                <div className="QuizForm">
                    <Link to='student-survey'>
                        <Button
                            className='btns'
                            buttonStyle='btn--secondary'
                            buttonSize='btn--medium'
                            onClick={checkLoggedIn}
                        >
                            Go To Quiz
                        </Button>
                    </Link>
                </div>
            </div>
        </form>
    )
}
export default Quiz