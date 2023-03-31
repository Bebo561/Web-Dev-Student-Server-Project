import React from "react"
import Navigation from './Navbar'
import axios from 'axios'
import {useState} from 'react'

function Display(){
    //Information array that takes in the sent data.
    var [arr, setArr] = useState([]);
    //Holds the value of user input.
    var [sid, setSID] = useState();
    const getStudent = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:5678/getStudent/' + sid;
        if(sid === ''){
            return alert('Error - Missing Fields!');
        }
        //Send the user input in the url paramters, when data is received save to information array.
        axios.get(url).then((res) => {
            setArr(arr => [...arr, res.data]);
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }

    //If the information has not been received, only display search bar and button.
    if(arr.length === 0){
        return(
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Display Student</h1>
            <form id='display'>
                <label >Student ID:</label>
                <input type="text" onChange={(e) => setSID(e.target.value)} id="sid" name="sid"/>
                <button onClick={getStudent}>Submit</button>
         </form>
        </React.Fragment>
    )
    }
    //If the information was received, output a table holding student information.
    else if(arr.length === 1){
        console.log("Hi")
        return(
            <React.Fragment>
                <Navigation></Navigation>
                <h1>Display Student</h1>
                <form id='display'>
                    <label >Student ID:</label>
                    <input type="text" onChange={(e) => setSID(e.target.value)} id="sid" name="sid"/>
                    <button onClick={getStudent}>Submit</button>
                 </form>
                 <table>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>GPA</th>
                        <th>Enrolled</th>
                    </tr>
                    <tbody>
                    {arr.map(item => {
                    return (
                    <tr>
                        <td>{item.ID}</td>
                        <td>{ item.first_name }</td>
                        <td>{ item.last_name }</td>
                        <td>{ item.gpa}</td>
                        <td>{ item.enrolled }</td>
                    </tr>
                    );
                    })}
                     </tbody>
                </table>
            </React.Fragment>
        )
    }
    
        
  
}

export default Display