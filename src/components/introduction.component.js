import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Introduction extends Component {

    render() {
        return (
            <form>
                <h3>Description</h3>
                <p> This is our app.</p>

                <Link to="/sign-up" className="btn btn-secondary btn-block">Sign Up</Link>
                <Link to="/log-in" className="btn btn-secondary btn-block">Sign In</Link>
                <Link to="/subfields" className="btn btn-secondary btn-block">Continue As Guest</Link>

            </form>
        );
    }
}