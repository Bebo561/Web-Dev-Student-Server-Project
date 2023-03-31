import './App.css';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import Index from './Components/index'
import Add from './Components/addStudent'
import Delete from './Components/deleteStudent'
import Display from './Components/displayStudent'
import Update from './Components/updateStudents'
import List from './Components/listStudents'
import Search from './Components/search'

function App() {
  //Here in this file we create the routes to each component of our website, letting the application know
  //what to render when a new route path is opened. A route path defined as '/' is the default landing page of the site.
  //Created using react-router-dom version 6.
  return (
    <React.Fragment>
    <Routes>
      <Route path = "/" element={<Index />}/>
      <Route path = "/addStudent" element={<Add />}/>
      <Route path = "/deleteStudent" element={<Delete />}/>
      <Route path = "/displayStudent" element={<Display />}/>
      <Route path = "/updateStudent" element={<Update />}/>
      <Route path = "/listStudent" element={<List />}/>
      <Route path = "/search" element={<Search />}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
