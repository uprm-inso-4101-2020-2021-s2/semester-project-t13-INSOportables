import React, {useState} from "react";
import "./Login.css";
import Axios from "axios";

import {Link, useHistory} from "react-router-dom";
import {Button} from "../components/Button";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    let history = useHistory();

    const login = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/user/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", response.data.username);
                window.alert("You have been logged in.")
                history.push("/");
                window.location.reload(false);
            } else {
                setErrorMessage(response.data.message);
                window.setInterval('window.location.reload(true);', 1000);
            }
        });
    };

    return (
        <form>
            <div className="Login">
                <h1>Log In</h1>
                <div className="LoginForm">
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        placeholder="Enter Username..."
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}/>
                    <label>Password:</label>
                    <input
                        required
                        type="password"
                        placeholder="Enter Password..."
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}/>
                    {/*<div className="custom-control custom-checkbox">*/}
                    {/*  <input type="checkbox" className="custom-control-input" id="customCheck1" />*/}
                    {/*  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
                    {/*</div>*/}
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'
                        onClick={login}
                    >
                        LOG IN
                    </Button>
                    <div>
                        <h1 style={{ color: "red" }}>{errorMessage} </h1>
                        <p className="forgot-password text-right">
                            Forgot <Link href="#" to={"/forgot-password"}>password?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login;
