import React from 'react';
import Navigation from './Navbar'
import './add.css'
import {useState} from 'react';
import axios from 'axios';

function Add(){
    //Variables that take in user input.
    const [sid, setSID] = useState();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gpa, setGPA] = useState();
    const [enrolled, setEnrolled] = useState('');

    const onSubmit =(event) => {
        //Prevents page from reloading
        event.preventDefault();
        const url = 'http://localhost:5678/student';
        //Checks if user inputted information correctly
        if(sid === '' || fname === ''|| lname === ''|| gpa === ''|| enrolled === ''){
            return alert("Error - Missing Fields");
        }
        //Set up the data in json format to be sent as a request.
        const addInfo = {
            student_id: sid,
            first_name: fname,
            last_name: lname,
            gpa: gpa,
            enrolled: enrolled
        };
        axios.post(url, addInfo).then((res) => {
            console.log(res);
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }
    //Basic user input form that updates the useState variables every time a character is input.
    return(
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Add Student</h1>
            <form onsubmit="return false" method="POST">
                <label >Student ID:</label>
                <input type="text" onChange={(e) => setSID(e.target.value)} id="sid" name="sid"/>

                <label >First Name:</label>
                <input type="text" onChange={(e) => setFname(e.target.value)} id="fname" name="nfame"/>

                <label >Last Name:</label>
                <input type="text" onChange={(e) => setLname(e.target.value)} id="lname" name="lname"/>

                <label >GPA:</label>
                <input type="text" onChange={(e) => setGPA(e.target.value)} id="gpa" name="gpa"/>

                <label >Enrolled:</label>
                <input type="text" onChange={(e) => setEnrolled(e.target.value)} id="enroll" name="enroll"/>

                <button onClick={onSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Add