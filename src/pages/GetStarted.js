import React from "react";
import "./GetStarted.css";
import {Link} from "react-router-dom";
import {Button} from '../components/Button';

function GetStarted() {
    return (
        <form>
            <div className="GetStarted">
                <div className="GetStartedForm">
                    <h1>Description</h1>
                    <p> We wanna help new students understand the difference between the computing disciplines,
                        thus reducing the amount of concentration transfers.</p>
                    <p></p>
                    <Link to='sign-up'>
                        <Button
                            className='btns'
                            buttonStyle='btn--secondary'
                            buttonSize='btn--medium'
                        >
                            SIGN UP
                        </Button>
                    </Link>
                    <Link to="login">
                        <Button
                            className='btns'
                            buttonStyle='btn--secondary'
                            buttonSize='btn--medium'
                        >
                            LOG IN
                        </Button>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default GetStarted;
