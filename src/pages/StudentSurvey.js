import React, {Component} from 'react';
import './StudentSurvey.css'
//const firebase = require('firebase');
const uuid = require('uuid');
//
// const firebaseConfig = {
//     apiKey: "AIzaSyDmkRfYmLf-yG1N480Y2qj6ImtxHOQnpo8",
//     authDomain: "computersurvey-c8abe.firebaseapp.com",
//     databaseURL: "https://computersurvey-c8abe-default-rtdb.firebaseio.com",
//     projectId: "computersurvey-c8abe",
//     storageBucket: "computersurvey-c8abe.appspot.com",
//     messagingSenderId: "788733827660",
//     appId: "1:788733827660:web:fa8d791b6feec6907eb2e9",
//     measurementId: "G-KDKDN5M6GT"
//};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

class StudentSurvey extends Component {

    studentNameSubmit(event) {
        const name = this.refs.name.value;
        this.setState({studentName : name}, function (){
            console.log(this.state);
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                ans1: '',
                ans2: '',
                ans3: '',
                ans4: '',
                ans5: '',
            },
            isSubmitted: false
        }
        this.studentNameSubmit = this.studentNameSubmit.bind(this)
    }

    render() {
        var name =  '';
        var questions = '';

        if (this.state.studentName == '' && this.state.isSubmitted == false) {
            name = <div>
                <h1>Hey! Please enter your name.</h1>
                <form onSubmit={this.studentNameSubmit}>
                    <input className="sName" type="text" placeholder="Please Enter Your Name" ref="name"/>
                </form>
            </div>
        }
        else if (this.state.studentName !== '' && this.state.isSubmitted == false) {
            name = <div>
                <h1>Welcome! {this.state.studentName} to our survey</h1>
            </div>
            questions = <div>
                <h2>Here are some questions</h2>
                <form onSubmit="">
                    <div> className="card"
                        <label>What do you like the most?</label>
                        <input type="radio"name="ans1" value="Sports" /> Sports
                    </div>
                </form>
            </div>
        }


        return (
            <div>

                {name}

                =======================

                {questions}

            </div>
        );
    }
}

export default StudentSurvey