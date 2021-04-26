import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ExplorePage.css'

function ExplorePage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return (
      <Redirect to='/login'/>
    )
  }
  
  return (
    <div>
      <h3>test</h3>
    </div>
  )
}

export default ExplorePage;