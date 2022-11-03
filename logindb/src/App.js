import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/login/Login"
import RegistrationForm from "./components/login/RegistrationForm";
import Home from "../src/components/login/Home";
import NavBar from "./components/login/NavBar";


function App() {
  return (
    <Router>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/registrationForm' element={<RegistrationForm />} />
          <Route path='/login' element={<Login />} />
          <Route exact path='/home'element={<Home />} />
          {/* <h1>hello</h1> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
