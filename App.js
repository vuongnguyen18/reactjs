import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import Project from './Components/Project';
import Contact from './Components/Contact';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element = {<Home/>} /> 
            <Route path='/projects' element={<Project/>} />
            <Route path='/contact' element= {<Contact/>} />
            <Route path='/sign-up' element= {<Signup/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
