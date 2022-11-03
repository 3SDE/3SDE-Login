import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
return (
  <div className='nav'>
    <h1 className='navName'>3SDE</h1>
    <Link className='link' to='/registrationForm'>
      <li>RegistrationForm</li>
    </Link>
    <Link className='link' to='/login'>
      <li>Login</li>
    </Link>
    <Link className='link' to='/home'>
      <li>Home</li>
    </Link>
  </div>
);};

export default NavBar;
