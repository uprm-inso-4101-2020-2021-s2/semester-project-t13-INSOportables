import React, {Component, useState} from "react";
import "./ForgotPassword.css";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const forgotPassword = () => {
    };
    return (
        <form>
            <div className="ForgotPassword">
                <h1>Forgot Password?</h1>
                <div className="ForgotPasswordForm">
                    <label>Email address:</label>
                    <input type="text" placeholder="Enter email" onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'
                        onClick={forgotPassword}
                    >
                        Send Email
                    </Button>
                    <div>
                        <p className="forgot-password text-right">
                            Already registered <Link href="#" to={"/login"}>log in?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ForgotPassword;