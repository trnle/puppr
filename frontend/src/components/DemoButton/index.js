import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../store/session';
import './DemoButton.css';

function DemoButton() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const user = {
      credential: 'jaxy',
      password: 'password'
    }
    await dispatch(login(user));
    history.push('/explore');
  }
  
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const user = {
      credential: 'momo',
      password: 'momo'
    }
    await dispatch(login(user));
    history.push('/explore');
  }

  return (
    <div className='splash-demo-btn'>
      <form onSubmit={handleSubmit1}>
        <button type='submit' id='demo-btn'>Demo 1</button>
      </form>
      <form onSubmit={handleSubmit2}>
        <button type='submit' id='demo-btn'>Demo 2</button>
      </form>
    </div>
  )
}

export default DemoButton;