import React, {useState} from "react";
import "./SignUp.css";
import {Button} from '../components/Button';

import {Link} from "react-router-dom";
import Axios from "axios";


function SignUp() {

    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [username, set_username] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    //const [confirm_password, set_confirm_password] = useState("");

    const signUp = event => {
        event.preventDefault();
         const data = {
             first_name: first_name,
             last_name: last_name,
             username: username,
             email: email,
             password: password,
             // confirm_password: confirm_password
         };
         console.log(data)
         Axios.post("http://localhost:3001/user/sign-up", data).then(
             res =>{
                 console.log(res)
             }).catch(
                 err=> {
                     console.log("Error:" + err)
                 })
    };

    return (
        <form>
            <div className="SignUp">
                <h1>Sign Up</h1>
                <div className="SignUpForm">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First name" onChange={(event) => {
                        set_first_name(event.target.value);}}/>

                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder=" Enter Last name" onChange={(event) => {
                        set_last_name(event.target.value);}}/>

                    <label>Username:</label>
                    <input type="text" placeholder="Enter username" onChange={(event) => {
                        set_username(event.target.value);}}/>

                    <label>Email Address:</label>
                    <input type="email" placeholder="Enter email" required onChange={(event) => {
                        set_email(event.target.value);}}/>

                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" required onChange={(event) => {
                        set_password(event.target.value);}}/>

                    {/*<label>Confirm Password:</label>*/}
                    {/*<input type="password" placeholder="Confirm password" onChange={(event) => {*/}
                    {/*    set_confirm_password(event.target.value);}}/>*/}
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'
                        onClick={signUp}
                    >
                        SIGN UP
                    </Button>
                    <div>
                        <p className="already_registered text-right">
                            Already registered <Link href="#" to={"/login"}>log in?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SignUp;
