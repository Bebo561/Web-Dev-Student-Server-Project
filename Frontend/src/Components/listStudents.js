import React from 'react'
import Navigation from './Navbar'
import axios from 'axios'
import {useState} from 'react'


function List(){
    //Information array that holds received data.
    var [infoArr, setArr] = useState([]);
    //When button is pressed, communicate with backend server, receive data, alert to user if communication was a succes or not,
    //and finally save data to information array.
    const onSubmit = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:5678/students';
        axios.get(url).then((res) => {
            setArr(res.data);
            console.log(infoArr);
            alert("Successful Submission!");
        }).catch((error) => {
            alert(error);
        })
    }
    //If the data has not yet been received, only display button.
    if(infoArr.length === 0){
    return(
        <React.Fragment>
            <Navigation></Navigation>
            <button id ="listbt" onClick = {onSubmit}>Get All Students</button>
        </React.Fragment>
    )
    }
    //Else, display all user information from database to frontend in table format.
    if(infoArr.length > 0){
        return(
            <React.Fragment>
                <Navigation></Navigation>
                <table>
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>GPA</th>
                        <th>Enrolled</th>
                    </tr>
                    </thead>
                    <tbody>
                    {infoArr.map(item => {
                    return (
                    <tr key ={item.ID}>
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

export default List