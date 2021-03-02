import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {

        return (
            <form>
                <h4> What would you like to do?</h4>

                <button className="btn btn-success btn-block"> Take Quiz</button>
                <Link to="/subfields" className="btn btn-secondary">Browse Table</Link>
            </form>
        );

    }
}
