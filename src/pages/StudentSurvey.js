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
        this.setState({studentName : name }, function (){
            console.log(this.state);
        })
    };

    surveySubmit(event){
        // firebase.database.ref('studentSurvey/'+this.state.uid).set({
        //     studentName:this.state.studentName,
        //     answers:this.state.answers
        // });
        //
        // this.setState({isSubmitted:true})
    };

    answerSelected(event){
        var answers = this.state.answers;

        if(event.target.name == 'ans1'){
            answers.ans1 = event.target.value;
        }
        else if(event.target.name == 'ans2'){
            answers.ans2 = event.target.value;
        }
        else if(event.target.name == 'ans3'){
            answers.ans3 = event.target.value;
        }
        else if(event.target.name == 'ans4'){
            answers.ans4 = event.target.value;
        }
        else if(event.target.name == 'ans5'){
            answers.ans5 = event.target.value;
        }
        else if(event.target.name == 'ans6'){
            answers.ans6 = event.target.value;
        }
        else if(event.target.name == 'ans7'){
            answers.ans7 = event.target.value;
        }
        else if(event.target.name == 'ans8'){
            answers.ans8 = event.target.value;
        }
        else if(event.target.name == 'ans9'){
            answers.ans9 = event.target.value;
        }
        else if(event.target.name == 'ans10'){
            answers.ans10 = event.target.value;
        }
        else if(event.target.name == 'ans11'){
            answers.ans11 = event.target.value;
        }

        this.setState({answers:answers},function(){
            console.log(this.state);
        })
    };

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
        this.studentNameSubmit = this.studentNameSubmit.bind(this);
        this.surveySubmit = this.surveySubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this)
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
            </div>;
        }
        else if (this.state.studentName !== '' && this.state.isSubmitted == false) {
            name = <div>
                <h1>Welcome {this.state.studentName} to our survey!</h1>
            </div>;
            questions = <div>
                <h2>Here are some questions</h2>
                <form onSubmit={this.surveySubmit}>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans1" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans1" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans1" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans1" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans2" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans2" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans2" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans2" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans3" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans3" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans3" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans3" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans4" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans4" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans4" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans4" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans5" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans5" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans5" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans5" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans6" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans6" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans6" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans6" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans7" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans7" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans7" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans7" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans8" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans8" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans8" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans8" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans9" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans9" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans9" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans9" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans10" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans10" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans10" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans1" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>

                    <div className="card">
                        <label>What do you like the most?</label><br/>
                        <input type="radio"name="ans11" value="Sports" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans11" value="Tech" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans11" value="CIIC" onChange={this.answerSelected} /> Sports
                        <input type="radio"name="ans11" value="UPRM" onChange={this.answerSelected} /> Sports
                    </div>
                    <input className="feedback-button" type="submit" value="submit"/>
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