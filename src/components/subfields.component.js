import React, {Component} from "react";
import {render} from "react-dom";
import ZingGrid from 'zinggrid';

export default class Subfields extends Component {

    // initialize variables
    constructor(props) {
        super(props);
        this.state = {
            subfields: []
        }
    }

    // initialize data to grid
    componentDidMount() {
        // set state and reflect that change through attribute mutation
        this.setState(() => {
            return {
                "subfields": [
                    {
                        "Subfield": "Dachshund",
                        "Branch": "Sousage"
                    },
                    {
                        "Subfield": "Corgi",
                        "Branch": "Plop"
                    },
                    {
                        "Subfield": "Pomeranian",
                        "Branch": "Floof"
                    }
                ]
            }
        });
    }

    // We are using JSON.stringify because that is the proper way to pass an object to an attribute
    // per the HTML spec. Alternatively you can use ZingGrid api to setdata if you do
    // not want a string form of data in the DOM tied to an attribute
    render() {
        return (
            <zing-grid id="subfields" caption="List of Subfields" data={JSON.stringify(this.state.subfields)}
                       loading></zing-grid>
        );
    }
}