import React from 'react'
import Navigation from './Navbar'
import axios from 'axios'
import {useState} from 'react'

function Search(){
    //An information array that will take in the value of the data sent from the server.
    var [infoArr, setArr] = useState([]);
    //Holds the input value of the last name
    var [lname, setLname] = useState('');
    //When a user clicks submit, get the information from the backedn and store it in infoArr hook. Alert the user there was 
    //a success.
    const onSubmit = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:5678/search/' + lname;
        axios.get(url).then((res) => {
            setArr(res.data);
            console.log(infoArr);
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }

    //If no information has been received yet, simply show the search bar and submit button.
    if(infoArr.length === 0){
        return(
        <React.Fragment>
            <Navigation></Navigation>
            <h1>Display Students By Last Name</h1>
            <form id='display'>
                <label >Last Name:</label>
                <input type="text" onChange={(e) => setLname(e.target.value)} id="lname" name="lname"/>
                <button onClick={onSubmit}>Submit</button>
         </form>
        </React.Fragment>
    )
    }
    //If information has been received, display the student information as a table to the user.
    //The way the table works is by creating mapping each students information field to a row using the key of their id.
    //There will be as many rows as there are student documentation received.
    else if(infoArr.length > 0){
        return(
            <React.Fragment>
                <Navigation></Navigation>
                <h1>Display Students By Last Name</h1>
                <form id='display'>
                    <label >Last Name:</label>
                    <input type="text" onChange={(e) => setLname(e.target.value)} id="lname" name="lname"/>
                    <button onClick={onSubmit}>Submit</button>
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
                    {infoArr.map(item => {
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

export default Search