import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormPage'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/" className='nav-link'>Explore</NavLink>
        <div id='profile-btn-container'>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div id='login-container'>
          <NavLink to="/login" className='nav-link'>Log In</NavLink>
        </div >
        <div id='signup-container'>
          <NavLink to="/signup" className='nav-link'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='nav-container'>
      <div id='puppr-logo'>
        <a href="/">
          <h2>puppr</h2>
        </a>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;