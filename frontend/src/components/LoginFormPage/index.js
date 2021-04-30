import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import pupprIcon from '../../images/puppr-icon.png';

function LoginFormPage() {
  const dispatch = useDispatch();
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

  const FloatLabel = (() => {
    // add active class
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
    };
    // remove active class
    const handleBlur = (e) => {
      const target = e.target;
      if (!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');
    };
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);
    };
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
          element.classList.add('active');
        }
        bindEvents(element);
      });
    };

    return {
      init: init
    };
  })();

  FloatLabel.init();

  return (
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
            id='floatField'
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
            id='floatField'
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
          <a href="/signup"> Sign up here.</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginFormPage;