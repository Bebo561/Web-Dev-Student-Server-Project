import React from "react"
import Navigation from './Navbar'
import {useState} from 'react';
import axios from 'axios';

function Delete(){
    //Holds the value of the user input sid.
    const [sid, setSID] = useState();
    const onSubmit =(event) => {
        event.preventDefault();
        const url = 'http://localhost:5678/delete/' + sid;
        //Make sure that the user input fields correctly.
        if(sid === ''){
            return alert("Error - Missing Fields");
        }
        //send request to backend server, and inform the user if there was a successful communication.
        axios.delete(url).then((res) => {
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }
    return(
        //Basic form that takes in the user input
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Delete Student</h1>
            <form>
            <label for="record_id">Student ID:</label>
            <input type="text" onChange={(e) => setSID(e.target.value)} id="sid" name="record_id"/>

            <button onClick={onSubmit}>Delete</button>
            </form>
        </React.Fragment>
    )
}

export default Delete