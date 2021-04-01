import React, {useState} from "react";
import "./SignUp.css";
import {Button} from '../components/Button';

import Axios from "axios";
import {Link} from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signUp = () => {
        console.log(username);
        Axios.post("http://localhost:3001/user/sign-up", {
            username: username,
            password: password,
            email: email,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <form>
            <div className="SignUp">
                <h1>Sign Up</h1>
                <div className="SignUpForm">
                    {/*<label>First name</label>*/}
                    {/*<input type="text" className="form-control" placeholder="First name" />*/}

                    {/*<label>Last name</label>*/}
                    {/*<input type="text" className="form-control" placeholder="Last name" />*/}

                    <label>Username:</label>
                    <input type="text" placeholder="Enter username" onChange={(event) => {
                        setUsername(event.target.value);
                    }}/>
                    <label>Password:</label>
                    <input type="text" placeholder="Enter password" onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                    <label>Email address:</label>
                    <input type="text" placeholder="Enter email" onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'
                        onClick={signUp}
                    >
                        SIGN UP
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

export default SignUp;
