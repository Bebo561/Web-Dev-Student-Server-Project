import React from "react"
import Navigation from './Navbar'
import {useState} from 'react';
import axios from 'axios';

function Update(){
    //Variable hooks that take in user input
    const [sid, setSID] = useState();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gpa, setGPA] = useState();
    const [enrolled, setEnrolled] = useState('');

    const onSubmit =(event) => {
        event.preventDefault();
        const url = 'http://localhost:5678/students/' + sid;
        //Checks to see if user has correctly input all fileds, if not return an error alert.
        if(sid === '' || fname === ''|| lname === ''|| gpa === ''|| enrolled === ''){
            return alert("Error - Missing Fields");
        }
        //Package user inputted information as json and send to the backend.
        const updateInfo = {
            student_id: sid,
            first_name: fname,
            last_name: lname,
            gpa: gpa,
            enrolled: enrolled
        };
        console.log(updateInfo);
        axios.put(url, updateInfo).then((res) => {
            console.log(res);
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }

    //Basic form that takes in user input.
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Update Students</h1>
            <form>
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

            <button onClick={onSubmit}>Update Students</button>
            </form>
        </React.Fragment>
    )
}

export default Update