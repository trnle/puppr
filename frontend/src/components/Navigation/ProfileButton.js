import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} id='profile-btn'>
        <i class="fas fa-user-alt"></i>
      </button>
      {showMenu && (
        <div className="dropdown-menu">
            <a href="/profile" id='profile-nav'>Profile</a>
            <a href='/' onClick={logout} id='logout-nav'>Log Out</a>
        </div>
      )}
    </>
  );
}

export default ProfileButton;