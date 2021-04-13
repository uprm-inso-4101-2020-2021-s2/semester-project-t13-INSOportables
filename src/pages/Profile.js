import React, {useState} from "react";
import "./Profile.css";
import Axios from "axios";

import {Link, useHistory} from "react-router-dom";
import {Button} from "../components/Button";

function Profile() {

    let history = useHistory();

    const logout = () => {
        localStorage.clear()
        window.alert("You have been logged out.")
        history.push("/");
        window.location.reload(false);
    }

    return (
        <form>
            <div className="Profile">
                <h1>Profile</h1>
                <div className="ProfileForm">
                    {/*<label>Username:</label>*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Enter Username..."*/}
                    {/*    onChange={(event) => {*/}
                    {/*        setUsername(event.target.value);*/}
                    {/*    }}/>*/}
                    {/*<label>Password:</label>*/}
                    {/*<input*/}
                    {/*    type="password"*/}
                    {/*    placeholder="Enter Password..."*/}
                    {/*    onChange={(event) => {*/}
                    {/*        setPassword(event.target.value);*/}
                    {/*    }}/>*/}
                    {/*<div className="custom-control custom-checkbox">*/}
                    {/*  <input type="checkbox" className="custom-control-input" id="customCheck1" />*/}
                    {/*  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
                    {/*</div>*/}
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--medium'
                        onClick={logout}
                    >
                        LOGOUT
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default Profile;
