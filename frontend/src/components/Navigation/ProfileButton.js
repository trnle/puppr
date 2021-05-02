import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const profile = e => {
    e.preventDefault();
    history.push(`/profile/${sessionUser.id}`);
  }

  const logout = async e => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <button onClick={openMenu} id='profile-btn'>
        <i className="fas fa-user-alt"></i>
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <a href={`/profile/${sessionUser.id}`} onClick={profile} id='profile-nav'>Profile</a>
          <a href='/' onClick={logout} id='logout-nav'>Log Out</a>
        </div>
      )}
    </>
  );
}

export default ProfileButton;