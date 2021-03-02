import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class ForgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password?</h3>

                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btn btn-secondary btn-block">Send</button>
                <p className="forgot-password text-right">
                    Already registered <Link href="#" to={"/log-in"}>sign in?</Link>
                </p>
            </form>
        );
    }
}