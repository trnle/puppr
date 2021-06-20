import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import pupprIcon from '../../images/puppr-icon.png';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/explore" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const navSignup = e => {
    e.preventDefault();
    history.push('/signup');
  }

  return (
    <div className='login-page-container'>

      <form onSubmit={handleSubmit} className='login-container'>
        <div className='login-form'>
          <img src={pupprIcon} alt="Puppr Icon" height='28px' weight='28px' />
          <p>Log in to Puppr</p>
          <ul id='errors-list'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div id='floatContainer' className='float-container'>
            <label>
              Username or Email
            </label>
            <input
              className='floatField'
              type='text'
              name='credential'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div id='floatContainer' className='float-container'>
            <label>
              Password
            </label>
            <input
              className='floatField'
              name='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' id='login-btn'>Log In</button>
          <div className='nav-sign-up'>
            <p>
              Not a Puppr member?
              <a href="/signup" onClick={navSignup}> Sign up here.</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;