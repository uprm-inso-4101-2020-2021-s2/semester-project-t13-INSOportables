import React from 'react';
import '../App.css';
import {Button} from "../components/Button";
import {Link} from "react-router-dom";


function Quiz() {
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