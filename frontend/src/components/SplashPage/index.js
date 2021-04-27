// import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import DemoButton from '../DemoButton';
import './SplashPage.css'


function SplashPage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return (
      <div className='splash-page'>
        <div className='intro-text'>
          <h1>Find your happiness.</h1>
          <h2>Join the Puppr community, home to tens of billions of photos of dogs.</h2>
          <div className='demo-users'>
            <DemoButton />
          </div>
        </div>
      </div>
    )
  }
  return (
    <Redirect to='/explore' />
  )
}

export default SplashPage;