import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import UploadPhotoModal from '../../context/UploadPhotoModal';
// import LoginFormModal from '../LoginFormPage'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  const navExplore = e => {
    e.preventDefault();
    history.push('/explore');
  }

  const navHome = e => {
    e.preventDefault();
    history.push('/');
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id='puppr-logo'>
          <a href="/explore" onClick={navExplore}>
            <h2>puppr</h2>
          </a>
        </div>
        <NavLink exact to="/explore" className='nav-link'>Explore</NavLink>
        <div id='upload-btn-container'>
          <UploadPhotoModal user={sessionUser} />
        </div>
        <div id='profile-btn-container'>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div id='puppr-logo'>
          <a href="/" onClick={navHome}>
            <h2>puppr</h2>
          </a>
        </div>
        <div id='login-container'>
          <NavLink to="/login" className='nav-link'>Log In</NavLink>
        </div>
        <div id='signup-container'>
          <NavLink to="/signup" className='nav-link-2'>Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className='nav-container'>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;