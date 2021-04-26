import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../store/session';
import './DemoButton.css';

function DemoButton() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      credential: 'Demo-lition',
      password: 'password'
    }
    await dispatch(login(user));
    history.push('/explore');
  }

  return (
    <div className='splash-demo-btn'>
      <form onSubmit={handleSubmit}>
        <button type='submit' id='demo-btn'>Demo</button>
      </form>
    </div>
  )
}

export default DemoButton;